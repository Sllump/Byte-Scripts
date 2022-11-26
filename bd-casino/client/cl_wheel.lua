local _wheel = nil
local _isShowCar = false
local _wheelPos = vector3(990.2846, 42.831645, 70.5)  --vector4(990.1536, 42.33509, 71.26531, 337.005)


local _baseWheelPos = vector3(990.2846, 42.831645, 70.5)  --vector4(988.1124, 39.27952, 70.61186, 315.5471)
local _isRolling = false
local model = GetHashKey('vw_prop_vw_luckywheel_02a')
local baseWheelModel = GetHashKey('vw_prop_vw_luckywheel_01a')
Citizen.CreateThread(function()
    RequestModel(model)
    while not HasModelLoaded(model) do
        Citizen.Wait(0)
    end
    _wheel = CreateObject(model, 990.2846, 42.831645, 70.5, false, false, true)
    SetEntityHeading(_wheel, 328.00)
    SetModelAsNoLongerNeeded(model)
end)

RegisterNetEvent("bd-luckywheel:doRoll")
AddEventHandler("bd-luckywheel:doRoll", function(_priceIndex) 
    _isRolling = true
	SetEntityHeading(_wheel, 328.00)
    Citizen.CreateThread(function()
        local speedIntCnt = 1
        local rollspeed = 1.0
        local _winAngle = (_priceIndex - 1) * 18
        local _rollAngle = _winAngle + (360 * 8)
        local _midLength = (_rollAngle / 2)
        local intCnt = 0
        while speedIntCnt > 0 do
            local retval = GetEntityRotation(_wheel, 1)
            if _rollAngle > _midLength then
                speedIntCnt = speedIntCnt + 1
            else
                speedIntCnt = speedIntCnt - 1
                if speedIntCnt < 0 then
                    speedIntCnt = 0
                    
                end
            end
            intCnt = intCnt + 1
            rollspeed = speedIntCnt / 10
            local _y = retval.y - rollspeed
            _rollAngle = _rollAngle - rollspeed
			SetEntityHeading(_wheel, 328.00)
            SetEntityRotation(_wheel, 0.0, _y, 328.00, 2, true)
            Citizen.Wait(5)
        end
    end)
end)

RegisterNetEvent("bd-luckywheel:rollFinished")
AddEventHandler("bd-luckywheel:rollFinished", function() 
    _isRolling = false
end)

function loadAnimDict( dict )
    while ( not HasAnimDictLoaded( dict ) ) do
        RequestAnimDict( dict )
        Citizen.Wait( 5 )
    end
end 

function doRoll()
    local pChips = RPC.execute('bd-casino:getChips')

    if exports['bd-inventory']:hasEnoughOfItem('casinomember', 1) then
        if not _isRolling then
            _isRolling = true
            local playerPed = PlayerPedId()
            local _lib = 'anim_casino_a@amb@casino@games@lucky7wheel@female'
            if IsPedMale(playerPed) then
                _lib = 'anim_casino_a@amb@casino@games@lucky7wheel@male'
            end
            local lib, anim = _lib, 'enter_right_to_baseidle'
            loadAnimDict(lib)
            local _movePos = vector3(988.3577, 42.47411, 71.2655)  --vector4(988.3577, 42.47411, 71.2655, 287.6328)
            TaskGoStraightToCoord(playerPed,  _movePos.x,  _movePos.y,  _movePos.z,  1.0,  -1,  312.2,  0.0)
            local _isMoved = false
            while not _isMoved do
                local coords = GetEntityCoords(PlayerPedId())
                if coords.x >= (_movePos.x - 0.01) and coords.x <= (_movePos.x + 0.01) and coords.y >= (_movePos.y - 0.01) and coords.y <= (_movePos.y + 0.01) then
                    _isMoved = true
                end
                Citizen.Wait(0)
            end
            TaskPlayAnim(playerPed, lib, anim, 8.0, -8.0, -1, 0, 0, false, false, false)
            while IsEntityPlayingAnim(playerPed, lib, anim, 3) do
                Citizen.Wait(0)
                DisableAllControlActions(0)
            end
            TaskPlayAnim(playerPed, lib, 'enter_to_armraisedidle', 8.0, -8.0, -1, 0, 0, false, false, false)
            while IsEntityPlayingAnim(playerPed, lib, 'enter_to_armraisedidle', 3) do
                Citizen.Wait(0)
                DisableAllControlActions(0)
            end
            if pChips >= 500 then
                TriggerEvent('bd-casino:removeChipsCL', 500)
                TriggerServerEvent("bd-luckywheel:getLucky")
                TaskPlayAnim(playerPed, lib, 'armraisedidle_to_spinningidle_high', 8.0, -8.0, -1, 0, 0, false, false, false)
            else
                _isRolling = false
                TriggerEvent('DoLongHudText', 'You need 500x Red Chips.', 2)
            end
        end
    else
        TriggerEvent('DoLongHudText', 'You need a casino membership to use this', 2)
    end
end

RegisterNetEvent("bd-luckywheel:spinit")
AddEventHandler("bd-luckywheel:spinit", function() 
    if not _isRolling  then
        doRoll()

    end		
end)

RegisterNetEvent('attempt:spin-in', function()
    TriggerServerEvent("attempt:spin")
end)

RegisterNetEvent("attempt:change:spin", function()
    local isEmployed = exports["bd-business"]:IsEmployedAt("casino")
	if isEmployed then 
		TriggerServerEvent("spin:toggle")
	else
		TriggerEvent("DoLongHudText", "This is only for Casino Dealer to use.", 2)
	end
end)





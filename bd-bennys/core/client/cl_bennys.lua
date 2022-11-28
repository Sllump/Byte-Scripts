--[[
cl_bennys.lua
Functionality that handles the player for Benny's.
Handles applying mods, etc.
]]

--#[Global Variables]#--
isPlyInBennys = false
currentBennys = nil
isRepairing = false
currentReceiptData = {}

--#[Local Variables]#--
local plyFirstJoin = false

local attemptingPurchase = false
local isPurchaseSuccessful = false

--
local originalVehicleMods = {
    neon = {},
    colors = {},
    extracolors = {},
    dashColour = -1,
    interColour = -1,
    lights = {},
    tint = 0,
    wheeltype = nil,
    mods = {},
    smokecolor = {},
    xenonColor = -1,
    oldLiveries = 24,
    extras = {},
    plateIndex = 0,
    customTyres = 0,
}

local function getOriginalMods(veh)
    originalVehicleMods.xenonColor = GetCurrentXenonColour(veh)
    originalVehicleMods.lights[1], originalVehicleMods.lights[2], originalVehicleMods.lights[3] = GetVehicleNeonLightsColour(veh)
    originalVehicleMods.colors[1], originalVehicleMods.colors[2] = GetVehicleColours(veh)
    originalVehicleMods.extracolors[1], originalVehicleMods.extracolors[2] = GetVehicleExtraColours(veh)
    originalVehicleMods.smokecolor[1], originalVehicleMods.smokecolor[2], originalVehicleMods.smokecolor[3] = GetVehicleTyreSmokeColor(veh)
    originalVehicleMods.dashColour = GetVehicleDashboardColour(veh)
    originalVehicleMods.interColour = GetVehicleInteriorColour(veh)
    originalVehicleMods.oldLiveries = GetVehicleLivery(veh)
    originalVehicleMods.plateIndex = GetVehicleNumberPlateTextIndex(veh)
    originalVehicleMods.tint = GetVehicleWindowTint(veh)
    originalVehicleMods.wheeltype = GetVehicleWheelType(veh)

    if GetVehicleClass(veh) == 8 then
        originalVehicleMods.customTyres = GetVehicleModVariation(veh, 24)
    else
        originalVehicleMods.customTyres = GetVehicleModVariation(veh, 23)
    end

    for i = 0, 3 do
        originalVehicleMods.neon[i] = IsVehicleNeonLightEnabled(veh, i)
    end

    for i = 0,16 do
        originalVehicleMods.mods[i] = GetVehicleMod(veh,i)
    end

    for i = 17, 22 do
        originalVehicleMods.mods[i] = IsToggleModOn(veh, i)
    end

    for i = 23, 48 do
        originalVehicleMods.mods[i] = GetVehicleMod(veh,i)
    end

    for i = 0, 13 do
        local isOn = IsVehicleExtraTurnedOn(veh, i)
        if isOn then
            originalVehicleMods.extras[i] = 0
        else
            originalVehicleMods.extras[i] = 1
        end
    end
end

function GetOriginalMod(category, index)
    return originalVehicleMods[category][index]
end

function RestoreOriginalModification()
    RestoreOriginalMods()
    RestoreOriginalColours()
    RestoreOriginalWheels()
    RestoreOriginalNeonStates()
    RestoreOriginalWindowTint()
    RestoreOldLivery()
    RestorePlateIndex()
    RestoreOriginalNeonColours()
    RestoreOriginalXenonColour()
    RestoreOriginalCustomTyres()
    RestoreOriginalSmokeColour()
end

--#[Global Functions]#--
function AttemptPurchase(type)
    if currentBennys ~= nil and currentBennys.free ~= nil and currentBennys.free == true then
        return true
    end

    TriggerServerEvent("arp-bennys:attemptPurchase", type)
    attemptingPurchase = true

    while attemptingPurchase do
        Citizen.Wait(0)
    end

    if not isPurchaseSuccessful then
        PlaySoundFrontend(-1, "ERROR", "HUD_FRONTEND_DEFAULT_SOUNDSET", 1)
    end

    return isPurchaseSuccessful
end

function DelayRepairVehicle()
    local plyPed = PlayerPedId()
    local vehicle = GetVehiclePedIsIn(plyPed)

    -- Repairing Vehicle, prevent entering repair location
    isRepairing = true

    local engineTime = CalculateEngineRepairTime(GetVehicleEngineHealth(vehicle))
    local bodyTime = CalculateBodyRepairTime(GetVehicleBodyHealth(vehicle))

    -- These are for when Benny's repairs are disabled
    ExitBennys()

    FreezeEntityPosition(vehicle, true)
    --local finished = exports['arp-taskbar']:taskBar(engineTime, "Repairing Engine", true, false, vehicle, true)
    local finished = exports['arp-taskbar']:taskBar(5000, 'Repairing Engine')
    if finished == 100 then
        SetVehicleEngineHealth(vehicle, 1000.0)
    end

    -- Allow taskBar to end properly
    Citizen.Wait(100)
    -- Allow movement
    FreezeEntityPosition(vehicle, false)
    --local body = exports['arp-taskbar']:taskBar(bodyTime, "Repairing Body", true, false, vehicle, true)
    local body = exports['arp-taskbar']:taskBar(5000, 'Repairing Body')
    if body == 100 then
        local fuel = GetVehicleFuelLevel(vehicle)
        SetVehicleFixed(vehicle)
        SetVehicleFuelLevel(vehicle, fuel)

        SetVehicleDirtLevel(vehicle, 0.0)
        SetVehiclePetrolTankHealth(vehicle, 4000.0)
    end

    TriggerServerEvent("sv:vehicles:resetStalls", VehToNet(vehicle))

    isRepairing = false
end

-- Modulus % doesn't seem to work properly in Lua else it'd be more maths than this bullshit
function CalculateEngineRepairTime(engineHealth)
    local engineTime = 3000

    local missingHealth = math.ceil(1000.0 - engineHealth)

    if missingHealth > 200 then
        engineTime = engineTime + 2000
    end

    if missingHealth > 400 then
        engineTime = engineTime + 4000
    end

    if missingHealth > 600 then
        engineTime = engineTime + 5000
    end

    return engineTime
end

function CalculateBodyRepairTime(bodyHealth)
    local bodyTime = 1500

    local missingHealth = math.ceil(1000.0 - bodyHealth)

    if missingHealth > 200 then
        bodyTime = bodyTime + 1500
    end

    if missingHealth > 400 then
        bodyTime = bodyTime + 3000
    end

    if missingHealth > 600 then
        bodyTime = bodyTime + 4000
    end

    return bodyTime
end

function GetCurrentMod(id)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local mod = GetVehicleMod(plyVeh, id)
    local modName = GetLabelText(GetModTextLabel(plyVeh, id, mod))

    return mod, modName
end

function GetCurrentWheel()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local wheel = GetVehicleMod(plyVeh, 23)
    local wheelName = GetLabelText(GetModTextLabel(plyVeh, 23, wheel))
    local wheelType = GetVehicleWheelType(plyVeh)

    return wheel, wheelName, wheelType
end

function GetCurrentCustomWheelState()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local state = GetVehicleModVariation(plyVeh, 23)

    if state then
        return 1
    else
        return 0
    end
end

function GetOriginalWheel()
    return originalWheel
end

function GetOriginalCustomWheel()
    return originalCustomWheels
end

function GetCurrentWindowTint()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    return GetVehicleWindowTint(plyVeh)
end

function GetCurrentVehicleWheelSmokeColour()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local r, g, b = GetVehicleTyreSmokeColor(plyVeh)

    return r, g, b
end

function GetCurrentNeonState(id)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local isEnabled = IsVehicleNeonLightEnabled(plyVeh, id)

    if isEnabled then
        return 1
    else
        return 0
    end
end

function GetCurrentNeonColour()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local r, g, b = GetVehicleNeonLightsColour(plyVeh)

    return r, g, b
end

function GetCurrentXenonState()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local isEnabled = IsToggleModOn(plyVeh, 22)

    if isEnabled then
        return 1
    else
        return 0
    end
end

function GetCurrentXenonColour()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    return GetVehicleHeadlightsColour(plyVeh)
end

function GetCurrentTurboState()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local isEnabled = IsToggleModOn(plyVeh, 18)

    if isEnabled then
        return 1
    else
        return 0
    end
end

function GetCurrentExtraState(extra)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    return IsVehicleExtraTurnedOn(plyVeh, extra)
end

function CheckValidMods(category, id, wheelType)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local tempMod = GetVehicleMod(plyVeh, id)
    local tempWheel = GetVehicleMod(plyVeh, 23)
    local tempWheelType = GetVehicleWheelType(plyVeh)
    local tempWheelCustom = GetVehicleModVariation(plyVeh, 23)
    local validMods = {}
    local amountValidMods = 0
    local hornNames = {}

    if wheelType ~= nil then
        SetVehicleWheelType(plyVeh, wheelType)
    end

    if id == 14 then
        for k, v in pairs(vehicleCustomisation) do 
            if vehicleCustomisation[k].category == category then
                hornNames = vehicleCustomisation[k].hornNames

                break
            end
        end
    end

    local modAmount = GetNumVehicleMods(plyVeh, id)
    for i = 1, modAmount do
        local label = GetModTextLabel(plyVeh, id, (i - 1))
        local modName = GetLabelText(label)

        if modName == "NULL" then
            if id == 14 then
                if i <= #hornNames then
                    modName = hornNames[i].name
                else
                    modName = "Horn " .. i
                end
            else
                modName = category .. " " .. i
            end
        end

        validMods[i] = 
        {
            id = (i - 1),
            name = modName
        }

        amountValidMods = amountValidMods + 1
    end

    if modAmount > 0 then
        table.insert(validMods, 1, {
            id = -1,
            name = "Stock " .. category
        })
    end

    if wheelType ~= nil then
        SetVehicleWheelType(plyVeh, tempWheelType)
        SetVehicleMod(plyVeh, 23, tempWheel, tempWheelCustom)
    end

    return validMods, amountValidMods
end

function RestorePreviewMods()
    local playerPed = PlayerPedId()
    local playerVehicle = GetVehiclePedIsIn(playerPed, false)

    if currentReceiptData.upgrades == nil then return end
    for _, v in pairs(currentReceiptData.upgrades) do
        local modData = v.modData

        if modData == nil then
            -- Do nothing??
        elseif v.type == "mod" then
            if v.category == 17 or v.category == 18 or v.category == 19 or v.category == 20 or v.category == 21 or v.category == 22 then
                ToggleVehicleMod(playerVehicle, modData.category, modData.mod)
            end

            SetVehicleMod(playerVehicle, modData.category, modData.mod)
        elseif v.type == "tint" then
            SetVehicleWindowTint(playerVehicle, modData.windowTint)
        elseif v.type == "paint" then
            RestorePreviewColours(modData.paintID, modData.paintCategory, modData.paintType)
        elseif v.type == "wheels" then
            RestorePreviewWheels(modData.category, modData.wheel, modData.wheelType, originalVehicleMods.customTyres)
        elseif v.type == "neon" then
            SetVehicleNeonLightEnabled(playerVehicle, modData.side, modData.enabled)
        elseif v.type == "neon_colours" then
            SetVehicleNeonLightsColour(playerVehicle, modData.r, modData.g, modData.b)
        elseif v.type == "xenons" then
            ToggleVehicleMod(playerVehicle, modData.category, modData.state)
        elseif v.type == "xenon_colours" then
            SetVehicleXenonLightsColor(playerVehicle, modData.colour)
        elseif v.type == "plate_index" then
            SetVehicleNumberPlateTextIndex(playerVehicle, modData.index)
        elseif v.type == "tyre_smoke" then
            SetVehicleTyreSmokeColor(playerVehicle, modData.r, modData.g, modData.b)
        end
    end
end

function RestoreOriginalMods()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    for i = 0,16 do
        SetVehicleMod(plyVeh, i, originalVehicleMods.mods[i])
    end

    for i = 17, 22 do
        ToggleVehicleMod(plyVeh, i, originalVehicleMods.mods[i])
    end

    for i = 25, 48 do
        SetVehicleMod(plyVeh, i, originalVehicleMods.mods[i])
    end

    SetVehicleDoorShut(plyVeh, 4, false)
    SetVehicleDoorShut(plyVeh, 5, false)
end

function RestoreOriginalWindowTint()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleWindowTint(plyVeh, originalVehicleMods.tint)
end

function RestoreOriginalColours()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleColours(plyVeh, originalVehicleMods.colors[1], originalVehicleMods.colors[2])
    SetVehicleExtraColours(plyVeh, originalVehicleMods.extracolors[1], originalVehicleMods.extracolors[2])
    SetVehicleDashboardColour(plyVeh, originalVehicleMods.dashColour)
    SetVehicleInteriorColour(plyVeh, originalVehicleMods.interColour)
end

function RestoreOriginalWheels()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    local wheelCategory = 23
    if GetVehicleClass(plyVeh) == 8 then
        wheelCategory = 24
    end

    SetVehicleWheelType(plyVeh, originalVehicleMods.wheeltype)
    if originalVehicleMods.mods[wheelCategory] ~= nil then
        SetVehicleMod(plyVeh, wheelCategory, originalVehicleMods.mods[wheelCategory], originalVehicleMods.customTyres)
    end
end

function RestoreOriginalNeonStates()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    for i = 0, 3 do
         SetVehicleNeonLightEnabled(plyVeh, i, originalVehicleMods.neon[i])
    end
end

function RestoreOriginalNeonColours()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleNeonLightsColour(plyVeh, originalVehicleMods.lights[1], originalVehicleMods.lights[2], originalVehicleMods.lights[3])
end

function RestoreOriginalXenonColour()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleHeadlightsColour(plyVeh, originalVehicleMods.xenonColor)
    SetVehicleLights(plyVeh, 0)
end

function RestoreOriginalCustomTyres()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    if GetVehicleClass(plyVeh) == 8 then
        SetVehicleMod(plyVeh, 24, GetVehicleMod(plyVeh, 24), originalVehicleMods.customTyres)
    else
        SetVehicleMod(plyVeh, 23, GetVehicleMod(plyVeh, 23), originalVehicleMods.customTyres)
    end
end

function RestoreOriginalSmokeColour()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleTyreSmokeColor(plyVeh, originalVehicleMods.smokecolor[1], originalVehicleMods.smokecolor[2], originalVehicleMods.smokecolor[3])
end

function RestoreOldLivery()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    SetVehicleLivery(plyVeh, originalVehicleMods.oldLiveries)
end

function RestorePlateIndex()
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    SetVehicleNumberPlateTextIndex(plyVeh, originalVehicleMods.plateIndex)
end

function RestorePreviewColours(paintID, paintCategory, paintType)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local vehPrimaryColour, vehSecondaryColour = GetVehicleColours(plyVeh)
    local vehPearlescentColour, vehWheelColour = GetVehicleExtraColours(plyVeh)

    local typeName = GetColourTypeName(paintType)
    local category, paintName = GetPaintName(paintCategory, paintID)

    if paintType == 0 then --Primary Colour
        if paintCategory == 1 then --Metallic Paint
            SetVehicleColours(plyVeh, paintID, vehSecondaryColour)
            SetVehicleExtraColours(plyVeh, originalVehicleMods.extracolors[1], vehWheelColour)
        else
            SetVehicleColours(plyVeh, paintID, vehSecondaryColour)
        end
    elseif paintType == 1 then --Secondary Colour
        SetVehicleColours(plyVeh, vehPrimaryColour, paintID)
    elseif paintType == 2 then --Pearlescent Colour
        SetVehicleExtraColours(plyVeh, paintID, vehWheelColour)
    elseif paintType == 3 then --Wheel Colour
        SetVehicleExtraColours(plyVeh, vehPearlescentColour, paintID)
    elseif paintType == 4 then --Dash Colour
        SetVehicleDashboardColour(plyVeh, paintID)
    elseif paintType == 5 then --Interior Colour
        SetVehicleInteriorColour(plyVeh, paintID)
    end
end

function RestorePreviewWheels(categoryID, wheelID, wheelType)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local customTyreReceipt = GetReceiptType("custom_tyres")

    local doesHaveCustomWheels = 0
    if customTyreReceipt ~= nil then
        doesHaveCustomWheels = customTyreReceipt.modData.enabled
    else
        if GetVehicleClass(plyVeh) == 8 then
            doesHaveCustomWheels = GetVehicleModVariation(plyVeh, 24) and 1 or 0
        else
            doesHaveCustomWheels = GetVehicleModVariation(plyVeh, 23) and 1 or 0
        end
    end

    SetVehicleWheelType(plyVeh, wheelType)
    SetVehicleMod(plyVeh, categoryID, wheelID, doesHaveCustomWheels)

    if GetVehicleClass(plyVeh) == 8 then --Motorcycle
        SetVehicleMod(plyVeh, 24, wheelID, doesHaveCustomWheels)
    end
end

function PreviewMod(categoryID, modID)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    if categoryID == 39 or categoryID == 40 or categoryID == 41 then
        SetVehicleDoorOpen(plyVeh, 4, false, true)
    elseif categoryID == 37 or categoryID == 38 then
        SetVehicleDoorOpen(plyVeh, 5, false, true)
    end

    SetVehicleMod(plyVeh, categoryID, modID)
end

function PreviewWindowTint(windowTintID)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleWindowTint(plyVeh, windowTintID+1)
end

function PreviewColour(paintType, paintCategory, paintID)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local vehPrimaryColour, vehSecondaryColour = GetVehicleColours(plyVeh)
    local vehPearlescentColour, vehWheelColour = GetVehicleExtraColours(plyVeh)

    SetVehicleModKit(plyVeh, 0)

    if paintType == 0 then --Primary Colour
        if paintCategory == 1 then --Metallic Paint
            SetVehicleColours(plyVeh, paintID, vehSecondaryColour)
            SetVehicleExtraColours(plyVeh, vehPearlescentColour, vehWheelColour)
        else
            SetVehicleColours(plyVeh, paintID, vehSecondaryColour)
        end
    elseif paintType == 1 then --Secondary Colour
        SetVehicleColours(plyVeh, vehPrimaryColour, paintID)
    elseif paintType == 2 then --Pearlescent Colour
        SetVehicleExtraColours(plyVeh, paintID, vehWheelColour)
    elseif paintType == 3 then --Wheel Colour
        SetVehicleExtraColours(plyVeh, vehPearlescentColour, paintID)
    elseif paintType == 4 then --Dash Colour
        SetVehicleDashboardColour(plyVeh, paintID)
    elseif paintType == 5 then --Interior Colour
        SetVehicleInteriorColour(plyVeh, paintID)
    end
end

function PreviewWheel(categoryID, wheelID, wheelType)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local doesHaveCustomWheels = 0
    if GetVehicleClass(plyVeh) == 8 then
        doesHaveCustomWheels = GetVehicleModVariation(plyVeh, 24)
    else
        doesHaveCustomWheels = GetVehicleModVariation(plyVeh, 23)
    end

    SetVehicleWheelType(plyVeh, wheelType)
    SetVehicleMod(plyVeh, categoryID, wheelID, doesHaveCustomWheels)

    if GetVehicleClass(plyVeh) == 8 then --Motorcycle
        SetVehicleMod(plyVeh, 24, wheelID, doesHaveCustomWheels)
    end
end

function PreviewNeon(side, enabled)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleNeonLightEnabled(plyVeh, side, enabled)
end

function PreviewNeonColour(r, g, b)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleNeonLightsColour(plyVeh, r, g, b)
end

function PreviewXenonColour(colour)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleLights(plyVeh, 0)
    SetVehicleXenonLightsColor(plyVeh, colour)
end

function PreviewOldLivery(liv)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleLivery(plyVeh, tonumber(liv))
end

function PreviewPlateIndex(index)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleNumberPlateTextIndex(plyVeh, tonumber(index))
end

function ApplyMod(categoryID, modID)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    local price = 0
    if categoryID == 18 then
        price = vehicleCustomisationPrices.turbo.price
    elseif categoryID == 11 or categoryID == 12 or categoryID== 13 or categoryID == 15 or categoryID == 16 then --Performance Upgrades
        price = vehicleCustomisationPrices.performance.prices[modID]
    else
        price = vehicleCustomisationPrices.cosmetics.price
        SetVehicleMod(plyVeh, categoryID, modID)
    end

    local modName = GetLabelText(GetModTextLabel(plyVeh, categoryID, modID))
    if modName == "NULL" then
        if modID+1 == 0 then
            modName = "Stock " .. GetCategoryName(categoryID)
        else
            modName = GetCategoryName(categoryID) .. " " .. modID + 1
        end
    end

    RemoveFromReceipt("mod", categoryID)
    if originalVehicleMods.mods[tonumber(categoryID)] ~= modID then
        AddToReceipt(plyVeh, "mod", price, { category = categoryID, mod = modID, modName = modName })
    end
end

function ApplyExtra(extraID)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local isEnabled = IsVehicleExtraTurnedOn(plyVeh, extraID)
    if isEnabled == 1 then
        SetVehicleExtra(plyVeh, tonumber(extraID), 1)
        SetVehiclePetrolTankHealth(plyVeh,4000.0)
    else
        SetVehicleExtra(plyVeh, tonumber(extraID), 0)
        SetVehiclePetrolTankHealth(plyVeh,4000.0)
    end
end

function ApplyWindowTint(windowTintID)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    windowTintID = windowTintID+1

    SetVehicleWindowTint(plyVeh, windowTintID)

    RemoveFromReceipt("tint")
    if tonumber(originalVehicleMods.tint) ~= tonumber(windowTintID) then
        local price = vehicleCustomisationPrices.windowtint.price
        AddToReceipt(plyVeh, "tint", price, { windowTint = windowTintID, modName = GetWindowTintName(windowTintID-1) })
    end
end

function ApplyColour(paintType, paintCategory, paintID)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local vehPrimaryColour, vehSecondaryColour = GetVehicleColours(plyVeh)
    local vehPearlescentColour, vehWheelColour = GetVehicleExtraColours(plyVeh)

    local typeName = GetColourTypeName(paintType)
    local category, paintName = GetPaintName(paintCategory, paintID)

    RemoveFromReceipt("paint", paintType)
    if paintType == 0 then --Primary Colour
        if paintCategory == 1 then --Metallic Paint
            SetVehicleColours(plyVeh, paintID, vehSecondaryColour)
            SetVehicleExtraColours(plyVeh, originalVehicleMods.extracolors[1], vehWheelColour)
        else
            SetVehicleColours(plyVeh, paintID, vehSecondaryColour)
        end
    elseif paintType == 1 then --Secondary Colour
        SetVehicleColours(plyVeh, vehPrimaryColour, paintID)
    elseif paintType == 2 then --Pearlescent Colour
        SetVehicleExtraColours(plyVeh, paintID, vehWheelColour)
    elseif paintType == 3 then --Wheel Colour
        SetVehicleExtraColours(plyVeh, vehPearlescentColour, paintID)
    elseif paintType == 4 then --Dash Colour
        SetVehicleDashboardColour(plyVeh, paintID)
    elseif paintType == 5 then --Interior Colour
        SetVehicleInteriorColour(plyVeh, paintID)
    end

    local price = vehicleCustomisationPrices.respray.price
    AddToReceipt(plyVeh, "paint", price,{
        paintType = paintType,
        paintCategory = paintCategory,
        paintID = paintID,
        modName = typeName .. " - " .. category .. " - " .. paintName
    })
end

function ApplyWheel(categoryID, wheelID, wheelType)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    local doesHaveCustomWheels = 0
    if GetVehicleClass(plyVeh) == 8 then
        doesHaveCustomWheels = GetVehicleModVariation(plyVeh, 24)
    else
        doesHaveCustomWheels = GetVehicleModVariation(plyVeh, 23)
    end

    SetVehicleWheelType(plyVeh, wheelType)
    SetVehicleMod(plyVeh, categoryID, wheelID, doesHaveCustomWheels)

    if GetVehicleClass(plyVeh) == 8 then --Motorcycle
        SetVehicleMod(plyVeh, 24, wheelID, doesHaveCustomWheels)
    end

    RemoveFromReceipt("wheels")
    local wheelCategory, wheelName = GetWheelName(plyVeh, wheelID, wheelType)
    local price = vehicleCustomisationPrices.wheels.price
    AddToReceipt(plyVeh, "wheels", price,{
        category = categoryID,
        wheel = wheelID,
        wheelType = wheelType,
        modName = "Wheels - " .. wheelCategory .. " - " .. wheelName,
    })
end

function ApplyCustomWheel(state)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleMod(plyVeh, 23, GetVehicleMod(plyVeh, 23), state)
    
    if GetVehicleClass(plyVeh) == 8 then --Motorcycle
        SetVehicleMod(plyVeh, 24, GetVehicleMod(plyVeh, 24), state)
    end

    RemoveFromReceipt("custom_tyres")
    if originalVehicleMods.customTyres ~= state then
        local stateName = state == 1 and "Enabled" or "Disabled"
        local price = vehicleCustomisationPrices.customwheels.price
        AddToReceipt(plyVeh, "custom_tyres", price,{
            category = GetVehicleClass(plyVeh) == 8 and 24 or 23,
            enabled = state,
            modName = "Custom Tyres - " .. stateName
        })
    end
end

function ApplyNeon(side, enabled)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleNeonLightEnabled(plyVeh, side, enabled)

    RemoveFromReceipt("neon", side)
    local price = vehicleCustomisationPrices.neonside.price
    if originalVehicleMods.neon[side] ~= enabled then
        local enabledText = enabled == 1 and "Enabled" or "Disabled"
        AddToReceipt(plyVeh, "neon", price,{ side = side, enable = enabled, modName = GetNeonSide(side) .. " - " .. enabledText })
    end
end

function ApplyNeonColour(r, g, b)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    RemoveFromReceipt("neon_colours")
    SetVehicleNeonLightsColour(plyVeh, r, g, b)

    local price = vehicleCustomisationPrices.neoncolours.price
    if r ~= originalVehicleMods.lights[1] and g ~= originalVehicleMods.lights[2] and b ~= originalVehicleMods.lights[2] then
        AddToReceipt(plyVeh, "neon_colours", price, {
            r = r,
            g = g,
            b = b,
            modName = "Neon Colour - " .. GetNeonColourName(r, g, b)
        })
    end
end

function ApplyXenonLights(category, state)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    RemoveFromReceipt("xenons")
    ToggleVehicleMod(plyVeh, category, state)

    local price = vehicleCustomisationPrices.headlights.price
    if originalVehicleMods.mods[category] ~= state then
        local modState = state == 1 and "Enabled" or "Disabled"
        local modName = "Xenons " .. modState
        AddToReceipt(plyVeh, "xenons", price,{ category = category, state = state, modName = modName  })
    end
end

function ApplyXenonColour(colour)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    RemoveFromReceipt("xenon_colours")
    SetVehicleXenonLightsColor(plyVeh, colour)

    local price = vehicleCustomisationPrices.xenoncolours.price
    if originalVehicleMods.xenonColor ~= colour then
        AddToReceipt(plyVeh, "xenon_colours", price, {
            colour = colour,
            modName = "Xenon Colours - " .. GetXenonColourName(colour)
        })
    end
end

function ApplyOldLivery(liv)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleLivery(plyVeh, liv)

    RemoveFromReceipt("old_livery")

    if originalVehicleMods.oldLiveries ~= liv then
        local price = vehicleCustomisationPrices.oldlivery.price
        AddToReceipt(plyVeh, "old_livery", price,{
            livery = liv,
            modName = "Old Livery " .. liv
        })
    end
end

function ApplyPlateIndex(index)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    SetVehicleNumberPlateTextIndex(plyVeh, index)

    RemoveFromReceipt("plate_index")
    if originalVehicleMods.plateIndex ~= index then
        local price = vehicleCustomisationPrices.plateindex.price
        AddToReceipt(plyVeh, "plate_index", price, {
            index = index,
            modName = "Plate - " .. GetPlateIndexName(index+1)
        })
    end
end

function ApplyTyreSmoke(r, g, b)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    ToggleVehicleMod(plyVeh, 20, true)
    SetVehicleTyreSmokeColor(plyVeh, r, g, b)

    RemoveFromReceipt("tyre_smoke")

    local chosenColour = r + g + b
    local originalColour = originalVehicleMods.smokecolor[1] + originalVehicleMods.smokecolor[2] + originalVehicleMods.smokecolor[3]
    if chosenColour ~= originalColour then
        local price = vehicleCustomisationPrices.wheelsmoke.price
        AddToReceipt(plyVeh, "tyre_smoke", price, {
            r = r,
            g = g,
            b = b,
            modName = "Tyre Smoke - " .. GetTyreSmokeName(r, g, b)
        })
    end
end

function ExitBennys(restarting)
    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)

    RestoreOriginalModification(plyVeh)

    DisplayMenuContainer(false)

    FreezeEntityPosition(plyVeh, false)
    SetEntityCollision(plyVeh, true, true)

    if currentReceiptData.model ~= nil and #currentReceiptData.upgrades > 0 and not restarting then
        print(json.encode(currentReceiptData))
        TriggerServerEvent("arp-bennys:generateReceipt", currentReceiptData)
    end

    SetTimeout(100, function()
        ResetReceiptData()
        DestroyMenus()
        if restarting then
            TriggerEvent("event:control:bennys")
        end
    end)

    isPlyInBennys = false
    currentBennys = false
end

RegisterNetEvent('event:control:bennys')
AddEventHandler('event:control:bennys', function()
    if IsPedInAnyVehicle(PlayerPedId(), false) then
        local closestBennys = getNearestBennys(8.0)
        if closestBennys ~= nil and not isPlyInBennys then -- Bennys
            enterLocation(closestBennys)
        end
    end
end)

function enterLocation(data)
    if isRepairing == true then
        TriggerEvent("DoShortHudText", "Vehicle is repairing")
        return
    end

    local plyPed = PlayerPedId()
    local plyVeh = GetVehiclePedIsIn(plyPed, false)
    local isMotorcycle = false

    local engineBodyHealth = GetVehicleBodyHealth(plyVeh) + GetVehicleEngineHealth(plyVeh)

    if data.mods or engineBodyHealth < 2000.0 then
        SetVehicleModKit(plyVeh, 0)
        SetEntityCoords(plyVeh, data.coords)
        SetEntityHeading(plyVeh, data.heading)
        FreezeEntityPosition(plyVeh, true)
        SetEntityCollision(plyVeh, false, true)
    else
        TriggerEvent("DoShortHudText", "Vehicle isn't damaged enough to repair right now!", 2)
        return
    end

    if GetVehicleClass(plyVeh) == 8 then --Motorcycle
        isMotorcycle = true
    else
        isMotorcycle = false
    end

    getOriginalMods(plyVeh)
    InitiateMenus(isMotorcycle, engineBodyHealth, data)

    SetTimeout(100, function()
        if GetVehicleBodyHealth(plyVeh) < 1000.0 then
            DisplayMenu(true, "repairMenu")
        else
            DisplayMenu(true, "mainMenu")
        end
        
        DisplayMenuContainer(true)
        PlaySoundFrontend(-1, "OK", "HUD_FRONTEND_DEFAULT_SOUNDSET", 1)
    end)

    startDisableControlLoop()

    isPlyInBennys = true
    currentBennys = data
end

local _delDebounce = false
function disableControls()
    while isPlyInBennys do
        DisableControlAction(1, 38, true) --Key: E
        DisableControlAction(1, 172, true) --Key: Up Arrow
        DisableControlAction(1, 173, true) --Key: Down Arrow
        DisableControlAction(1, 177, true) --Key: Backspace
        DisableControlAction(1, 176, true) --Key: Enter
        DisableControlAction(1, 71, true) --Key: W (veh_accelerate)
        DisableControlAction(1, 72, true) --Key: S (veh_brake)
        DisableControlAction(1, 34, true) --Key: A
        DisableControlAction(1, 35, true) --Key: D
        DisableControlAction(1, 75, true) --Key: F (veh_exit)
        DisableControlAction(1, 207, true) --Key: PGDOWN
        DisableControlAction(1, 208, true) --Key: PGUP
        DisableControlAction(1, 214, true) -- Key: DEL


        if IsDisabledControlJustReleased(1, 172) then --Key: Arrow Up
            MenuScrollFunctionality("up")
            PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", 1)
        end

        if IsDisabledControlJustReleased(1, 173) then --Key: Arrow Down
            MenuScrollFunctionality("down")
            PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", 1)
        end

        if IsDisabledControlPressed(1, 207) then -- Key PG down
            ScrollReceiptDown()
        end

        if IsDisabledControlPressed(1, 208) then -- Key PG down
            ScrollReceiptUp()
        end

        if IsDisabledControlJustReleased(1, 214) and not _delDebounce then -- Key: Del
            _delDebounce = true
            Citizen.SetTimeout(2500, function() _delDebounce = false  end)

            ExitBennys(true)
        end

        if IsDisabledControlJustReleased(1, 176) then --Key: Enter
            MenuManager(true)
            PlaySoundFrontend(-1, "OK", "HUD_FRONTEND_DEFAULT_SOUNDSET", 1)
        end

        if IsDisabledControlJustReleased(1, 177) then --Key: Backspace
            MenuManager(false)
            PlaySoundFrontend(-1, "NO", "HUD_FRONTEND_DEFAULT_SOUNDSET", 1)
        end

        Citizen.Wait(0)
    end
end

-- #MarkedForMarker
--#[Citizen Threads]#--
function startDisableControlLoop()
    Citizen.CreateThread(function()
        while isPlyInBennys do
            local playerPed = PlayerPedId()
            if IsPedInAnyVehicle(playerPed) then
                disableControls()
            end

            Citizen.Wait(0)
        end
    end)
end

function hasPasses(passes)
    for _,v in pairs(passes) do
        -- Just return true if 'ALL' is set to true
        if v == "all" then
            return true
        end

        if exports["arp-business"]:hasRoleByName(v) then
            return true
        end
    end
end

function getNearestBennys(range)
    local playerPed = PlayerPedId()
    local playerCoords = GetEntityCoords(playerPed)
    for _, v in pairs(REPAIR_STATIONS) do
        local dist = #(playerCoords - v.coords)
        if dist < range and hasPasses(v.passes) then
            return v
        end
    end

    return nil
end
exports('getNearestBennys', getNearestBennys)

--#[Event Handlers]#--
RegisterNetEvent("arp-bennys:purchaseSuccessful")
AddEventHandler("arp-bennys:purchaseSuccessful", function()
    isPurchaseSuccessful = true
    attemptingPurchase = false
end)

RegisterNetEvent("arp-bennys:purchaseFailed")
AddEventHandler("arp-bennys:purchaseFailed", function()
    isPurchaseSuccessful = false
    attemptingPurchase = false
end)

function GetReceiptType(type)
    for _, v in pairs(currentReceiptData.upgrades) do
        if v.type == type then
            return v
        end
    end

    return nil
end

function GetCategoryName(categoryID)
    for _, v in pairs(vehicleCustomisation) do
        if v.id == categoryID then
            return v.category
        end
    end
end

function GetWindowTintName(windowTintID)
    for _, k in pairs(vehicleWindowTintOptions) do
        if k.id == windowTintID then
            return k.name
        end
    end

    return "Unknown Tint"
end

function GetColourTypeName(paintType)
    for _, v in pairs(vehicleResprayCategories) do
        if v.id == paintType then
            return v.category
        end
    end

    return "Unknown Colour"
end

function GetPaintName(paintCategory, paintID)
    for _, v in pairs(vehicleResprayOptions) do
        if v.id == paintCategory then
            for _, x in pairs(v.colours) do
                if x.id == paintID then
                    return v.category, x.name
                end
            end
        end
    end

    return "Unknown Category", "Unknown Paint"
end

function GetWheelName(plyVeh, wheelId, wheelType)
    for _, v in pairs(vehicleWheelOptions) do
        if v.id == wheelType then
            local wheelName = GetLabelText(GetModTextLabel(plyVeh, 23, wheelId))
            if wheelId == -1 then
                wheelName = "Stock"
            elseif wheelName == "NULL" then
                wheelName = v.category .. " " .. wheelId
            end
            return v.category, wheelName
        end
    end

    return "Unknown Category", "Unknown Tyre Name (" .. wheelId .. ")";
end


function GetNeonSide(side)
    for _, v in pairs(vehicleNeonOptions.neonTypes) do
        if v.id == side then
            return v.name
        end
    end

    return "Unknown"
end

function GetNeonColourName(r, g, b)
    for _, v in pairs(vehicleNeonOptions.neonColours) do
        if v.r == r and v.g == g and v.b == b then
            return v.name or "Unknown Colour"
        end
    end

    return "Unknown Colour"
end

function GetXenonColourName(colour)
    for _, v in pairs(vehicleXenonOptions.xenonColours) do
        if v.id == colour then
            return v.name
        end
    end

    return "Unknown Colour"
end

function GetCategoryName(categoryID)
    for _, v in pairs(vehicleCustomisation) do
        if v.id == categoryID then
            return v.category
        end
    end
end

function GetWindowTintName(windowTintID)
    for _, k in pairs(vehicleWindowTintOptions) do
        if k.id == windowTintID then
            return k.name
        end
    end

    return "Unknown Tint"
end

function GetColourTypeName(paintType)
    for _, v in pairs(vehicleResprayCategories) do
        if v.id == paintType then
            return v.category
        end
    end

    return "Unknown Colour"
end

function GetPaintName(paintCategory, paintID)
    for _, v in pairs(vehicleResprayOptions) do
        if v.id == paintCategory then
            for _, x in pairs(v.colours) do
                if x.id == paintID then
                    return v.category, x.name
                end
            end
        end
    end

    return "Unknown Category", "Unknown Paint"
end

function GetWheelName(plyVeh, wheelId, wheelType)
    for _, v in pairs(vehicleWheelOptions) do
        if v.id == wheelType then
            local wheelName = GetLabelText(GetModTextLabel(plyVeh, 23, wheelId))
            if wheelId == -1 then
                wheelName = "Stock"
            elseif wheelName == "NULL" then
                wheelName = v.category .. " " .. wheelId
            end
            return v.category, wheelName
        end
    end

    return "Unknown Category", "Unknown Tyre Name (" .. wheelId .. ")";
end


function GetNeonSide(side)
    for _, v in pairs(vehicleNeonOptions.neonTypes) do
        if v.id == side then
            return v.name
        end
    end

    return "Unknown"
end

function GetNeonColourName(r, g, b)
    for _, v in pairs(vehicleNeonOptions.neonColours) do
        if v.r == r and v.g == g and v.b == b then
            return v.name or "Unknown Colour"
        end
    end

    return "Unknown Colour"
end

function GetCategoryName(categoryID)
    for _, v in pairs(vehicleCustomisation) do
        if v.id == categoryID then
            return v.category
        end
    end
end

function GetWindowTintName(windowTintID)
    for _, k in pairs(vehicleWindowTintOptions) do
        if k.id == windowTintID then
            return k.name
        end
    end

    return "Unknown Tint"
end

function GetColourTypeName(paintType)
    for _, v in pairs(vehicleResprayCategories) do
        if v.id == paintType then
            return v.category
        end
    end

    return "Unknown Colour"
end

function GetPaintName(paintCategory, paintID)
    for _, v in pairs(vehicleResprayOptions) do
        if v.id == paintCategory then
            for _, x in pairs(v.colours) do
                if x.id == paintID then
                    return v.category, x.name
                end
            end
        end
    end

    return "Unknown Category", "Unknown Paint"
end

function GetWheelName(plyVeh, wheelId, wheelType)
    for _, v in pairs(vehicleWheelOptions) do
        if v.id == wheelType then
            local wheelName = GetLabelText(GetModTextLabel(plyVeh, 23, wheelId))
            if wheelId == -1 then
                wheelName = "Stock"
            elseif wheelName == "NULL" then
                wheelName = v.category .. " " .. wheelId
            end
            return v.category, wheelName
        end
    end

    return "Unknown Category", "Unknown Tyre Name (" .. wheelId .. ")";
end


function GetNeonSide(side)
    for _, v in pairs(vehicleNeonOptions.neonTypes) do
        if v.id == side then
            return v.name
        end
    end

    return "Unknown"
end

function GetNeonColourName(r, g, b)
    for _, v in pairs(vehicleNeonOptions.neonColours) do
        if v.r == r and v.g == g and v.b == b then
            return v.name or "Unknown Colour"
        end
    end

    return "Unknown Colour"
end

function GetTyreSmokeName(r, g, b)
    for _, v in pairs(vehicleTyreSmokeOptions) do
        if v.r == r and v.g == g and v.b == b then
            return v.name
        end
    end

    return "Unknown Colour"
end

function GetPlateIndexName(index)
    return plateTypes[index] or "Unknown"
end

RegisterCommand('enterbennys', function()
    TriggerEvent('event:control:bennys')
end)
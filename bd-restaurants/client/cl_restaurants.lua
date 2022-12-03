SIGNED_IN = false
CURRENT_RESTAURANT = nil
SERVER_CODE = 'wl'

local activePurchases = {}

local debugMode = GetConvar('sv_environment', 'prod') == 'debug'

function isSignedOn()
    return SIGNED_IN or CURRENT_RESTAURANT == 'prison_cooks'
end

function signOff()
    SIGNED_IN = false
    TriggerEvent("DoLongHudText", _L("restaurant-clocked-out", "Clocked out."))
end

AddEventHandler('bd-restaurants:signOnPrompt', function(pParameters, pEntity, pContext)
    local biz = pContext.zones['restaurant_sign_on'].biz
    local type = pContext.zones['restaurant_sign_on'].type
    SIGNED_IN, langString, message = RPC.execute("bd-restaurants:joinJob", biz, type)
    TriggerEvent("DoLongHudText", _L(langString, message))
end)

AddEventHandler('bd-restaurants:signOffPrompt', function(pParameters, pEntity, pContext)
    local biz = pContext.zones['restaurant_sign_on'].biz
    RPC.execute("bd-restaurants:leaveJob", biz)
    signOff()
end)

RegisterNetEvent('bd-restaurants:forceLeaveJob', function()
    signOff()
end)

AddEventHandler('bd-restaurants:viewActiveEmployees', function(pParameters, pEntity, pContext)
    local biz = pContext.zones['restaurant_sign_on'].biz
    local employees = RPC.execute('bd-restaurants:getActiveEmployees', biz)

    local mappedEmployees = {}

    for _, employee in pairs(employees) do
        local fancyLocationName = GetBusinessConfig(biz).name
        table.insert(mappedEmployees, {
            title = string.format("%s (%s)", employee.name, employee.cid),
            description = string.format(_L("restaurant-clocked-in-at", "Clocked in at %s"), fancyLocationName),
        })
    end
    if #mappedEmployees == 0 then
        table.insert(mappedEmployees, {
            title = _L("restaurant-no-active-employees", "Nobody is clocked in currently"),
        })
    end

    exports['bd-ui']:showContextMenu(mappedEmployees)
end)

AddEventHandler('bd-restaurants:makePayment', function(pParameters, pEntity, pContext)
    local id = pContext.zones['restaurant_registers'].id
    local biz = pContext.zones['restaurant_registers'].biz

    local activeRegisterId = id
    local activeRegister = activePurchases[activeRegisterId]
    if not activeRegister or activeRegister == nil then
        TriggerEvent("DoLongHudText", _L("restaurant-no-active-purchase", "No purchase active."))
        return
    end
    local priceWithTax = RPC.execute("PriceWithTaxString", activeRegister.cost, "Goods")
    local acceptContext = {
        {
            title = _L("restaurant-make-payment", "Restaurant Purchase"),
            description = "$" .. priceWithTax.text .. " | " .. activeRegister.comment,
        },
        {
            title = _L("restaurant-accept-purchase", "Purchase with Bank"),
            action = "bd-restaurants:finishPurchasePrompt",
            icon = 'credit-card',
            key = {cost = activeRegister.cost, comment = activeRegister.comment, registerId = id, charger = activeRegister.charger, biz = biz, cash = false},
            disabled = true,
        },
        {
            title = _L("restaurant-cash-purchase", "Purchase with Cash"),
            action = "bd-restaurants:finishPurchasePrompt",
            icon = 'money-bill',
            key = {cost = activeRegister.cost, comment = activeRegister.comment, registerId = id, charger = activeRegister.charger, biz = biz, cash = true},
        }
    }
    exports['bd-ui']:showContextMenu(acceptContext)
end)

RegisterUICallback('bd-restaurants:finishPurchasePrompt', function (data, cb)
    cb({ data = {}, meta = { ok = true, message = '' } })
    local success = RPC.execute("bd-restaurants:completePurchase", data.key)
    if not success then
        TriggerEvent("DoLongHudText", _L("restaurant-could-not-complete-purchase", "The purchase could not be completed."))
    end
end)

AddEventHandler('bd-restaurants:chargeCustomer', function(pParameters, pEntity, pContext)
    local id = pContext.zones['restaurant_registers'].id
    local biz = pContext.zones['restaurant_registers'].biz

    local elements = {
     {
            icon = "dollar-sign",
            label = _L("restaurant-cost", "Cost"),
            name = "cost",
        },
        {
            icon = "pencil-alt",
            label = _L("restaurant-comment", "Comment"),
            name = "comment",
        },
    }

    local prompt = exports['bd-ui']:OpenInputMenu(elements)

    if not prompt then return end

    local cost = tonumber(prompt.cost)
    local comment = prompt.comment
    --check if cost is actually a number
    if cost == nil or not cost then return end
    if comment == nil then comment = "" end

    if cost < 5 then cost = 5 end --Minimum $10

    --Send event to everyone indicating a purchase is ready at specified register
    RPC.execute("bd-restaurants:startPurchase", {cost = cost, comment = comment, registerId = id})
end)

RegisterNetEvent('bd-restaurants:activePurchase', function(data)
    activePurchases[data.registerId] = data
end)

RegisterNetEvent('bd-restaurants:closePurchase', function(data)
    activePurchases[data.registerId] = nil
end)

AddEventHandler('bd-polyzone:enter', function(pZone, pData)
    if pZone == 'restaurant_buff_zone' then
        CURRENT_RESTAURANT = pData.id
        TriggerEvent("bd-buffs:inDoubleBuffZone", true, pData.id)
        checkForHeadset()
    end

    if pZone == 'restaurant_bs_drivethru' then
        enterDriveThru()
    end
end)

AddEventHandler('bd-polyzone:exit', function(pZone, pData)
    if pZone == 'restaurant_buff_zone' then
        if SIGNED_IN then
            SIGNED_IN = false
            RPC.execute("bd-restaurants:leaveJob", CURRENT_RESTAURANT)
            TriggerEvent("DoLongHudText", _L("restaurant-clocked-out-distance", "You went too far away! Clocked out."))
        end
        CURRENT_RESTAURANT = nil
        TriggerEvent("bd-buffs:inDoubleBuffZone", false)
        turnOffHeadset()
    end

    if pZone == 'restaurant_bs_drivethru' then
        exitDriveThru()
    end
end)

AddEventHandler("bd-restaurants:silentAlarm", function()
    local finished = exports["bd-taskbar"]:taskBar(4000, _L("foodchain-pressing-alarm", "Pressing Alarm"))
    if finished ~= 100 then return end
    TriggerServerEvent("bd-restaurants:triggerSilentAlarm", GetEntityCoords(PlayerPedId()))
end)

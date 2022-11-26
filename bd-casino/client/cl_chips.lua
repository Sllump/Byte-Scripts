exports["bd-polytarget"]:AddCircleZone("bd_casino_trade_chips", vector3(989.73, 31.57, 71.54), 0.35, {
    name="bd_casino_trade_chips",
    useZ=true,
})

exports["bd-interact"]:AddPeekEntryByPolyTarget("bd_casino_trade_chips", {
    {
        event = "bd-casino:cashoutBank",
        id = "row_1",
        icon = "landmark",
        label = "Cashout Chips (Bank)",
        parameters = {},
    },
    {
        event = "bd-casino:cashoutCash",
        id = "row_3",
        icon = "wallet",
        label = "Cashout Chips (Cash)",
        parameters = {},
    },
    {
        event = "bd-casino:purchaseChips",
        id = "row_2",
        icon = "circle",
        label = "Purchase Chips",
        parameters = {},
    }
}, {
    distance = { radius = 2.5 },
});


RegisterNetEvent('bd-casino:purchaseChips')
AddEventHandler('bd-casino:purchaseChips', function()
    exports['bd-interface']:openApplication('textbox', {
        callbackUrl = 'bd-casino:pPurchaseMyChips',
        key = 1,
        items = {
        {
            icon = "money-bill",
            label = "How many chips.",
            name = "pChips",
        },
        },
        show = true,
    })
end)

RegisterInterfaceCallback('bd-casino:pPurchaseMyChips', function(data, cb)
    cb({ data = {}, meta = { ok = true, message = '' } })

    if exports['bd-inventory']:hasEnoughOfItem('casinomember', 1) then
        if exports["isPed"]:isPed("mycash") >= tonumber(data.values.pChips) then
            TriggerServerEvent('aspect-casino:takeMoneyChips', data.values.pChips)
            TriggerEvent('bd-casino:giveChipsCL', data.values.pChips)
        end
    else
        TriggerEvent('DoLongHudText', 'You need a Casino Membership to purchase Chips.', 2)
    end
end)

RegisterNetEvent('bd-casino:cashoutCash')
AddEventHandler('bd-casino:cashoutCash', function()
    local pQuantityChipsCash = RPC.execute('bd-casino:getChips')
    TriggerEvent('bd-casino:removeChipsCL', pQuantityChipsCash)
    TriggerServerEvent('aspect-casino:giveCashoutCashChips', pQuantityChipsCash)
end)

RegisterNetEvent('bd-casino:cashoutBank')
AddEventHandler('bd-casino:cashoutBank', function()
    local pQuantityChipBank = RPC.execute('bd-casino:getChips')
    TriggerEvent('bd-casino:removeChipsCL', pQuantityChipBank)
    TriggerServerEvent('aspect-casino:giveCashoutBankChips', pQuantityChipBank)
end)

RegisterNetEvent('bd-casino:addBalance')
AddEventHandler('bd-casino:addBalance', function(pAmount)
    TriggerServerEvent('bd-financials:business_money', pAmount, 'casino', 'add')
end)

RegisterCommand('givechips', function()
    TriggerServerEvent('bd-casino:giveChips', 10)
end)
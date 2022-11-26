RegisterNetEvent('bd-casino:giveChipsCL')
AddEventHandler('bd-casino:giveChipsCL', function(pAmt)
    TriggerServerEvent('bd-casino:giveChips', pAmt)
end)

RegisterNetEvent('bd-casino:removeChipsCL')
AddEventHandler('bd-casino:removeChipsCL', function(removeAmt)
    TriggerServerEvent('bd-casino:removeChips', removeAmt)
end)
RPC.register('bd-sprays:purchaseGangSpray', function(source, sprayModel)
    local user = exports['bd-base']:getModule("Player"):GetUser(source)

    if user:getCash() >= 5000 then
        user:removeMoney(5000)
        local information = {
            ["model"] = sprayModel,
        }

        TriggerClientEvent('player:receiveItem', source, 'spraycan', 1, true, information)
    else
        TriggerClientEvent('DoLongHudText', source, 'Not enough cash.', 2)
    end
end)

RPC.register('bd-sprays:purchaseScrubbingCloth', function()
    local user = exports['bd-base']:getModule("Player"):GetUser(source)

    if user:getCash() >= 50000 then
        user:removeMoney(50000)
        TriggerClientEvent('player:receiveItem', source, 'scrubbingcloth', 1)
    else
        TriggerClientEvent('DoLongHudText', source, 'Not enough cash.', 2)
    end
end)
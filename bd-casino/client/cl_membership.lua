exports["bd-polytarget"]:AddCircleZone("bd_casino_purchase_member", vector3(965.04, 47.26, 71.6), 0.65, {
    name="bd_casino_purchase_member",
    useZ=true,
})

 exports["bd-interact"]:AddPeekEntryByPolyTarget("bd_casino_purchase_member", {
    {
        event = "bd-casino:purchaseMemberCard",
        id = "casino_member",
        icon = "circle",
        label = "Purchase Member Card ($1,500)",
        parameters = {},
    }
}, {
    distance = { radius = 2.5 },
});

RegisterNetEvent('bd-casino:purchaseMemberCard')
AddEventHandler('bd-casino:purchaseMemberCard', function()
    if exports["isPed"]:isPed("mycash") >= 1500 then
        TriggerServerEvent('aspect-casino:takeMoneyCasinoCard', 1500)
        TriggerEvent("player:receiveItem", "casinomember", 1)
    end
end)
local Config = json.decode(LoadResourceFile(GetCurrentResourceName(), "config.json"))

function SendReactMessage(action, data)
    SendNUIMessage({
        action = action,
        data = data
    })
end exports("SendReactMessage", SendReactMessage)

RegisterNetEvent("bd-books:opencontract")
AddEventHandler("bd-books:opencontract", function(data)
    print(data)
    SendReactMessage('bd-books:setcontract', {
        contrato = Config[data]
    })
    SetNuiFocus(true, true)
end)

RegisterNetEvent("bd-books:openBookByMetadata")
AddEventHandler("bd-books:openBookByMetadata", function(metadaFull)
    SendReactMessage('bd-books:setcontract', {
        contrato = metadaFull
    })
    SetNuiFocus(true, true)
end)

RegisterNUICallback("bd-books:closeapp", function(data, cb) 
    SetNuiFocus(false, false)
    cb({})
end)    

RegisterCommand('bookTest', function(src, args) 
    print(args[1])
    TriggerEvent('bd-books:opencontract', args[1])
end, false)
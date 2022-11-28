
function SendReactMessage(action, data)
    SendNUIMessage({
        action = action,
        data = data
    })
end

exports("SendReactMessage", SendReactMessage)
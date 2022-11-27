local calls = {}
local pings = {}
local units = {}
local unitAssignments = {}
local codes = {
    ["10-90F"] = {
        blipDescription = "Robbery in progress",
        title = "Robbery in progress",
        --dispatchMessage = "Robbery in progress"
    }
}
local mapOpenServer = {}

RPC.register("bd-dispatch:getDispatchData", function(pSource)
    return {
        calls = calls,
        pings = pings,
        units = units,
        unitAssignments = unitAssignments
    }
end)

RPC.register("bd-dispatch:createCall", function(pSource, pCtxId)
    local ctxId = tonumber(pCtxId.param or 0)
    if not pings[ctxId] then return end

    local ping = pings[ctxId]

    ping.timestamp = os.time()

    if not calls[ctxId] then
        calls[ctxId] = {}
        calls[ctxId] = ping
    end

    TriggerClientEvent("bd-dispatch:updateDispatch", -1, {
        action = "addCall",
        data = calls[ctxId]
    })
end)

RPC.register("bd-dispatch:dismissPing", function(pSource, pCtxId)
    local ctxId = tonumber(pCtxId.param or 0)
    if not pings[ctxId] then return end

    TriggerClientEvent("bd-dispatch:updateDispatch", pSource, {
        action = "delPing",
        data = pings[ctxId]
    })
end)

RPC.register("bd-dispatch:dismissCall", function(pSource, pCtxId)
    local ctxId = tonumber(pCtxId.param or 0)
    if not calls[ctxId] then return end

    TriggerClientEvent("bd-dispatch:updateDispatch", pSource, {
        action = "delCall",
        data = calls[ctxId]
    })
end)

RPC.register("bd-dispatch:toggleUnitAssignment", function(pSource, pCtxId, pUnit)
    local ctxId = tonumber(pCtxId.param or 0)
    local unit = pUnit.param

    local found = false
    for k, v in pairs(unitAssignments) do
        if tonumber(v.ctxId) == ctxId then
            if v.serverId == unit.serverId then
                found = true
                table.remove(unitAssignments, k)
            end
        end
    end

    if not found then
        unitAssignments[#unitAssignments + 1] = {
            ctxId = ctxId,
            serverId = unit.serverId
        }
    end

    TriggerClientEvent("bd-dispatch:updateDispatch", -1, {
        action = "updateUnitAssignments",
        data = unitAssignments
    })
end)

RPC.register("bd-dispatch:setUnitVehicle", function(pSource, pData)
    local data = pData.param
    local src = tonumber(data.unit)
    units[src].vehicle = data.vehicle
    TriggerClientEvent("bd-dispatch:updateUnits", -1, units)
end)

RPC.register("bd-dispatch:setUnitRidingWith", function(pSource, pData)
    local data = pData.param
    local unit = data.unit
    local parent = data.parent
    local unitServerId = tonumber(unit.serverId)

    if units[unitServerId] then
        if parent then
            if units[tonumber(parent.serverId)] then
                if units[tonumber(parent.serverId)].attachedTo == nil then
                    units[unit.serverId].attachedTo = tonumber(parent.serverId)
                end
            end
        else
            units[unitServerId].attachedTo = nil
        end
    end

    TriggerClientEvent("bd-dispatch:updateUnits", -1, units)
end)

RPC.register("bd-dispatch:getDispatchersOnDuty", function(pSource, pData)
end)

RPC.register("bd-dispatch:getDispatchUnits", function(pSource)
end)

RegisterNetEvent("dispatch:svNotify")
AddEventHandler("dispatch:svNotify", function(data)
    data.ctxId = #pings + 1
    data.timestamp = os.time()
    
    if data.recipientList == nil then
        data.recipientList = {
            ["police"] = true
        }
    end

    if codes[data.dispatchCode] then
        data.blipDescription = codes[data.dispatchCode].blipDescription or nil
        --data.dispatchMessage = codes[data.dispatchCode].dispatchMessage or nil
        data.title = codes[data.dispatchCode].title or nil
    end
    
    pings[#pings + 1] = data

    TriggerClientEvent("dispatch:clNotify", -1, data)
end)

RegisterNetEvent("bd-dispatch:mapIsOpen")
AddEventHandler("bd-dispatch:mapIsOpen", function(mapOpen)
end)

RegisterCommand("addunit", function()
    units[2] = {
        serverId = 2,
        callSign = '102',
        name = 'Bozo Da Clown',
        attachedTo = nil,
        job = 'police',
        vehicle = 'car',
        status = '10-8'
    }

    TriggerClientEvent("bd-dispatch:updateUnits", -1, units)
end)

RegisterNetEvent("bd-dispatch:addUnit")
AddEventHandler("bd-dispatch:addUnit", function(src, cid, name, callsign, job)
    if units[src] == nil then
        units[src] = {
            serverId = src,
            callSign = callsign,
            name = name,
            attachedTo = nil,
            job = job,
            vehicle = 'car',
            status = '10-8'
        }
    end

    TriggerClientEvent("bd-dispatch:updateUnits", -1, units)
end)

RegisterNetEvent("bd-dispatch:removeUnit")
AddEventHandler("bd-dispatch:removeUnit", function(src)
    units[src] = nil
    TriggerClientEvent("bd-dispatch:updateUnits", -1, units)
end)

RegisterNetEvent("phone:assistRemove")
AddEventHandler("phone:assistRemove", function(id, jobType)
end)

RegisterNetEvent("phone:assistRemove")
AddEventHandler("phone:checkJob", function()
end)


AddEventHandler('playerDropped', function()
    -- TODO: Handle calls and pings
    local src = source
    if units[src] ~= nil then
        units[src] = nil
        TriggerClientEvent("bd-dispatch:updateUnits", -1, units)
    end
end)

Citizen.CreateThread(function()
    while true do
        Wait(2500)

        local unitLocations = {} -- TODO: Make this a global variable

        for k,v in pairs(units) do
            local coords = exports["arp-infinity"]:GetPlayerCoords(tonumber(v.serverId))

            unitLocations[#unitLocations + 1] = {
                serverId = v.serverId,
                coords = coords
            }
        end

        TriggerClientEvent("bd-dispatch:updateUnitCoords", -1, unitLocations)
    end
end)
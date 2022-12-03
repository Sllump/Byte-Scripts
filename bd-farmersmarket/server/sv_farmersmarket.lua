local boothSettings = {}
local registeredBanners = {}

RPC.register("bd-farmersmarket:claimBooth", function(pSource, pBoothId, pCharacterId, pPassword)
    print("asdadsad")
    if (boothSettings[pBoothId]) then
        print("mal")
        TriggerClientEvent("DoLongHudText", pSource, "Booth already claimed", 2)
        return
    end
    boothSettings[pBoothId] = {
        characterId = pCharacterId,
        owner = pSource,
        password = pPassword,
        tenants = {pCharacterId}
    }
    TriggerClientEvent("DoLongHudText", pSource, "Booth claimed!")
    TriggerClientEvent("bd-farmersmarket:updateBoothSettings", -1, boothSettings)
end)

RPC.register("bd-farmersmarket:leaveBooth", function(pSource, pBoothId, pCid)
    -- first of all see if the booth claimed
    if not boothSettings[pBoothId] then
        TriggerClientEvent("DoLongHudText", pSource, "Booth not claimed", 2)
        return
    end

    -- check if the player is the owner
    if boothSettings[pBoothId].owner == pSource then
        boothSettings[pBoothId] = nil
        TriggerClientEvent("bd-farmersmarket:updateBoothSettings", -1, boothSettings)
        TriggerClientEvent("DoLongHudText", pSource, "Booth has been unclaimed. Cya!", 2)
        return
    end

    -- check if the player is a tenants
    for k, v in pairs(boothSettings[pBoothId].tenants) do
        if v == pCid then
            table.remove(boothSettings[pBoothId].tenants, k)
            TriggerClientEvent("bd-farmersmarket:updateBoothSettings", -1, boothSettings)
            TriggerClientEvent("DoLongHudText", pSource, "Booth left! Cya.")
            return
        end

        TriggerClientEvent("DoLongHudText", pSource, "You are not a tenant of this booth.", 2)
        return
    end
end)

RPC.register("bd-farmersmarket:joinBooth", function(pSource, pBoothId, pCharacterId, pPassword)
    if not boothSettings[pBoothId] then
        TriggerClientEvent("DoLongHudText", pSource, "Booth not claimed", 2)
        return
    end
    if boothSettings[pBoothId].password ~= pPassword then
        TriggerClientEvent("DoLongHudText", pSource, "Invalid password", 2)
        return
    end
    boothSettings[pBoothId].tenants[#boothSettings[pBoothId].tenants + 1] = pCharacterId
    TriggerClientEvent("DoLongHudText", pSource, "Booth joined!")
    TriggerClientEvent("bd-farmersmarket:updateBoothSettings", -1, boothSettings)
end)

RPC.register("bd-farmersmarket:isAtBooth", function(pSource, pBoothId, pCharacterId)
    if not boothSettings[pBoothId] then
        TriggerClientEvent("DoLongHudText", pSource, "Booth not claimed", 2)
        return
    end
    local isAtBooth = false
    for _, cid in pairs(boothSettings[pBoothId]) do
        if cid == pCharacterId then
            isAtBooth = true
        end
    end
    return isAtBooth
end)

RPC.register("bd-farmersmarket:getBoothCids", function(pSource, pBoothId)
    local src = pSource
    local cids = {}
    local contextTitle = ""
    if not boothSettings[pBoothId] then
        TriggerClientEvent("DoLongHudText", pSource, "Booth not claimed", 2)
        return
    end

    for _, cid in pairs(boothSettings[pBoothId].tenants) do
        if (boothSettings[pBoothId].characterId == cid) then
            contextTitle = "Owner: %s"
        else
            contextTitle = "Tenant: %s"
        end

        cids[#cids + 1] = {
            title = contextTitle:format(cid),
            description = "",
            action = "",
            key = ""
        }
    end

    -- open a context menu with cids shown
    TriggerClientEvent("bd-ui:open-application", src, "contextmenu", {
        position = "right",
        options = cids
    }, true)
end)

RPC.register("bd-farmersmarket:getBoothSettings", function(pSource, pArea)
    local booths = {}
    if (pArea == "paleto") then
        -- return the first 15 booth
        for i = 1, 15 do
            booths[i] = boothSettings[i]
        end
    elseif (pArea == "deanworld") then
        -- return the last 15 booth
        for i = 16, 30 do
            booths[i] = boothSettings[i]
        end
    end

    return booths
end)

RPC.register("bd-farmersmarket:changeBoothImage", function(pSource, pBoothId, pCid, pId)
    local bannerId = tonumber(pId)
    print(("changeBoothImage | Booth Id: %s %s | CID: %s %s | Banner ID: %s %s"):format(pBoothId, type(pBoothId), pCid,
        type(pCid), pId, type(pId)))
    if (boothSettings[pBoothId] == nil) then
        TriggerClientEvent("DoLongHudText", pSource, "Booth not claimed", 2)
        return
    end

    if (boothSettings[pBoothId].characterId ~= pCid) then
        TriggerClientEvent("DoLongHudText", pSource, "You do not own this booth", 2)
        return
    end

    if (registeredBanners[bannerId] == nil) then
        TriggerClientEvent("DoLongHudText", pSource, "Banner is not registered", 2)
        return
    end

    -- see if banner register cid is the same as the cid
    if (registeredBanners[bannerId].cid ~= pCid) then
        TriggerClientEvent("DoLongHudText", pSource, "You do not own this banner", 2)
        return
    end

    -- change the banner
    boothSettings[pBoothId].image = tostring(registeredBanners[bannerId].image)
    Wait(1000)
    TriggerClientEvent("bd-farmersmarket:updateBoothSettings", -1, boothSettings)
    TriggerClientEvent("DoLongHudText", pSource, "Banner has been changed!")
end)

RPC.register("bd-farmersmarket:getCraftItem", function(pSource, pId)
    print("getCraftItem", pId)
end)

RPC.register("bd-farmersmarket:registerItem", function(pSource, pValues, pCid)
    print("registerItem", pValues, pCid)
end)

RPC.register("bd-farmersmarket:registerBanner", function(pSource, pValues, pCid)
    local src = source
    -- see if the banner is already registered
    for _, v in pairs(registeredBanners) do
        if (v.image == pValues.image) then
            TriggerClientEvent("DoLongHudText", pSource, "This banner is already registered", 2)
            return
        end
    end

    for _, v in pairs(boothSettings) do
        if (v.characterId == pCid) then
            -- register the banner
            bannerId = #registeredBanners + 1
            registeredBanners[bannerId] = {
                image = pValues.image,
                cid = pCid
            }
            print(("[FARMERSMARKET] Banner registered | Banner ID: %s | CID: %s | Total Banners: %s"):format(bannerId, pCid, #registeredBanners))
            exports["bd-log"]:AddLog("Farmers Market", src, ("Banner ID: %s | Image: %s | Total Banners: %s"):format(bannerId, pValues.image, #registeredBanners))
            TriggerClientEvent("DoLongHudText", pSource, "Your banner has been registered with id: " .. bannerId)
            return
        end

        TriggerClientEvent("DoLongHudText", pSource, "You do not own a booth", 2)
        return
    end

    return false, "Error"
end)

RPC.register("bd-farmersmarket:getFarmersItems", function(pSource, pSearch)
    print("getFarmersItems", pSearch)
end)

RPC.register("bd-farmersmarket:farmersItemAction", function(pSource, pData)
    print("farmersItemAction", json.encode(pData))
end)

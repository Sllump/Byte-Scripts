local inPaletoMarket = false
local inDeanworldMarket = false

local duiReplaces = {}
local globalSettings = {}
local serverCode = "wl"
Citizen.CreateThread(function()
  serverCode = exports["bd-config"]:GetServerCode()
  local lc = 0
  while lc < 15 do
    lc = lc + 1
    local strNum = (lc < 10 and "0" or "") .. tostring(lc)
    duiReplaces[#duiReplaces + 1] = {
      id = lc,
      tex = "dw_prop_tent_scr_" .. strNum,
      txd = "dw_props",
      dui = nil
    }
  end
end)

local farmersMarketDynamicDisplayEnabled = true
AddEventHandler("bd-preferences:setPreferences", function(data)
  farmersMarketDynamicDisplayEnabled = not data["farmersmarket.disableBanners"]
end)

function isDayTime(hideHudText)
  local hour = GetClockHours()
  local isEnabled = false
  if inPaletoMarket then
    isEnabled = (hour >= 7 and hour <= 18)
  end
  if inDeanworldMarket then
    isEnabled = (hour >= 19 or hour <= 6)
  end

  local isConfigEnabled = exports['bd-config']:GetMiscConfig('farmers.market.enabled')
  if isConfigEnabled == nil then
    isConfigEnabled = true
  end

  if not isConfigEnabled and not hideHudText then
    TriggerEvent("DoLongHudText", _L("fm-hud-closed-indef", "Market is indefinitely closed!"), 2)
    return false
  end

  if not isEnabled and not hideHudText then
    TriggerEvent("DoLongHudText", _L("fm-hud-closed", "Market is closed!"), 2)
  end
  return isEnabled
end

function isDeanworldOpen()
  local hour = GetClockHours()
  return hour > 19 or hour < 6
end

function getBoothId(pData)
  if pData.zones["bd-farmersmarket:pick_up_spot"] then
    return pData.zones["bd-farmersmarket:pick_up_spot"].id
  end
  return pData.zones["bd-farmersmarket:sign_in_board"].id
end

function getCid()
  return exports["isPed"]:isPed("cid")
end

function getPassword(pBoothId, pAction)
  exports['bd-ui']:openApplication('textbox', {
    callbackUrl = 'bd-ui:farmersmarket:getPassword',
    key = { boothId = pBoothId, action = pAction },
    items = {
      {
        icon = "user-plus",
        label = _L("fm-ui-password", "Password"),
        name = "password",
      },
    },
    show = true,
  })
end

local function processSettings(settings, forPaleto)
  print(json.encode(settings))
  globalSettings = settings
  local isConfigEnabled = exports['bd-config']:GetMiscConfig('farmers.market.enabled')
  if not farmersMarketDynamicDisplayEnabled or not isConfigEnabled then return end
  for _, conf in pairs(duiReplaces) do
    local confId = isDeanworldOpen() and conf.id + 15 or conf.id --offset for deanworld
    local url = (isDayTime(true) and settings[confId]) and settings[confId].image or "https://i.imgur.com/ie675vt.png"
    if conf.dui == nil then
      conf.dui = exports["bd-lib"]:getDui(url, 1024, 1024)
      AddReplaceTexture(conf.txd, conf.tex, conf.dui.dictionary, conf.dui.texture)
    else
      exports["bd-lib"]:changeDuiUrl(conf.dui.id, url)
    end
  end
end

function ensureAtBooth(booth, cid)
  local isAtBooth = RPC.execute("bd-farmersmarket:isAtBooth", booth, cid)
  if not isAtBooth then
    TriggerEvent("DoLongHudText", _L("fm-hud-unrecognized", "You aren't recognized here."), 2)
    return false
  end
  return true
end

RegisterUICallback("bd-ui:farmersmarket:getPassword", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  exports['bd-ui']:closeApplication('textbox')
  local booth = data.key.boothId
  local cid = getCid()
  RPC.execute(data.key.action, booth, cid, data.values.password)
end)

RegisterUICallback("bd-ui:farmersmarket:changeImage", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  exports['bd-ui']:closeApplication('textbox')
  local booth = data.key.boothId
  local cid = getCid()
  RPC.execute("bd-farmersmarket:changeBoothImage", booth, cid, data.values.id)
end)

AddEventHandler("bd-farmersmarket:claimBooth", function(p1, p2, pData)
  if not isDayTime() then return end
  local booth = getBoothId(pData)
  getPassword(booth, 'bd-farmersmarket:claimBooth')
end)
AddEventHandler("bd-farmersmarket:leaveBooth", function(p1, p2, pData)
  if not isDayTime() then return end
  local booth = getBoothId(pData)
  local cid = getCid()
  if not ensureAtBooth(booth, cid) then
    return
  end
  RPC.execute('bd-farmersmarket:leaveBooth', booth, cid)
end)
AddEventHandler("bd-farmersmarket:joinBooth", function(p1, p2, pData)
  if not isDayTime() then return end
  local booth = getBoothId(pData)
  getPassword(booth, 'bd-farmersmarket:joinBooth')
end)
AddEventHandler("bd-farmersmarket:inventory", function(p1, p2, pData)
  if not isDayTime() then return end
  local booth = getBoothId(pData)
  local cid = getCid()
  if not ensureAtBooth(booth, cid) then
    return
  end
  TriggerEvent("server-inventory-open", "1", "farmersmarket_inventory_" .. tostring(booth) .. "-" .. serverCode, 1000)
end)
AddEventHandler("bd-farmersmarket:pickup", function(p1, p2, pData)
  if not isDayTime() then return end
  local booth = getBoothId(pData)
  TriggerEvent("server-inventory-open", "1", "farmersmarket_pickup_" .. tostring(booth) .. "-" .. serverCode, 1000)
end)
AddEventHandler("bd-farmersmarket:changeBoothImage", function(p1, p2, pData)
  if not isDayTime() then return end
  local booth = getBoothId(pData)
  local cid = getCid()
  if not ensureAtBooth(booth, cid) then
    return
  end
  exports['bd-ui']:openApplication('textbox', {
    callbackUrl = 'bd-ui:farmersmarket:changeImage',
    key = { boothId = booth },
    items = {
      {
        icon = "fingerprint",
        label = _L("fm-ui-bannerid", "Banner ID"),
        name = "id",
      },
    },
    show = true,
  })
end)
AddEventHandler("bd-farmersmarket:getBoothCids", function(p1, p2, pData)
  local booth = getBoothId(pData)
  RPC.execute('bd-farmersmarket:getBoothCids', booth)
end)

RegisterUICallback("bd-ui:farmersmarket:generateVendorLicense", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  exports['bd-ui']:closeApplication('textbox')
  TriggerEvent("player:receiveItem", "vendorlicense", 1, false, {
    state_id = data.values.state_id,
    expires = data.values.expiry,
  })
end)

AddEventHandler("bd-farmersmarket:generateVendorLicense", function()
  exports['bd-ui']:openApplication('textbox', {
    callbackUrl = 'bd-ui:farmersmarket:generateVendorLicense',
    key = 1,
    items = {
      {
        icon = "id-card-alt",
        label = _L("fm-ui-stateid", "State ID"),
        name = "state_id",
      },
      {
        icon = "calendar",
        label = _L("fm-ui-expiry", "Expiry Date"),
        name = "expiry",
      },
    },
    show = true,
  })
end)

local ingredientsMap = {
  ["food"] = {
    ingredient = "foodingredient",
    craft = "customfooditem",
  },
  ["water"] = {
    ingredient = "water",
    craft = "customwateritem",
  },
  ["coffee"] = {
    ingredient = "coffeebeans",
    craft = "customcoffeeitem",
  },
  ["joint"] = {
    ingredient = "joint2",
    craft = "customjointitem",
  },
  ["ciggy"] = {
    ingredient = "tobacco",
    craft = "customciggyitem",
  },
  ["bandage"] = {
    ingredient = "gause",
    craft = "custombandageitem",
  },
  ["other"] = {
    ingredient = "merchingredient",
    craft = "custommerchitem",
  },
}

RegisterUICallback("bd-ui:farmersmarket:craftItems", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  exports['bd-ui']:closeApplication('textbox')
  local result = RPC.execute("bd-farmersmarket:getCraftItem", data.values.id)
  if not result then
    TriggerEvent("DoLongHudText", _L("fm-hud-id-notapproved", "ID not recognized / approved"), 2)
    return
  end
  local ingredient = ingredientsMap[result.item_type].ingredient
  local qty = tonumber(data.values.quantity)
  if not exports["bd-inventory"]:hasEnoughOfItem(ingredient, qty) then
    TriggerEvent("DoLongHudText", _L("fm-hud-noingredient", "Not enough ingredients") .. " (" .. ingredient .. ")", 2, 12000, { i18n = { "Not enough ingredients" }})
    return
  end

  if ingredient == 'joint2' then
    local joints = exports['bd-inventory']:getItemsOfType('joint2', qty, true)
    local itemInfo = json.decode(joints[1].information)
    if itemInfo.strain then
      result.description = result.description .. '<br>Strain: ' .. itemInfo.strain
    end
  end

  TriggerEvent("inventory:removeItem", ingredient, qty)
  TriggerEvent("player:receiveItem", ingredientsMap[result.item_type].craft, qty, false, {
    _hideKeys = { "_image_url", "_name", "_description", "_remove_id" },
    _image_url = result.image,
    _name = result.name,
    _description = result.description,
    _remove_id = math.random(10000000, 999999999),
  })
end)

AddEventHandler("bd-farmersmarket:craftItem", function()
  exports['bd-ui']:openApplication('textbox', {
    callbackUrl = 'bd-ui:farmersmarket:craftItems',
    key = 1,
    items = {
      {
        icon = "fingerprint",
        label = _L("fm-ui-id", "ID"),
        name = "id",
      },
      {
        icon = "sort-numeric-up-alt",
        label = _L("fm-ui-quantity", "Quantity"),
        name = "quantity",
      },
    },
    show = true,
  })
end)

RegisterNetEvent("bd-farmersmarket:updateBoothSettings")
AddEventHandler("bd-farmersmarket:updateBoothSettings", function(pBoothSettings)
  if inPaletoMarket or inDeanworldMarket then
    processSettings(pBoothSettings)
  end
end)

RegisterUICallback("bd-ui:farmersmarket:registerItem", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  exports['bd-ui']:closeApplication('textbox')
  RPC.execute("bd-farmersmarket:registerItem", data.values, getCid())
end)

AddEventHandler("bd-farmersmarket:registerItem", function()
  exports['bd-ui']:openApplication('textbox', {
    callbackUrl = 'bd-ui:farmersmarket:registerItem',
    key = 1,
    items = {
      {
        _type = "select",
        options = {
          {
            id = "food",
            name = "Food",
          },
          {
            id = "water",
            name = "Drink",
          },
          {
            id = "coffee",
            name = "Coffee",
          },
          {
            id = "joint",
            name = "Joint",
          },
          {
            id = "ciggy",
            name = "Ciggies",
          },
          {
            id = "bandage",
            name = "First Aid Kits",
          },
          {
            id = "other",
            name = "Other (Apparel, etc)",
          },
        },
        label = "Type",
        name = "item_type",
      },
      {
        icon = "id-card-alt",
        label = _L("fm-ui-name", "Name"),
        name = "name",
      },
      {
        icon = "pencil-alt",
        label = _L("fm-ui-description", "Description"),
        name = "description",
      },
      {
        icon = "image",
        label = _L("fm-ui-image", "Image") .. " (i.imgur.com/example.png; 100x100px)",
        name = "image",
      },
    },
    show = true,
  })
end)

RegisterUICallback("bd-ui:farmersmarket:registerBanner", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  exports['bd-ui']:closeApplication('textbox')
  RPC.execute("bd-farmersmarket:registerBanner", data.values, getCid())
end)

AddEventHandler("bd-farmersmarket:registerBanner", function()
  exports['bd-ui']:openApplication('textbox', {
    callbackUrl = 'bd-ui:farmersmarket:registerBanner',
    key = 1,
    items = {
      {
        icon = "image",
        label = _L("fm-ui-image", "Image") .. " (i.imgur.com/example.png; 1024x1024px)",
        name = "image",
      },
    },
    show = true,
  })
end)

RegisterUICallback("bd-ui:getFarmersItems", function(data, cb)
  local result = RPC.execute("bd-farmersmarket:getFarmersItems", data.search)
  cb({ data = result, meta = { ok = true, message = '' } })
end)
RegisterUICallback("bd-ui:farmersItemAction", function(data, cb)
  cb({ data = {}, meta = { ok = true, message = '' } })
  RPC.execute("bd-farmersmarket:farmersItemAction", data)
end)

--

AddEventHandler("bd-polyzone:enter", function(zone, data)
  if zone ~= "farmers_market" then return end
  if data.id == "paleto" then
    inPaletoMarket = true
    local settings = RPC.execute("bd-farmersmarket:getBoothSettings", "paleto")
    processSettings(settings, true)
    return
  end
  if data.id == "deanworld" then
    inDeanworldMarket = true
    local settings = RPC.execute("bd-farmersmarket:getBoothSettings", "deanworld")
    processSettings(settings, false)
    return
  end
end)

AddEventHandler("bd-polyzone:exit", function(zone, data)
  if zone ~= "farmers_market" then return end
  local isConfigEnabled = exports['bd-config']:GetMiscConfig('farmers.market.enabled')
  if inPaletoMarket then
    inPaletoMarket = false
    if not farmersMarketDynamicDisplayEnabled or not isConfigEnabled then return end
    for _, conf in pairs(duiReplaces) do
      RemoveReplaceTexture(conf.txd, conf.tex)
      exports["bd-lib"]:releaseDui(conf.dui.id)
      conf.dui = nil
    end
    return
  end
  if inDeanworldMarket then
    inDeanworldMarket = false
    if not farmersMarketDynamicDisplayEnabled or not isConfigEnabled then return end
    for _, conf in pairs(duiReplaces) do
      RemoveReplaceTexture(conf.txd, conf.tex)
      exports["bd-lib"]:releaseDui(conf.dui.id)
      conf.dui = nil
    end
    return
  end
end)

RegisterNetEvent("bd-farmersmarket:receiveWorkReceipt")
AddEventHandler("bd-farmersmarket:receiveWorkReceipt", function()
  if inDeanworldMarket or inPaletoMarket then
    TriggerEvent("player:receiveItem", "farmersmarketreceipt", 1)
    local shouldIncreaseJobPayout = exports["bd-buffs"]:shouldIncreaseJobPayout()
    if shouldIncreaseJobPayout then
      Wait(500)
      TriggerEvent("player:receiveItem", "farmersmarketreceipt", 1)
    end
  end
end)

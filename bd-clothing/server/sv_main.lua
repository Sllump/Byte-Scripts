local function checkExistenceClothes(cid, cb) exports.oxmysql:fetch('SELECT 1 FROM character_current WHERE cid = :cid LIMIT 1', { cid = cid }, function(result) if result and result[1] then cb(true) else cb(false) end end) end
local function checkExistenceFace(cid, cb) exports.oxmysql:fetch('SELECT 1 FROM character_face WHERE cid = :cid LIMIT 1', { cid = cid }, function(result) if result and result[1] then cb(true) else cb(false) end end) end

RegisterNetEvent("bd-clothing:insert_character_current")
AddEventHandler("bd-clothing:insert_character_current",function(data)
	if not data then return end
	local src = source
	local user = exports['bd-base']:getModule("Player"):GetUser(source)
    local char = user:getCurrentCharacter()
    local cid = char.id
	if not cid then return end
	checkExistenceClothes(cid, function(exists)
			if not exists then
					exports.oxmysql:executeSync("INSERT INTO character_current (cid, model, drawables, props, drawtextures, proptextures) VALUES (:cid, :model, :drawables, :props, :drawtextures, :proptextures)", {
						cid = cid,
						model = json.encode(data.model),
						drawables = json.encode(data.drawables),
						props = json.encode(data.props),
						drawtextures = json.encode(data.drawtextures),
						proptextures = json.encode(data.proptextures),
					})
					return
			end
			exports.oxmysql:executeSync("UPDATE character_current SET model = :model, drawables = :drawables, props = :props, drawtextures = :drawtextures, proptextures = :proptextures WHERE cid = :cid", {
				cid = cid,
				model = json.encode(data.model),
				drawables = json.encode(data.drawables),
				props = json.encode(data.props),
				drawtextures = json.encode(data.drawtextures),
				proptextures = json.encode(data.proptextures),
			})
	end)
end)

RegisterNetEvent("bd-clothing:insert_character_face")
AddEventHandler("bd-clothing:insert_character_face",function(data)
	if not data then return end
	local src = source
	    local user = exports['bd-base']:getModule("Player"):GetUser(source)
    local char = user:getCurrentCharacter()
    local cid = char.id

	if not cid then return end

	checkExistenceFace(cid, function(exists)
			if data.headBlend == "null" or data.headBlend == nil then
					data.headBlend = '[]'
			else
					data.headBlend = json.encode(data.headBlend)
			end
			if not exists then
					exports.oxmysql:executeSync("INSERT INTO character_face (cid, hairColor, headBlend, headOverlay, headStructure) VALUES (:cid, :hairColor, :headBlend, :headOverlay, :headStructure)", {
						cid = cid,
						hairColor = json.encode(data.hairColor),
						headBlend = data.headBlend,
						headOverlay = json.encode(data.headOverlay),
						headStructure = json.encode(data.headStructure),
				})
					return
			end

			exports.oxmysql:executeSync("UPDATE character_face SET hairColor = :hairColor,headBlend = :headBlend, headOverlay = :headOverlay,headStructure = :headStructure WHERE cid = :cid", {
				cid = cid,
				hairColor = json.encode(data.hairColor),
				headBlend = data.headBlend,
				headOverlay = json.encode(data.headOverlay),
				headStructure = json.encode(data.headStructure),
		})
	end)
end)

RegisterNetEvent("bd-clothing:fromclient:get_character_face")
AddEventHandler("bd-clothing:fromclient:get_character_face",function(model)
	local source = source
	local user = exports['bd-base']:getModule("Player"):GetUser(source)
    local char = user:getCurrentCharacter()
    local cid = char.id
	exports.oxmysql:fetch("SELECT hairColor, headBlend, headOverlay, headStructure FROM character_face WHERE cid = :cid LIMIT 1", { cid = cid}, function(data)
			if data[1] ~= nil then
					local temp_data = { hairColor = json.decode(data[1].hairColor), headBlend = json.decode(data[1].headBlend), headOverlay = json.decode(data[1].headOverlay), headStructure = json.decode(data[1].headStructure), }
					if model == 1885233650 or model == -1667301416 then TriggerClientEvent("bd-clothing:setpedfeatures", source, temp_data) end
			else
					TriggerClientEvent("bd-clothing:setpedfeatures", source, false)
			end
	end)
end)

RegisterNetEvent("bd-clothing:get_character_face")
AddEventHandler("bd-clothing:get_character_face",function(pSrc, cid)
	local user = exports['bd-base']:getModule("Player"):GetUser(source)
    local char = user:getCurrentCharacter()
	local src = (not pSrc and source or pSrc)
	if cid == nil then cid = char.id end
	exports.oxmysql:fetch("SELECT hairColor, headBlend, headOverlay, headStructure FROM character_face WHERE cid = :cid LIMIT 1", { cid = cid}, function(data)
			if data[1] ~= nil then
					local temp_data = {
							hairColor = json.decode(data[1].hairColor),
							headBlend = json.decode(data[1].headBlend),
							headOverlay = json.decode(data[1].headOverlay),
							headStructure = json.decode(data[1].headStructure),
					}

					exports.oxmysql:fetch("SELECT model FROM character_current WHERE cid = :cid LIMIT 1", { cid = cid}, function(data)
							local model = tonumber(data[1].model)
							if model == 1885233650 or model == -1667301416 then
									TriggerClientEvent("bd-clothing:setpedfeatures", src, temp_data)
							end
					end)
			else
					TriggerClientEvent("bd-clothing:setpedfeatures", src, false)
			end
	end)
end)

RegisterNetEvent("bd-clothing:get_character_current")
AddEventHandler("bd-clothing:get_character_current",function(pSrc, cid, firstSpawn, kvpArmour, kvpStress, kvpThirst, kvpHunger)
	local src = (not pSrc and source or pSrc)

	local user = exports['bd-base']:getModule("Player"):GetUser(source)
    local char = user:getCurrentCharacter()

	if cid == nil then cid = char.id end
	exports.oxmysql:fetch("SELECT model, drawables, props, drawtextures, proptextures FROM character_current WHERE cid = :cid LIMIT 1", { cid = cid}, function(skin)
			if (skin ~= nil and skin[1] ~= nil) then
					local temp_data = {
							model = skin[1].model,
							drawables = json.decode(skin[1].drawables),
							props = json.decode(skin[1].props),
							drawtextures = json.decode(skin[1].drawtextures),
							proptextures = json.decode(skin[1].proptextures),
					}
					TriggerClientEvent("bd-clothing:setclothes", src, temp_data, 0, firstSpawn, kvpArmour, kvpStress, kvpThirst, kvpHunger)
			else
					TriggerClientEvent('bd-clothing:setclothes',src,{},nil, firstSpawn, kvpArmour, kvpStress, kvpThirst, kvpHunger)
			end
	end)
end)

RegisterNetEvent("bd-clothing:retrieve_tats")
AddEventHandler("bd-clothing:retrieve_tats",function(pSrc, cid)
	local src = (not pSrc and source or pSrc)
	local user = exports['bd-base']:getModule("Player"):GetUser(source)
    local char = user:getCurrentCharacter()

	if cid == nil then cid = char.id end
	exports.oxmysql:fetch("SELECT tattoos FROM playersTattoos WHERE identifier = :cid LIMIT 1", { cid = cid}, function(result)
		if #result == 0 then
			local tattooValue = "{}"
			exports.oxmysql:executeSync("INSERT INTO playersTattoos (identifier, tattoos) VALUES (:cid, :tattoo)", { cid = cid, tattoo = tattooValue})
			TriggerClientEvent("bd-clothing:settattoos", src, {})
		elseif result[1]['tattoos'] ~= "null" then
			TriggerClientEvent("bd-clothing:settattoos", src, json.decode(result[1].tattoos))
		else
			TriggerClientEvent("bd-clothing:settattoos", src, {})
		end
	end)
end)

RegisterNetEvent("bd-clothing:set_tats")
AddEventHandler("bd-clothing:set_tats", function(tattoosList)
	local src = source
	    local user = exports['bd-base']:getModule("Player"):GetUser(source)
    local char = user:getCurrentCharacter()
    local cid = char.id
	if not cid then return end
	exports.oxmysql:executeSync("UPDATE playersTattoos SET tattoos = :tattoos WHERE identifier = :cid", { tattoos = json.encode(tattoosList), cid = cid})
end)

RegisterNetEvent("clothing:checkIfNew")
AddEventHandler("clothing:checkIfNew", function(kvpArmour, kvpStress, kvpThirst, kvpHunger)
	local src = source
	local user = exports['bd-base']:getModule("Player"):GetUser(src)
    local char = user:getCurrentCharacter()

	TriggerEvent('bd-clothing:getplayerfromid', src, function(player)
		if player then
			local cid = char.id
			checkExistenceClothes(cid, function(exists)
				if exists then
					TriggerEvent("bd-clothing:get_character_current", src, player.cid, true, kvpArmour, kvpStress, kvpThirst, kvpHunger)
				else
					TriggerClientEvent('bd-clothing:setclothes',src,{},nil,true)
				end
			end)
		end
	end)
end)

RegisterNetEvent('bd-clothing:chargePlayer')
AddEventHandler('bd-clothing:chargePlayer', function(price)
	TriggerEvent('RemoveBank', source, price, false, true) 
	TriggerClientEvent('DoLongHudText', source, 'You were charged $'..price..' for the items purchased.', 1)
	TriggerClientEvent('bd-notifications:client:SendAlert', source, { type = 'inform', text = 'You were charged $'..price..' for the items purchased.', length = 5000 })
end)
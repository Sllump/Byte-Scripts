BD.Admin.Util = BD.Admin.Util or {}
function GetIds(src)
    local ids = {}

    for k,v in pairs(GetPlayerIdentifiers(src)) do
        if string.sub(v, 1, string.len("steam:")) == "steam:" then
            ids["hex"] = v
        elseif string.sub(v, 1, string.len("license:")) == "license:" then
            ids["license"] = v
        elseif string.sub(v, 1, string.len("xbl:")) == "xbl:" then
            ids["xbl"] = v
        elseif string.sub(v, 1, string.len("ip:")) == "ip:" then
            ids["ip"] = v
        elseif string.sub(v, 1, string.len("discord:")) == "discord:" then
            ids["discord"] = v
        elseif string.sub(v, 1, string.len("live:")) == "live:" then
            ids["live"] = v
        end
    end

    if not ids["ip"] then
        ids["ip"] = GetPlayerEndpoint(src)
    end

    if not ids["steamid"] and ids["hex"] then
        ids["steamid"] = HexIdToSteamId(ids["hex"])
    end

    return ids
end

function HexIdToSteamId(hexid)
    local cid = HexIdToComId(hexid)
    local steam64 = math.floor(tonumber(string.sub( cid, 2)))
	local a = steam64 % 2 == 0 and 0 or 1
	local b = math.floor(math.abs(6561197960265728 - steam64 - a) / 2)
	local sid = "STEAM_0:"..a..":"..(a == 1 and b -1 or b)
    return sid
end

function HexIdToComId(hexid)
    return math.floor(tonumber(string.sub(hexid, 7), 16))
end

function IsSteamId(id)
    id = tostring(id)
    if not id then return false end
    if string.match(id, "^STEAM_[01]:[01]:%d+$") then return true else return false end
end

function stringsplit(string, split)
	local t = {}
	local i = 0
	local f = string.find(string, split, 1, true)
	while f do
		i = i + 1
		t[i] = string.sub(string, 1, f-1)
		string = string.sub(string, f+1)
		f = string.find(string, split, 1, true)
	end
	i = i + 1
	t[i] = string
	return t
end

function BD.Admin.Util.getIdentifier(self, src, identifier)
	local ids = GetPlayerIdentifiers(src)
	for k, v in ipairs(ids) do
		for _, id in ipairs(stringsplit(v, ":")) do
			if id == identifier then
				return v
			end
		end
	end
	return false
end

function generateUniqueBanId()
    math.randomseed(GetGameTimer())
    local template ='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    return string.gsub(template, '[xy]', function (c)
        local v = (c == 'x') and math.random(0, 0xf) or math.random(8, 0xb)
        return string.format('%x', v)
    end)
end
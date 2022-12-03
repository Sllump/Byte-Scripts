BD = BD or {}
BD.Admin = BD.Admin or {}

BD.Admin.Ranks = {"user", "mod", "admin", "special", "dev", "owner"}

function getRank(pRank)
    for idx, rank in ipairs(BD.Admin.Ranks) do
        if rank == pRank then
            return idx
        end
    end
    return getRank("user")
end

exports("getRank", getRank)

BD.Admin.Commands = {{
    name = "teleport",
    rank = getRank("admin"),
    log = "Teleported to ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Teleport",
                cat = "Player",
                child = {
                    inputs = {"Target"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "teleportCoords",
    rank = getRank("admin"),
    log = "Teleported to Coord ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Teleport Coords",
                cat = "Player",
                child = {
                    inputs = {"Coords"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "fixVehicle",
    rank = getRank("admin"),
    log = "Fixed current Vehicle.",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Fix Vehicle",
                cat = "Player",
                child = nil
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "god",
    rank = getRank("admin"),
    log = "set into god mode (",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "God",
                cat = "Player",
                child = false
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "devspawn",
    rank = getRank("dev"),
    log = "Changed their dev spawn. ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Dev Spawn",
                cat = "Utility",
                child = nil
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "noclip",
    rank = getRank("admin"),
    log = "Nocliped (",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Noclip",
                cat = "Player",
                child = false
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "cloak",
    rank = getRank("admin"),
    log = "Toggled Cloaked (",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Cloak",
                cat = "Player",
                child = false
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "blips",
    rank = getRank("admin"),
    log = "Toggled Blips",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Player Blips",
                cat = "Player",
                child = false
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "deleteEntity",
    rank = getRank("admin"),
    log = " Deleted Entity ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Delete Entity",
                cat = "Utility",
                child = nil
            },
            options = {
                bindKey = nil
            }
        },
        selection = {
            title = "Delete Entity",
            child = nil,
            action = "",
            entityType = -1
        },
    }
}, {
    name = "attach",
    rank = getRank("admin"),
    log = " Attached to ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source or nil
        local targetPed = GetPlayerPed(target)
        local targetCoords = GetEntityCoords(targetPed)
        local targetData = {target = {source = target}}
        
        if not target then
            return
        elseif (target == pSource) then
            TriggerClientEvent("DoLongHudText", pSource, "You can't attach to yourself.", 2)
            return
        end

        TriggerClientEvent("bd-admin:attachClient", pSource, targetCoords, targetData)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Attach",
                cat = "Player",
                child = {
                    inputs = {"Target"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "ban",
    rank = getRank("admin"),
    log = " Banned ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local reason = pData.Reason ~= "" and pData.Reason or "No reason given."
        local banLength = pData["Ban Length"] ~= "" and pData["Ban Length"] or 0

        BD.Admin.DB.banUser(pSource, target, tonumber(banLength), reason)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Ban",
                cat = "User",
                child = {
                    inputs = {"Target", "Reason", "Ban Length"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "banid",
    rank = getRank("admin"),
    log = " Banned[ID] ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local reason = pData.Reason ~= "" and pData.Reason or "No reason given."
        local banLength = pData["Ban Length"] ~= "" and pData["Ban Length"] or 0

        BD.Admin.DB.banUserID(pSource, target, tonumber(banLength), reason)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Ban ID",
                cat = "User",
                child = {
                    inputs = {"Steam ID", "Reason", "Ban Length"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "barber",
    rank = getRank("admin"),
    log = " Opened barber menu ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        TriggerClientEvent("raid_clothes:openBarber", target, false)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Barber",
                cat = "User",
                child = {
                    inputs = {"TargetNot"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "clothing",
    rank = getRank("admin"),
    log = " Opened clothing menu ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)        
        local target = pData.target.source ~= "" and pData.target.source or pSource
        TriggerClientEvent("raid_clothes:openClothing", target, false)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Clothing",
                cat = "User",
                child = {
                    inputs = {"TargetNot"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
},{
    name = "bring",
    rank = getRank("admin"),
    log = " Brought ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = tonumber(pData.target.source)
        local sourcePed = GetPlayerPed(pSource)
        local coordsToBring = GetEntityCoords(sourcePed)
        local bringCoords = {coordsToBring.x, coordsToBring.y, coordsToBring.z}

        if (target == pSource) then
            TriggerClientEvent("DoLongHudText", pSource, "You can't bring yourself.", 2)
            return
        end

        TriggerClientEvent("bd-admin:bringClient", target, bringCoords)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Bring",
                cat = "User",
                child = {
                    inputs = {"Target"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, -- {
--     name = "Create Spray Can",
--     rank = getRank("admin"),
--     log = " Opened barber menu ",
--     isClientCommand = true,
--     commandUI = {
--         adminMenu = {
--             command = {
--                 title = "Barber",
--                 cat = "User",
--                 child = {
--                     inputs = {"Target"}
--                 }
--             },
--             options = {
--                 bindKey = nil
--             }
--         }
--     }
-- },
{
    name = "unban",
    rank = getRank("admin"),
    log = " Unbanned ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData["Ban ID"] or nil

        local success, message, data = BD.Admin.DB.unbanUser(target)
        TriggerClientEvent("DoLongHudText", pSource, message, data)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Un-Ban",
                cat = "Utility",
                child = {
                    inputs = {"Ban ID"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "Weather",
    rank = getRank("admin"),
    log = " Weather / Time ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local weather = pData["Weather"] or nil
        local time = tonumber(pData["Time"]) or nil

        -- local success, message, data = BD.Admin.DB.unbanUser(target)
        -- TriggerClientEvent("DoLongHudText", pSource, message, data)
        if (time ~= nil) then
            TriggerEvent("bd-weathersync:server:setTime", pSource, time)
        end

        if (weather ~= nil) then
            TriggerEvent("bd-weathersync:server:setWeather", pSource, weather)
        end
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Weather / Time",
                cat = "Utility",
                child = {
                    inputs = {"Weather", "Time"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
},{
    name = "tsay",
    rank = getRank("admin"),
    log = " Used tSay ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local message = pData["Text"] or nil
        local string =
            [[<center><span style="font-size:28px;color:red;">%s<br /><hr style="border-color: rgba(255, 0, 0, 0.5);">%s</span></center>]]

        TriggerClientEvent("pNotify:SendNotification", -1, {
            text = string.format(string, message, message),
            layout = "top",
            timeout = 15000,
            type = "error",
            animation = {
                open = "gta_effects_fade_in",
                close = "gta_effects_fade_out"
            },
            queue = "announcement",
            progressBar = false
        })
        -- TriggerClientEvent("raid_clothes:openBarber", target, false)
        -- TriggerEvent("bd-jobmanager:playerBecameJob", target, pData.Job);
        -- TriggerClientEvent("bd-jobmanager:playerBecameJob", target, pData.Job);
        -- return pData.Job .. ")";
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "tSay",
                cat = "Utility",
                child = {
                    inputs = {"Text"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "revive",
    rank = getRank("admin"),
    log = " Revived ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        TriggerClientEvent("reviveFunction", target)
        -- return pData.Job .. ")";
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Revive",
                cat = "Player",
                child = {
                    inputs = {"TargetNot"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "cSay",
    rank = getRank("admin"),
    log = " Used cSay ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local message = pData["Text"] or nil    
        -- for i = 1, 3 do
        TriggerClientEvent("chatMessage", -1, "Admin", {255, 0, 0}, message)
        -- end
        -- return pData.Job .. ")";
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "cSay",
                cat = "Utility",
                child = {
                    inputs = {"Text"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "engine_sound",
    rank = getRank("admin"),
    log = " Engine Sound Changed to ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Engine Sound",
                cat = "Utility",
                child = {
                    inputs = {"Sound Name"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, -- This has to be selection
-- 3 Different Farts
-- Reverby Fart
-- Fart
-- Wet Fart
{
    name = "Sound",
    rank = getRank("admin"),
    log = " Made a sound to ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local sound = pData["Sound"] or nil

        if (sound ~= nil) then
            TriggerClientEvent("playSound", target, sound)
        end
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Play Sound",
                cat = "Utility",
                child = {
                    inputs = {"TargetNot", "Sound"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "Give Car",
    rank = getRank("admin"),
    log = " Gave Car ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or nil
        if (target == nil) then
            return
        end

        local user = exports["bd-base"]:getModule("Player"):GetUser(target)
        local char = user:getCurrentCharacter()
        local pVehicle = pData["Vehicle"] or nil
        local pPlate = pData["Plate"] ~= "" and pData["Plate"] or nil

        if (pVehicle ~= nil) then
            TriggerEvent("bd:vehicles:giveVehicle", target, pVehicle, char.id, 'SCRIPT', 'menu', pPlate)
            return
        end

        TriggerClientEvent("DoLongHudText", pSource, "Invalid Car")
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Give Car",
                cat = "Utility",
                child = {
                    inputs = {"Target", "Vehicle", "Plate"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, -- This has to be a selection too
{
    name = "Give License",
    rank = getRank("admin"),
    log = " Gave License ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData["License"] == "Select") then
            return
        end
        local target = pData.target.source or nil
        local license = pData["License"] or nil
        local user = exports["bd-base"]:getModule("Player"):GetUser(target)
        local char = user:getCurrentCharacter()

        local success, message, data = exports["bd-gov"]:addLicenseToCharacter(char.id, license, 1000)
        TriggerClientEvent("DoLongHudText", pSource, message, data)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Give License",
                cat = "Player",
                child = {
                    inputs = {"Target", "License"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, -- Server Whitelist
{
    name = "Give Whitelist",
    rank = getRank("admin"),
    log = " Gave Whitelist ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData["Steam ID [HEX]"] == nil) then
            return
        end
        local steamID = pData["Steam ID [HEX]"] or nil

        local result, success = exports["bd-queue"]:addWhitelist(steamID)
        TriggerClientEvent("DoLongHudText", pSource, result, success)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Give Whitelist",
                cat = "User",
                child = {
                    inputs = {"Steam ID [HEX]"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "Give Cash",
    rank = getRank("admin"),
    log = " Gave Cash ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData["Amount"] == nil) then
            return
        end
        local amount = tonumber(pData["Amount"]) or nil
        local target = pData.target.source or nil
        local user = exports["bd-base"]:getModule("Player"):GetUser(target)

        exports["bd-financials"]:DoAddCashToUser(target, amount)
        TriggerClientEvent("DoLongHudText", pSource, "Added $" .. amount .. " to " .. user:getVar("name"), 1)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Give Cash",
                cat = "Player",
                child = {
                    inputs = {"Target", "Amount"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "Hunger / Thirst Max",
    rank = getRank("admin"),
    log = " Maxed Hunger / Thirst ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource

        TriggerClientEvent("setToMaxHungerThrist", target)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Hunger / Thirst Max",
                cat = "Player",
                child = {
                    inputs = {"TargetNot"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, -- Has to be selection
{
    name = "Kick",
    rank = getRank("admin"),
    log = " Kick ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData.target.source == nil) then
            return
        end
        local amount = tonumber(pData["Amount"]) or nil
        local target = pData.target.source or nil
        local reason = pData["Reason"] ~= nil and pData["Reason"] or "Kicked by " .. GetPlayerName(pSource)

        exports["bd-admin"]:kickPlayer(target, reason, pSource)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Kick",
                cat = "Utility",
                child = {
                    inputs = {"Target", "Reason"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
},
{
    name = "Add Synced Object",
    rank = getRank("admin"),
    log = " Added Synced Object ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        -- np objects trigger here
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Add Synced Object",
                cat = "Utility",
                child = {
                    inputs = {"Model", "JsonText"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "Clear Maintenance Fees",
    rank = getRank("admin"),
    log = " Cleared fees ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Clear Maintenance Fees",
                cat = "Player",
                child = {
                    inputs = {"State ID"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "Meteor",
    rank = getRank("admin"),
    log = " Meteor ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Meteor",
                cat = "Utility",
                child = {
                    inputs = {"XYZ"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, { -- This has to be done.
    name = "Revive in Radius",
    rank = getRank("admin"),
    log = " Revive in Radius ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pSource
        local ped = GetPlayerPed(target)
        local playerCoords = GetEntityCoords(ped)
        local nearbyPlayers = exports["bd-infinity"]:GetNearbyPlayers(playerCoords, 50)

        TriggerClientEvent("reviveFunction", nearbyPlayers)
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Revive in Radius",
                cat = "Player",
                child = nil
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "Request Job",
    rank = getRank("admin"),
    log = " Request Job ",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        if (pData.target.source == nil) then
            return
        end
        local target = pData.target.source or nil
        TriggerEvent("bd-jobmanager:playerBecameJob", target, pData.Job);
        TriggerClientEvent("bd-jobmanager:playerBecameJob", target, pData.Job);
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Request Job",
                cat = "Player",
                child = {
                    inputs = {"Target", "Job"}
                }
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "teleportMarker",
    rank = getRank("admin"),
    log = "Teleported to Marker. ",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "Teleport Marker",
                cat = "Player",
                child = nil
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "superJump",
    rank = getRank("dev"),
    log = "SuperJummped (",
    isClientCommand = true,
    commandUI = {
        adminMenu = {
            command = {
                title = "SuperJump",
                cat = "Player",
                child = false
            },
            options = {
                bindKey = nil
            }
        }
    }
}, {
    name = "giveItem",
    rank = getRank("admin"),
    log = "Spawned Item (",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local amount = pData["Amount"] ~= "" and tonumber(pData["Amount"]) or 1
        local itemData = pData["Json"] ~= "" and json.decode(pData["Json"]) or nil
        TriggerClientEvent("player:receiveItem", target, pData.Item, amount, false, itemData);
        return pData.Item .. ")";
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Spawn Item",
                cat = "Utility",
                child = {
                    inputs = {"TargetNot", "Item", "Amount", "Json"}
                }
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "giveJob",
    rank = getRank("admin"),
    log = "Give Job Whitelist (",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local job = pData.Job
        local rank = pData.Rank
        local user = exports["bd-base"]:getModule("Player"):GetUser(target)
        local jobs = exports["bd-base"]:getModule("JobManager")
        local message, success = jobs:AddWhiteList(user, job, rank)

        if success == true then
            TriggerClientEvent("DoLongHudText", pSource, message, 1)
        elseif success == false then
            TriggerClientEvent("DoLongHudText", pSource, message, 2)
            return
        else
            TriggerClientEvent("DoLongHudText", pSource, message, success)
            return
        end

        return pData.Job .. ")";
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Give Job Whitelist",
                cat = "Utility",
                child = {
                    inputs = {"TargetNot", "Job", "Rank"}
                }
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}, {
    name = "spawnVehicle",
    rank = getRank("admin"),
    log = "Spawned Car (",
    isClientCommand = false,
    executedFuntion = function(pSource, pData)
        local target = pData.target.source ~= "" and pData.target.source or pSource
        local addMods = pData.Mods
        local vin = pData.Vin ~= "" and pData.Vin or nil
        exports["bd-vehicles"]:BasicSpawn(target, pData.Vehicle, nil, nil, 'menu', nil, vin, addMods)
        return pData.Vehicle .. ")";
    end,
    commandUI = {
        adminMenu = {
            command = {
                title = "Spawn Car",
                cat = "Utility",
                child = {
                    inputs = {"TargetNot", "Vehicle", "Vin", "Vehicle Overwrite"},
                    checkBox = {"Mods"}
                }
            },
            options = {
                bindKey = {
                    value = nil,
                    options = {}
                }
            }
        }
    }
}}

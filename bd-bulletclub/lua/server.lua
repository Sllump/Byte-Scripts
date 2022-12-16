function(GameModes)
    Score = 0
    gTargets = 0
    isPlaying = false
    strafe = false

local modes = {
    easy = {
        gameTime = 5000,
        gameTargets = 12,
    },
    medium = {
        gameTime = 2500,
        gameTargets = 25,
    },
    hard = {
        gameTime = 1000,
        gameTargets = 50,
    },
    aimbot = {
        gameTime = 500,
        gameTargets = 100,
    }
}

function UpdateHud()
    TriggerEvent('bd-bulletclub:updateHud', -1, [ 'Status: ' .. (isPlaying ? 'Active' : 'Pending') +  ' | Difficulty: ' .. input,  'Score: ' .. score  ])
end

RegisterCommand('setdiff', function(args)
    input = args[0], 'custom' === args[0] && (Time = parseInt(args[1])), (Targets = parseInt(args[2])),
    UpdateHud()
end)

RegisterNetEvent('bd-bulletclub:startGame', function(GameMode)
    if (not isPlaying) then
        if ((Playing = true), 'custom' === input) then
            Score = 0
            gTargets = Targets
            TriggerEvent('bd-bulletclub:gameStarted', Gamemode, Targets, Time, strafe)
        else
            Score = 0
            gTargets = modes[input].gameTargets
            time = modes[input].gameTime
            targets = modes[input].gameTargets
            TriggerEvent('bd-bulletclub:gameStarted', Gamemode, targets, time, strafe)
        end
        UpdateHud()
    end
end)

RegisterNetEvent('bd-bulletclub:updateSettings', function(Settings)
    isPlaying || ((input = Settings.difficulty), (strafe = Settings.strafeEnabled),
    UpdateHud())
end)

RegisterNetEvent('bd-bulletclub:targetKilled', function()
    Score = Score + 1
    UpdateHud()
end)

RegisterNetEvent('bd-bulletclub:updateEnemiesRemaining', function(Enemies)
    isPlaying and TriggerEvent('bd-bulletclub:updateHud', -1, [ 'Status: Active | Difficulty: ' .. input,  'Score: ' .. score,  'Targets Remaining: ' .. Enemies, 'Strafe Enabled' .. (strafe ? 'true' : 'false')])
end)

RegisterNetEvent('bd-bulletclub:gameCompleted', function(source, score)
    if not isPlaying then
        TriggerEvent('bd-bulletclub:updateHud', -1, [ 'Status: Pending | Difficulty: ' .. input,  'Score: ' .. score,  'Targets Remaining: ' .. Enemies, 'Strafe Enabled' .. (strafe ? 'true' : 'false')])
    end
    TriggerEvent('player:receiveItem', source, 'bclubtoken', 1)
    local user = exports["arp-base"]:getModule("Player"):GetUser(src)
    local character = user:getCurrentCharacter()
    if ( not character ) then 
        return 
    end
    local data = SQL.execute('SELECT * FROM bulletclub_leaderboard WHERE difficulty = @difficulty AND cid = @cid', {
        ['@difficulty'] = input,
        ['@character_id'] = character.id
    })
    if (data[1] == nil) then
        SQL.execute('INSERT INTO bulletclub_leaderboard (cid, difficulty, score) VALUES (@cid, @difficulty, @score)', {
            ['@cid'] = character.id,
            ['@difficulty'] = input,
            ['@score'] = score
        })
    else
        if (data[1].score < score) then
            SQL.execute('UPDATE bulletclub_leaderboard SET score = @score WHERE difficulty = @difficulty AND cid = @cid', {
                ['@cid'] = character.id,
                ['@difficulty'] = input,
                ['@score'] = score
            })
        end
    end
end)

RegisterNetEvent('bd-bulletclub:resetGameData', function()
    isPlaying = false
    Score = 0
    gTargets = 0
    UpdateHud()
    TriggerEvent('bd-bulletclub:gameReset')
end)

RegisterNetEvent('bd-bulletclub:enteredBuilding', function()
    UpdateHud()
end)

RegisterNetEvent('bd-bulletclub:getLeaderboard', function(difficulties)
    local data = SQL.execute('SELECT * FROM bulletclub_leaderboard WHERE difficulty = @difficulty ORDER BY score DESC LIMIT 10', {
        ['@difficulty'] = difficulties
    })
    TriggerClientEvent('bd-bulletclub:receiveLeaderboard', source, data)
end)
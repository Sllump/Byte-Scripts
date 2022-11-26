; (function () {
    const _0x3dbf5d = _0x28abeb(804)
    let _0x334b61 = 0,
        _0xa3dd03 = 0,
        _0x4edbd8 = false,
        _0x7f00c5 = false
    const _0x4ece0c = {
        easy: {
            gameTime: 5000,
            gameTargets: 12,
        },
        medium: {
            gameTime: 2500,
            gameTargets: 25,
        },
        hard: {
            gameTime: 1000,
            gameTargets: 50,
        },
        aimbot: {
            gameTime: 500,
            gameTargets: 100,
        },
    }
    let _0x1bfc13 = 'aimbot',
        _0x218690 = 0,
        _0x393dde = 0
    const _0x569c41 = () => {
        emitNet('arp-bulletclub:updateHud', -1, [
            'Status: ' +
            (_0x4edbd8 ? 'Active' : 'Pending') +
            ' | Difficulty: ' +
            _0x1bfc13,
            'Score: ' +
            _0x334b61 +
            ' | Remaining: ' +
            ('custom' === _0x1bfc13
                ? _0x393dde
                : _0x4edbd8
                    ? _0xa3dd03
                    : _0x4ece0c[_0x1bfc13].gameTargets),
            'Strafe Enabled: ' + (_0x7f00c5 ? 'true' : 'false'),
        ])
    }
    RegisterCommand(
        'setdiff',
        (_0x4b70c3, _0x1df4a0, _0x2aae58) => {
            ; (_0x1bfc13 = _0x1df4a0[0]),
                'custom' === _0x1df4a0[0] &&
                ((_0x218690 = parseInt(_0x1df4a0[1])),
                    (_0x393dde = parseInt(_0x1df4a0[2]))),
                _0x569c41()
        },
        false
    )
    _0x3dbf5d.Events.onNet('arp-bulletclub:startGame', (_0x4201a8) => {
        if (!_0x4edbd8) {
            if (((_0x4edbd8 = true), 'custom' === _0x1bfc13)) {
                _0x334b61 = 0
                _0xa3dd03 = _0x393dde
                _0x3dbf5d.Events.emitNet(
                    'arp-bulletclub:gameStarted',
                    _0x4201a8,
                    _0x393dde,
                    _0x218690,
                    _0x7f00c5
                )
            } else {
                _0x334b61 = 0
                _0xa3dd03 = _0x4ece0c[_0x1bfc13].gameTargets
                const _0x2cb4cd = _0x4ece0c[_0x1bfc13].gameTime,
                    _0x496d4d = _0x4ece0c[_0x1bfc13].gameTargets
                _0x3dbf5d.Events.emitNet(
                    'arp-bulletclub:gameStarted',
                    _0x4201a8,
                    _0x496d4d,
                    _0x2cb4cd,
                    _0x7f00c5
                )
            }
            _0x569c41()
        }
    })
    _0x3dbf5d.Events.onNet('arp-bulletclub:updateSettings', (_0x1c08fd) => {
        _0x4edbd8 ||
            ((_0x1bfc13 = _0x1c08fd.difficulty),
                (_0x7f00c5 = _0x1c08fd.strafeEnabled),
                _0x569c41())
    })
    _0x3dbf5d.Events.onNet('arp-bulletclub:targetKilled', () => {
        _0x4edbd8 && (_0x334b61++, _0x569c41())
    })
    _0x3dbf5d.Events.onNet(
        'arp-bulletclub:updateEnemiesRemaining',
        (_0x4bf0ac) => {
            _0x4edbd8 &&
                emitNet('arp-bulletclub:updateHud', -1, [
                    'Status: ' +
                    (_0x4edbd8 ? 'Active' : 'Pending') +
                    ' | Difficulty: ' +
                    _0x1bfc13,
                    'Score: ' + _0x334b61 + ' | Remaining: ' + _0x4bf0ac,
                    'Strafe Enabled: ' + (_0x7f00c5 ? 'true' : 'false'),
                ])
        }
    )
    _0x3dbf5d.Events.onNet(
        'arp-bulletclub:gameCompleted',
        async (_0x3f52fa, _0x3a1284) => {
            if (
                ((_0x4edbd8 = false),
                    (_0x334b61 = 0),
                    (_0xa3dd03 = 0),
                    _0x569c41(),
                    0 === _0x3a1284)
            ) {
                return
            }
            emitNet('player:receiveItem', _0x3f52fa, 'bclubtoken', 1)
            const _0x5bbdc8 = await _0x3dbf5d.Base.getCharacter(_0x3f52fa)
            if (!_0x5bbdc8) {
                return
            }
            const _0x460988 = await SQL.execute(
                'SELECT * FROM bulletclub_leaderboard WHERE difficulty = @difficulty AND cid = @cid',
                {
                    difficulty: _0x1bfc13,
                    cid: _0x5bbdc8.id,
                }
            )
            if (_0x460988[0]) {
                if (_0x460988[0].score > _0x3a1284) {
                    return
                }
                await SQL.execute(
                    'UPDATE bulletclub_leaderboard SET score = @score WHERE difficulty = @difficulty AND cid = @cid',
                    {
                        score: _0x3a1284,
                        difficulty: _0x1bfc13,
                        cid: _0x5bbdc8.id,
                    }
                )
            } else {
                if (
                    !(await SQL.execute(
                        'INSERT INTO bulletclub_leaderboard (difficulty, name, score, cid) VALUES (@difficulty, @name, @score, @cid)',
                        {
                            difficulty: _0x1bfc13,
                            name: _0x5bbdc8.first_name + ' ' + _0x5bbdc8.last_name,
                            score: _0x3a1284,
                            cid: _0x5bbdc8.id,
                        }
                    ))
                ) {
                    return
                }
            }
        }
    )
    _0x3dbf5d.Events.onNet('arp-bulletclub:resetGameState', () => {
        _0x4edbd8 = false
        _0x334b61 = 0
        _0xa3dd03 = 0
        _0x569c41()
        _0x3dbf5d.Events.emitNet('arp-bulletclub:gameReset', -1)
    })
    _0x3dbf5d.Events.onNet('arp-bulletclub:enteredBuilding', () => {
        _0x569c41()
    })
    _0x3dbf5d.Procedures.register(
        'arp-bulletclub:getLeaderBoard',
        async (_0x41b636, _0x1af012) =>
            (await SQL.execute(
                'SELECT * FROM bulletclub_leaderboard WHERE difficulty\t= @difficulty ORDER BY score DESC',
                { difficulty: _0x1af012 }
            )) || []
    )
})()

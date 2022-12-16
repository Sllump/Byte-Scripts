;(function () {
    !(function () {
      _0x3f7b2d = { value: true }
      const _0x5c080c = _0x518d14(615),
        _0x38b1ca = _0x518d14(678)
      let _0x5f16c3 = false,
        _0x576290 = 0,
        _0x2b4ee2 = null,
        _0x5971ad = 0
      const Weapons = new Set(),
        Weapon1 = {
          name: 'Airsoft Gun',
          item: '-2084633992',
        },
        Weapon2 = {
          name: 'FN FNX-45',
          item: '1593441988',
        },
        Weapon3 = {
          name: 'Desert Eagle',
          item: '-1716589765',
        },
        weaponList = [Weapon1, Weapon2, Weapon3]

      onNet('arp-bulletclub:gameStarted', (_0x5ad20c, _0x4fdc60, _0x5884b1) => {
          return _0x278f2e(_0x5ad20c, _0x4fdc60, _0x5884b1)
        }
      )
      
      onNet('arp-bulletclub:startGame', () => {
        const PlayerID = GetPlayerServerId(PlayerId())
        return emitNet('arp-bulletclub:startGame', PlayerID)
      })

      onNet('arp-bulletclub:modifySettings', () => {
        return modifySettings()
      })
      onNet('arp-bulletclub:viewLeaderBoard', (leaderboard) => {
        _0x4890c3(leaderboard.type)
      })

      onNet('arp-bulletclub:getWeapon', () => {
        getWeapon()
      })

      onNet('arp-bulletclub:resetGameState', () => {
        emitNet('arp-bulletclub:resetGameState')
      })

      onNet('arp-bulletclub:gameReset', () => {
        gameReset()
      })

      RegisterInterfaceCallback('arp-bulletclub:purchaseWeapon', (data, _0x3c4f20) => {
          const _0x4470e0 = { ok: true, message: 'done' },
            _0x7d11ee = { data: {}, meta: _0x4470e0 }
          _0x3c4f20(_0x7d11ee)
          const GetItemMeta = exports['arp-inventory'].GetItemsByItemMetaKV(data?.key?.weapon, 'BulletClub', true)
          if (GetItemMeta.length > 0) {
            return emit('DoLongHudText', 'You already have this weapon.', 2)
          }
          const metaData = { BulletClub: true, _hideKeys: ['BulletClub']}
          emit(
            'player:receiveItem', data?.key?.weapon, 1, false, metaData, JSON.stringify({}))
        }
      )

      onNet('arp-bulletclub:updateHud', (_0x21a871) => {
        if (!pZone('bullet_club')) {
          return
        }
        const hudStatus = { show: true, title: 'Bullet Club Range', values: _0x21a871, }
        exports['arp-interface'].sendAppEvent('status-hud', hudStatus)
      })
      onNet('current-items', () => {
        if (pZone('bullet_club')) { return }
        _0x450127()
      })
      const TargetPeds = [
          'cs_orleans',
          'cs_old_man2',
          's_m_m_movalien_01',
          'u_m_y_juggernaut_01',
          'csb_ballasog',
          'csb_rashcosvki',
          'csb_ramp_mex',
          'g_f_y_families_01',
          'g_m_m_chicold_01',
        ],

        _0x278f2e = async (_0x3531be, _0x2e82bb, _0x34dd06) => {
          for (let _0x555b59 = 0; _0x555b59 < TargetPeds.length; _0x555b59++) {
            await _0x38b1ca.Streaming.loadModel(TargetPeds[_0x555b59])
          }
          const _0x4618e2 = _0x54a5e1(_0x3531be)
          PlaySoundFrontend(
            -1,
            'Beep_Red',
            'DLC_HEIST_HACKING_SNAKE_SOUNDS',
            false
          )
          emit('DoLongHudText', 'Starting in 3', 1)
          await (0, _0x5c080c.Delay)(1000)
          PlaySoundFrontend(
            -1,
            'Beep_Red',
            'DLC_HEIST_HACKING_SNAKE_SOUNDS',
            false
          )
          emit('DoLongHudText', 'Starting in 2', 1)
          await (0, _0x5c080c.Delay)(1000)
          PlaySoundFrontend(
            -1,
            'Beep_Red',
            'DLC_HEIST_HACKING_SNAKE_SOUNDS',
            false
          )
          emit('DoLongHudText', 'Starting in 1', 1)
          await (0, _0x5c080c.Delay)(1000)
          PlaySoundFrontend(
            -1,
            'Checkpoint_Hit',
            'GTAO_FM_Events_Soundset',
            false
          )
          emit('DoLongHudText', 'Started!', 1)
          _0x576290 = 0
          _0x5f16c3 = true
          const _0x5a8970 = setInterval(() => {
            if (!_0x5f16c3) {
              return clearInterval(_0x5a8970)
            }
            if (_0x2b4ee2 && IsEntityDead(_0x2b4ee2)) {
              if (GetPedSourceOfDeath(_0x2b4ee2) === PlayerPedId()) {
                _0x576290 += 1
                emitNet('arp-bulletclub:targetKilled')
              }
              DeleteEntity(_0x2b4ee2)
              _0x2b4ee2 = null
              const _0x14f44b = _0x17f261(_0x4618e2, _0x34dd06)
              _0x4618e2.splice(_0x14f44b, 1)
              emitNet(
                'arp-bulletclub:updateEnemiesRemaining',
                _0x4618e2.length
              )
            }
            if (GetGameTimer() > _0x5971ad + _0x2e82bb && _0x4618e2.length > 0) {
              DeleteEntity(_0x2b4ee2)
              const _0x294bd7 = _0x17f261(_0x4618e2, _0x34dd06)
              _0x4618e2.splice(_0x294bd7, 1)
              emitNet(
                'arp-bulletclub:updateEnemiesRemaining',
                _0x4618e2.length
              )
            }
            if (
              _0x4618e2.length === 0 &&
              GetGameTimer() > _0x5971ad + _0x2e82bb
            ) {
              clearInterval(_0x5a8970)
              DeleteEntity(_0x2b4ee2)
              emit('DoLongHudText', 'Completed! Score: ' + _0x576290, 1, 12000)
              const _0x5743e6 = GetPlayerServerId(PlayerId())
              emitNet(
                'arp-bulletclub:gameCompleted',
                _0x5743e6,
                _0x576290
              )
              emitNet(
                'arp-bulletclub:updateEnemiesRemaining',
                _0x4618e2.length
              )
              _0x5d255e()
              PlaySoundFrontend(-1, 'RANK_UP', 'HUD_AWARDS', false)
            }
          }, 100)
        },
        
        modifySettings = async () => {
          let _0x2147dc
          const _0x39fa20 = {
              id: 'easy',
              name: 'easy',
            },
            _0x15cce6 = {
              id: 'medium',
              name: 'medium',
            },
            _0x1a3225 = {
              id: 'hard',
              name: 'hard',
            },
            _0x3c6b2f = {
              id: 'aimbot',
              name: 'aimbot',
            },
            _0x4c5147 = {
              name: 'difficulty',
              label: 'Mode Difficulty',
              icon: 'time',
              _type: 'select',
              options: [_0x39fa20, _0x15cce6, _0x1a3225, _0x3c6b2f],
            },
            _0x42055b = {
              id: 'true',
              name: 'True',
            },
            _0x2bcc81 = {
              id: 'false',
              name: 'False',
            },
            _0x10fb2d = {
              name: 'strafeEnabled',
              label: 'Strafe Enabled',
              icon: 'shield-alt',
              _type: 'select',
              options: [_0x42055b, _0x2bcc81],
            },
            _0x1253f2 = [_0x4c5147, _0x10fb2d],
            _0x42dcf0 = await exports['arp-interface'].OpenInputMenu(
              _0x1253f2
            )
          if (!_0x42dcf0) {
            return
          }
          const _0x48deb9 =
              (_0x2147dc = _0x42dcf0.difficulty) !== null && _0x2147dc !== void 0
                ? _0x2147dc
                : 'easy',
            _0x4168aa = _0x42dcf0.strafeEnabled === 'true',
            _0x4090bb = {
              difficulty: _0x48deb9,
              strafeEnabled: _0x4168aa,
            }
          emitNet('arp-bulletclub:updateSettings', _0x4090bb)
        },

        _0x4890c3 = async (_0x566cdf) => {
          const _0x24f0f5 = await _0x38b1ca.Procedures.execute(
              'arp-bulletclub:getLeaderBoard',
              _0x566cdf
            ),
            _0x3cbfda = _0x24f0f5.map((_0x2f5e3a) => {
              const _0x36b870 = {
                icon: 'user',
                title: _0x2f5e3a.name,
                description: 'Avg Score: ' + _0x2f5e3a.score,
              }
              return _0x36b870
            })
          if (_0x3cbfda.length <= 0) {
            const _0x5c7503 = {
              icon: 'frown-open',
              title: 'No players yet',
            }
            _0x3cbfda.push(_0x5c7503)
          }
          const _0x3e967b =
              _0x566cdf.charAt(0).toUpperCase() + _0x566cdf.slice(1),
            _0x474f4e = {
              icon: 'user',
              title: 'Leaderboard (' + _0x3e967b + ')',
            }
          _0x3cbfda.unshift(_0x474f4e)
          exports['arp-interface'].showContextMenu(_0x3cbfda)
        },

        getWeapon = () => {
          const _0x18d817 = [],
            _0x349ca3 = {
              icon: 'info-circle',
              title: 'Weapon List',
            }
          _0x18d817.push(_0x349ca3)
          for (const _0x1ba8b2 of weaponList) {
            const _0xfe183a = {
              icon: 'circle',
              title: _0x1ba8b2.name,
              action: 'arp-bulletclub:purchaseWeapon',
              key: { weapon: _0x1ba8b2.item },
            }
            _0x18d817.push(_0xfe183a)
          }
          exports['arp-interface'].showContextMenu(_0x18d817)
        },

        _0x450127 = () => {
          let _0x3110c1 = false
          for (const _0x55c525 of weaponList) {
            const _0x5e7a1a = exports[
              'arp-inventory'
            ].GetItemsByItemMetaKV(_0x55c525.item, 'BulletClub', true)
            _0x5e7a1a.length > 0 &&
              ((_0x3110c1 = true),
              emit(
                'inventory:removeItemByMetaKV',
                _0x55c525.item,
                _0x5e7a1a.length,
                'BulletClub',
                true
              ))
          }
          _0x3110c1 &&
            emit('DoLongHudText', 'Range weapons have been returned...', 1)
        },
        pZone = (bulletclubWeapon) => {
          return Weapons.has(bulletclubWeapon)
        }
      onNet('arp-polyzone:enter', (bulletclubWeapon) => {
        Weapons.add(bulletclubWeapon)
      })

      onNet('arp-polyzone:exit', (bulletclubWeapon) => {
        Weapons.delete(bulletclubWeapon)
      })

      onNet('arp-polyzone:enter', (zone) => {
        if (zone !== 'bullet_club') {
          return
        }
        emitNet('arp-bulletclub:enteredBuilding')
        SetPedInfiniteAmmoClip(PlayerPedId(), true)
      })

      onNet('arp-polyzone:exit', (zone) => {
          if (zone !== 'bullet_club') {
            return
          }
        exports['arp-interface'].sendAppEvent('status-hud', _0x208bee)
        SetPedInfiniteAmmoClip(PlayerPedId(), false)
        _0x450127()
      })

      const _0x17f261 = (_0x218b36, _0x336906) => {
          const _0x398e87 =
              TargetPeds[Math.floor(Math.random() * TargetPeds.length)],
            _0x8affc = Math.floor(Math.random() * _0x218b36.length),
            _0x1e8fee = _0x218b36[_0x8affc]
          if (!_0x1e8fee) {
            return -1
          }
          _0x2b4ee2 = CreatePed(
            4,
            GetHashKey(_0x398e87),
            _0x1e8fee.x,
            _0x1e8fee.y,
            _0x1e8fee.z - 1,
            90.666,
            true,
            false
          )
          _0x5971ad = GetGameTimer()
          SetBlockingOfNonTemporaryEvents(_0x2b4ee2, true)
          if (!_0x336906) {
            FreezeEntityPositionNet(_0x2b4ee2, true)
          }
          PlaySoundFrontend(-1, 'CONFIRM_BEEP', 'HUD_MINI_GAME_SOUNDSET', false)
          if (_0x336906) {
            const _0x198c51 = _0x36f21e(0, 100) > 50,
              [_0x12bdbd, _0xfb2288, _0xa89cca] =
                GetOffsetFromEntityInWorldCoords(
                  _0x2b4ee2,
                  _0x198c51 ? 4 : -4,
                  0,
                  0
                )
            TaskGoStraightToCoord( _0x2b4ee2, _0x12bdbd, _0xfb2288, _0xa89cca, 10, 20000, 0, 0)
          }
          return _0x8affc
        },
        _0x54a5e1 = (_0x1c5dd0) => {
          const _0x104666 = [],
            _0x659142 = [-817.08, -796.41, 19.43]
          let _0x237a50 = _0x1c5dd0
          while (_0x237a50) {
            const _0x187d24 = Math.random() * 2 * Math.PI,
              _0x208b30 = Math.random() * 5 * 5,
              _0x510c22 =
                Math.sqrt(_0x208b30) * Math.cos(_0x187d24) + _0x659142[0],
              _0x456c89 =
                Math.sqrt(_0x208b30) * Math.sin(_0x187d24) + _0x659142[1],
              _0x59133b = {
                x: _0x510c22,
                y: _0x456c89,
                z: _0x659142[2],
              }
            _0x104666.push(_0x59133b)
            _0x237a50--
          }
          return _0x104666
        },
        _0x5d255e = () => {
          _0x5f16c3 = false
          _0x576290 = 0
          _0x2b4ee2 = null
          _0x5971ad = 0
        },
        gameReset = () => {
          _0x5f16c3 = false
          DeleteEntity(_0x2b4ee2)
          _0x5d255e()
        },
        _0x112e00 = (_0x107a3c, _0xfd3f9) => {
          const [_0x1047d4, _0x28a819, _0x266d79] = [
            _0x107a3c[0] - _0xfd3f9[0],
            _0x107a3c[1] - _0xfd3f9[1],
            _0x107a3c[2] - _0xfd3f9[2],
          ]
          return Math.sqrt(
            _0x1047d4 * _0x1047d4 + _0x28a819 * _0x28a819 + _0x266d79 * _0x266d79
          )
        },
        _0x36f21e = (_0x41413b, _0xe1fbc4) => {
          return Math.floor(
            _0xe1fbc4
              ? Math.random() * (_0xe1fbc4 - _0x41413b) + _0x41413b
              : Math.random() * _0x41413b
          )
        },

        initializeZones = () => {
          console.log( '[Bullet Club] Initializing zones...' )
          const coords = { x: -821.33, y: -796.58, z: 19.43 },
          coordsMisc = { heading: 0, minZ: 18.43, maxZ: 22.83, zoneEvents: 'arp-bulletclub:updateHud', data: { id: 'bullet_club' }, debugPoly: false }
          exports['arp-polyzone'].AddBoxZone('bullet_club', coords, 22.9, 24.6, coordsMisc)

          const controlsCoords = {x: -830, y: -796.47, z: 19.43},
                controlsCoords2 = {heading: 0, minZ: 18.51, maxZ: 19.31, data: { id: 'bullet_club_controls' }, debugPoly: false}
          exports['arp-polytarget'].AddBoxZone('bullet_club_controls', controlsCoords, 3.85, 0.3, controlsCoords2)

          const leaderboardCoords = {x: -834.04, y: -798.08, z: 19.42},
                leaderboardCoords2 = {heading: 0, minZ: 19.52, maxZ: 20.42, data: { id: 'bullet_club_leaderboards' }, debugPoly: false}
          exports['arp-polytarget'].AddBoxZone('bullet_club_leaderboards', leaderboardCoords, 1.5, 0.2, leaderboardCoords2)
        },

        initializePeekEntries = () => {
          console.log('[Bullet Club] Initializing peek entries...')
          const startGame = {
              triggerEvent: 'arp-bulletclub:startGame',
              id: 'bullet_club_start',
              icon: 'play',
              label: 'Start Game ($500)',
            },
            distance = { distance: { radius: 3.5 } }
          exports['arp-interact'].AddPeekEntryByPolyTarget('bullet_club_controls', [startGame], distance)

          const resetGame = {
            triggerEvent: 'arp-bulletclub:resetGameState',
            id: 'bullet_club_reset',
            icon: 'exclamation',
            label: 'Force Reset Game',
          }
          exports['arp-interact'].AddPeekEntryByPolyTarget('bullet_club_controls', [resetGame],
            {
              distance: { radius: 3.5 },
              isEnabled: async () => {
                const isEmployed = await exports['arp-business'].IsEmployedAt('the_bullet_club')
                return isEmployed
              },
            }
          )

          const changeSettings = {
            triggerEvent: 'arp-bulletclub:modifySettings',
            id: 'bullet_club_setting',
            icon: 'cog',
            label: 'Change Settings',
          }

          exports['arp-interact'].AddPeekEntryByPolyTarget('bullet_club_controls', [changeSettings],
            {
              distance: { radius: 3.5 },
              isEnabled: async () => {
                const isEmployed = await exports['arp-business'].IsEmployedAt('the_bullet_club')
                return isEmployed
              },
            }
          )

          const getWeapon = {
            triggerEvent: 'arp-bulletclub:getWeapon',
            id: 'bullet_club_getweapon',
            icon: 'hand-paper',
            label: 'Get Weapon',
          }
          exports['arp-interact'].AddPeekEntryByPolyTarget( 'bullet_club_controls', [getWeapon], distance )
          
          const leaderboardEasy = {
              triggerEvent: 'arp-bulletclub:viewLeaderBoard',
              id: 'bullet_club_leaderboard',
              icon: 'list',
              label: 'Leaderboard (Easy)',
              parameters: { type: 'easy' },
            },

            leaderboardMedium = {
              triggerEvent: 'arp-bulletclub:viewLeaderBoard',
              id: 'bullet_club_leaderboard_medium',
              icon: 'list',
              label: 'Leaderboard (Medium)',
              parameters: { type: 'medium' },
            },

            leaderboardHard = {
              triggerEvent: 'arp-bulletclub:viewLeaderBoard',
              id: 'bullet_club_leaderboard_hard',
              icon: 'list',
              label: 'Leaderboard (Hard)',
              parameters: { type: 'hard' },
            },

            leaderboardAimbot = {
              triggerEvent: 'arp-bulletclub:viewLeaderBoard',
              id: 'bullet_club_leaderboard_aimbot',
              icon: 'list',
              label: 'Leaderboard (Aimbot)',
              parameters: { type: 'aimbot' },
            }

          exports['arp-interact'].AddPeekEntryByPolyTarget('bullet_club_leaderboards',
            [leaderboardEasy, leaderboardMedium, leaderboardHard, leaderboardAimbot],
            distance
          )
        }
      setImmediate(() => {
        console.log('[Bullet Club] Loaded.'), initializeZones(), initializePeekEntries()
      })
    })()
  })()
  
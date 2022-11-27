const a0_0x31b420 = (function () {
    let _0x1a5471 = true
    return function (_0x23e765, _0x6ecc16) {
      const _0x49d9ca = _0x1a5471
        ? function () {
            if (_0x6ecc16) {
              const _0x2672bf = _0x6ecc16.apply(_0x23e765, arguments)
              return (_0x6ecc16 = null), _0x2672bf
            }
          }
        : function () {}
      return (_0x1a5471 = false), _0x49d9ca
    }
  })(),
  a0_0x31e80a = a0_0x31b420(this, function () {
    return a0_0x31e80a
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(a0_0x31e80a)
      .search('(((.+)+)+)+$')
  })
a0_0x31e80a()
;(() => {
  'use strict'
  var _0x1c0a1a = {
    g: (function () {
      if (typeof globalThis === 'object') {
        return globalThis
      }
      try {
        return this || new Function('return this')()
      } catch (_0x4bf93c) {
        if (typeof window === 'object') {
          return window
        }
      }
    })(),
  }
  ;(() => {})()
  var _0x2dbf97 = {}
  const _0x102473 = globalThis.NPX,
    _0x4e6651 = _0x102473.Hud,
    _0x3e7431 = _0x102473.Utils,
    _0x48de7b = _0x102473.Zones,
    _0x319555 = _0x102473.Events,
    _0x315b4d = _0x102473.Streaming,
    _0x5982d9 = _0x102473.Procedures,
    _0xd6d65c = _0x102473.Interface,
    _0x42193c = null && _0x102473
  let _0x275199 = exports['np-config'].GetModuleConfig('main'),
    _0x5aa409 = null
  const _0x32e043 = new Map(),
    _0x5adf39 = GetCurrentResourceName()
  async function _0x3bdf90() {
    while (_0x5aa409 === null) {
      await new Promise((_0x143a2d) => setTimeout(_0x143a2d, 2000))
      _0x5aa409 = _0x266c7c()
    }
  }
  on('np-config:configLoaded', (_0x49298a, _0x2129d4) => {
    if (_0x49298a === 'main') {
      _0x275199 = _0x2129d4
    } else {
      _0x32e043.has(_0x49298a) && _0x32e043.set(_0x49298a, _0x2129d4)
    }
  })
  function _0x34a66d(_0x4bfab6) {
    return _0x275199[_0x4bfab6]
  }
  function _0x49e838(_0x522f3c, _0x2d928b) {
    if (!_0x32e043.has(_0x522f3c)) {
      const _0x14fe86 = exports['np-config'].GetModuleConfig(_0x522f3c)
      if (_0x14fe86 === undefined) {
        return
      }
      _0x32e043.set(_0x522f3c, _0x14fe86)
    }
    const _0x53fda8 = _0x32e043.get(_0x522f3c)
    return _0x2d928b
      ? _0x53fda8 === null || _0x53fda8 === void 0
        ? void 0
        : _0x53fda8[_0x2d928b]
      : _0x53fda8
  }
  function _0x266c7c(_0x572386) {
    return _0x49e838(_0x5adf39, _0x572386)
  }
  const _0x5b075f = { timeToLive: 3600000 }
  const _0xa1591 = _0x3e7431.cache(async () => {
      const _0x3530d5 = await _0x5982d9.execute(
        'np-gangsystem:getGangsPedModels'
      )
      return [true, _0x3530d5]
    }, _0x5b075f),
    _0x295c0a = { timeToLive: 600000 }
  const _0x27b50b = _0x3e7431.cache(async () => {
      const _0x430012 = await _0x5982d9.execute('np-gangsystem:getCurrentGang')
      return [true, _0x430012]
    }, _0x295c0a),
    _0x546376 = { timeToLive: 300000 }
  const _0x3c3697 = _0x3e7431.cache(async () => {
      const _0x31b656 = await _0x5982d9.execute('np-gangsystem:getGanginfo')
      return [true, _0x31b656]
    }, _0x546376),
    _0x33f4e7 = { timeToLive: 300000 }
  const _0x33c1b2 = _0x3e7431.cache(async () => {
      const _0x535383 = await _0x27b50b.get()
      if (!_0x535383) {
        return [false, null]
      }
      const _0x4d934c = await _0x5982d9.execute(
        'np-gangsystem:getGangFlagLocation',
        _0x535383
      )
      return [true, _0x4d934c]
    }, _0x33f4e7),
    _0x4f4209 = () => {
      _0x27b50b.reset()
      _0x33c1b2.reset()
      _0x3c3697.reset()
    },
    _0x5124bc = async () => await _0x27b50b.get(),
    _0x442e4a = async () => await _0x33c1b2.get(),
    _0xe035bf = async () => await _0x3c3697.get(),
    _0xb3ba61 = async () => await _0xa1591.get()
  const _0x52e14d = globalThis,
    _0x15231f = (_0x217df2) =>
      new Promise((_0x176bc0) => setTimeout(() => _0x176bc0(), _0x217df2)),
    _0x1886df = (_0x4c5bc4, _0xf383eb) => {
      const [_0x26c8a7, _0x481d63, _0x1002f8] = [
        _0x4c5bc4.x - _0xf383eb.x,
        _0x4c5bc4.y - _0xf383eb.y,
        _0x4c5bc4.z - _0xf383eb.z,
      ]
      return Math.sqrt(
        _0x26c8a7 * _0x26c8a7 + _0x481d63 * _0x481d63 + _0x1002f8 * _0x1002f8
      )
    },
    _0x3a9aa7 = (_0x56f19f, _0xfc63d7) => {
      return _0x56f19f
        .sort(
          (_0x42af88, _0x448acd) =>
            _0x1886df(_0xfc63d7, {
              x: _0x42af88.x,
              y: _0x42af88.y,
              z: _0x42af88.z,
            }) -
            _0x1886df(_0xfc63d7, {
              x: _0x448acd.x,
              y: _0x448acd.y,
              z: _0x448acd.z,
            })
        )
        .map((_0x1c385b) =>
          _0x1886df(_0xfc63d7, {
            x: _0x1c385b.x,
            y: _0x1c385b.y,
            z: _0x1c385b.z,
          })
        )
    }
  function _0x2fcfe4(_0x23831e, _0xb06295) {
    return Math.floor(
      _0xb06295
        ? Math.random() * (_0xb06295 - _0x23831e) + _0x23831e
        : Math.random() * _0x23831e
    )
  }
  const _0x17792c = (_0x3dc4cc, _0x395b99) => {
      return _0x3dc4cc.slice(0, _0x395b99).map(function () {
        return this.splice(Math.floor(Math.random() * this.length), 1)[0]
      }, _0x3dc4cc.slice())
    },
    _0x3bab35 = (_0x457066) => {
      let _0x1a4bfe = 0,
        _0x4d0e21 = 0
      const _0xd51554 = GetResourceConfig('progressions')
      for (const _0x1fc362 of _0xd51554) {
        _0x457066 >= _0x1fc362.requiredGraffitis &&
          ((_0x1a4bfe = _0x1fc362.inventorySlots),
          (_0x4d0e21 = _0x1fc362.inventoryWeight))
      }
      return [_0x1a4bfe, _0x4d0e21]
    },
    _0x96782d = (_0xec997f) => {
      for (let _0x280536 = _0xec997f.length - 1; _0x280536 > 0; _0x280536--) {
        const _0x3f9026 = Math.floor(Math.random() * (_0x280536 + 1))
        ;[_0xec997f[_0x280536], _0xec997f[_0x3f9026]] = [
          _0xec997f[_0x3f9026],
          _0xec997f[_0x280536],
        ]
      }
      return _0xec997f
    }
  function _0x18eefd(_0x3122fb, _0x40bdd9, _0x1dedc0 = false) {
    return new Promise((_0x1df4d3) => {
      _0x40bdd9
        ? exports['np-taskbar'].taskBar(
            _0x3122fb,
            _0x40bdd9,
            _0x1dedc0,
            true,
            null,
            false,
            _0x1df4d3
          )
        : setTimeout(() => _0x1df4d3(100), _0x3122fb)
    })
  }
  function _0x1a032a(_0x1aa77e, _0x109085, _0x56ee03) {
    return new Promise((_0x326d5b) => {
      exports['np-phone'].DoPhoneConfirmation(
        _0x1aa77e,
        _0x109085,
        _0x56ee03,
        _0x326d5b
      )
    })
  }
  let _0x50eeb6 = []
  setImmediate(() => {
    _0x50eeb6 = _0x1c0a1a.g.exports['np-doors'].GetDoorLocations()
  })
  on('np-inventory:itemUsed', (_0x21be69, _0x41d2d2) => {
    if (_0x21be69 !== 'gangflag') {
      return
    }
    if (_0x90385b()) {
      return emit('DoLongHudText', 'You cannot place a flag here', 2)
    }
    const _0x1724ef = JSON.parse(_0x41d2d2)
    _0x4e31b1(
      _0x1724ef.gangId,
      _0x1724ef === null || _0x1724ef === void 0 ? void 0 : _0x1724ef.upgraded
    )
  })
  const _0x4e31b1 = async (_0x167c93, _0xba3669 = false) => {
      if (!_0x167c93) {
        return emit('DoLongHudText', 'Unknown flag', 2)
      }
      const _0x5065e7 = {
        collision: false,
        groundSnap: false,
        adjustZ: false,
        distance: 3,
        alignToSurface: true,
        surfaceOffset: 0.1,
      }
      const _0x5111d4 = await _0x1c0a1a.g.exports[
        'np-objects'
      ].PlaceAndSaveObject(
        _0xba3669
          ? GetHashKey('np_gangflag_' + _0x167c93)
          : GetHashKey('np_gangflag'),
        { gangId: _0x167c93 },
        _0x5065e7,
        _0x364d0f,
        'gang-flags'
      )
      if (!_0x5111d4) {
        return emit('DoLongHudText', 'Failed to place down flag', 2)
      }
      const [_0x3cfa03, _0x273493] = await _0x5982d9.execute(
        'np-gangs:addFlag',
        _0x5111d4,
        _0x167c93,
        _0xba3669
      )
      emit('DoLongHudText', _0x273493, _0x3cfa03 ? 1 : 2)
      if (!_0x3cfa03) {
        globalThis.exports['np-objects'].DeleteObject(_0x5111d4)
      }
      emit('inventory:removeItem', 'gangflag', 1)
    },
    _0x4fd690 = (_0x102096) =>
      _0x50eeb6.some(
        (_0x1ca4e1) =>
          _0x1ca4e1.reduce(
            (_0x2b9ab5, _0x48f1ca, _0x1d071b) =>
              (_0x2b9ab5 += (_0x48f1ca - _0x102096[_0x1d071b]) ** 2),
            0
          ) <= 16
      ),
    _0x364d0f = (_0x53e573, _0x463f0e, _0x1f9171, _0x1ce7f2) => {
      if (GetEntityType(_0x1ce7f2) !== 0) {
        return false
      }
      if (_0x1c0a1a.g.exports['np-doors'].GetCurrentDoor() !== undefined) {
        return false
      }
      const _0xb3846c = GetEntityModel(_0x1f9171),
        [[_0xdbd109, , _0xb9b8ef], [_0xb36652, _0x4d5a25, _0x26dc9b]] =
          GetModelDimensions(_0xb3846c),
        _0x54b9f2 = GetEntityForwardVector(_0x1f9171).map(
          (_0x29704e) => _0x29704e * 0.2
        )
      return (
        [
          GetOffsetFromEntityInWorldCoords(
            _0x1f9171,
            _0xdbd109 * 0.8,
            _0x4d5a25,
            _0xb9b8ef * 0.8
          ),
          GetOffsetFromEntityInWorldCoords(
            _0x1f9171,
            _0xb36652 * 0.8,
            _0x4d5a25,
            _0xb9b8ef * 0.8
          ),
          GetOffsetFromEntityInWorldCoords(
            _0x1f9171,
            _0xdbd109 * 0.8,
            _0x4d5a25,
            _0x26dc9b * 0.8
          ),
          GetOffsetFromEntityInWorldCoords(
            _0x1f9171,
            _0xb36652 * 0.8,
            _0x4d5a25,
            _0x26dc9b * 0.8
          ),
        ].every((_0x22fb4f) => {
          const _0x346ae7 = StartShapeTestCapsule(
              ..._0x22fb4f,
              _0x22fb4f[0] + _0x54b9f2[0],
              _0x22fb4f[1] + _0x54b9f2[1],
              _0x22fb4f[2] + _0x54b9f2[2],
              0.02,
              -1,
              _0x1f9171,
              7
            ),
            [, _0xc41b9f, , , _0x52ecc1] = GetShapeTestResult(_0x346ae7),
            _0xbd2c60 = GetEntityType(_0x52ecc1)
          return _0xc41b9f && _0xbd2c60 === 0
        }) && !_0x4fd690([_0x53e573.x, _0x53e573.y, _0x53e573.z])
      )
    },
    _0x320dd3 = async (_0x469f98, _0x31e0bb) => {
      var _0x1b6200, _0x2cdf86, _0x3accfe, _0x509bc6
      const _0x31397a =
        (_0x3accfe =
          (_0x2cdf86 =
            (_0x1b6200 = _0x31e0bb.meta) === null || _0x1b6200 === void 0
              ? void 0
              : _0x1b6200.data) === null || _0x2cdf86 === void 0
            ? void 0
            : _0x2cdf86.metadata) === null || _0x3accfe === void 0
          ? void 0
          : _0x3accfe.gangId
      if (!_0x31397a) {
        return false
      }
      const _0x4fc70b =
        (_0x509bc6 = _0x31e0bb.meta) === null || _0x509bc6 === void 0
          ? void 0
          : _0x509bc6.id
      if (!_0x4fc70b) {
        return false
      }
      TaskTurnPedToFaceEntity(PlayerPedId(), _0x469f98, -1)
      emit('animation:PlayAnimation', 'hammering')
      const _0x17317e = await _0x18eefd(5000, 'Destroying gang flag', true)
      ClearPedTasks(PlayerPedId())
      if (_0x17317e !== 100) {
        return false
      }
      const _0x5b5a15 = await _0x1c0a1a.g.exports['np-objects'].DeleteObject(
        _0x4fc70b
      )
      if (_0x5b5a15) {
        _0x319555.emitNet('np-gangsystem:flagDestroyed', _0x31397a)
      }
    }
  _0x319555.onNet('np-gangsystem:doPedHandOff', async (_0x4ee094) => {
    const _0x3db5ba = GetGamePool('CPed').filter(
        (_0x168671) => !IsPedAPlayer(_0x168671)
      ),
      _0x49b79a = _0x3db5ba.filter(
        (_0xc1198f) =>
          GetEntityModel(_0xc1198f) === GetHashKey(_0x4ee094) &&
          !IsPedInAnyVehicle(_0xc1198f, false) &&
          !IsEntityDead(_0xc1198f)
      )
    if (_0x49b79a.length <= 0) {
      return
    }
    await _0x315b4d.loadAnim('mp_safehouselost@')
    const _0x4a85a5 = _0x49b79a[Math.floor(Math.random() * _0x49b79a.length)],
      _0x18e96d = GetEntityCoords(_0x4a85a5, true),
      _0x13b773 = {
        x: _0x18e96d[0],
        y: _0x18e96d[1],
        z: _0x18e96d[2],
      }
    const _0x287d89 = _0x13b773,
      _0x597c59 = _0x3db5ba.filter((_0xf5674f) => {
        const _0x566d47 = GetEntityCoords(_0xf5674f, true),
          _0x2e3643 = {
            x: _0x566d47[0],
            y: _0x566d47[1],
            z: _0x566d47[2],
          }
        const _0x1a62cb = _0x2e3643
        return (
          GetEntityModel(_0xf5674f) !== GetHashKey(_0x4ee094) &&
          _0x1886df(_0x1a62cb, _0x287d89) < 50 &&
          !IsPedInAnyVehicle(_0xf5674f, false)
        )
      }),
      _0x73ed28 = _0x597c59[Math.floor(Math.random() * _0x597c59.length)]
    if (!_0x73ed28) {
      return
    }
    NetworkRequestControlOfEntity(_0x73ed28)
    NetworkRequestControlOfEntity(_0x4a85a5)
    SetNetworkIdCanMigrate(NetworkGetNetworkIdFromEntity(_0x73ed28), false)
    SetNetworkIdCanMigrate(NetworkGetNetworkIdFromEntity(_0x4a85a5), false)
    TaskStartScenarioInPlace(_0x4a85a5, 'WORLD_HUMAN_DRUG_DEALER_HARD', 0, true)
    let _0x43fd70 = false
    const _0x580c88 = Date.now() + 120000
    while (!_0x43fd70) {
      if (
        Date.now() > _0x580c88 ||
        IsEntityDead(_0x4a85a5) ||
        IsEntityDead(_0x73ed28)
      ) {
        _0x43fd70 = true
        return
      }
      const _0x5d158b = GetEntityCoords(_0x73ed28, true),
        _0x27c8c2 = {
          x: _0x5d158b[0],
          y: _0x5d158b[1],
          z: _0x5d158b[2],
        }
      const _0x54222f = _0x27c8c2,
        _0x3b45ea = _0x1886df(_0x287d89, _0x54222f)
      if (_0x3b45ea <= 2) {
        ClearPedTasksImmediately(_0x4a85a5)
        await _0x15231f(500)
        TaskTurnPedToFaceEntity(_0x73ed28, _0x4a85a5, -1)
        TaskTurnPedToFaceEntity(_0x4a85a5, _0x73ed28, -1)
        await _0x15231f(1000)
        TaskPlayAnim(
          _0x73ed28,
          'mp_safehouselost@',
          'package_dropoff',
          8,
          -8,
          -1,
          0,
          0,
          false,
          false,
          false
        )
        TaskPlayAnim(
          _0x4a85a5,
          'mp_safehouselost@',
          'package_dropoff',
          8,
          -8,
          -1,
          0,
          0,
          false,
          false,
          false
        )
        _0x43fd70 = true
        return
      }
      GetScriptTaskStatus(_0x73ed28, 1227113341) === 7 &&
        !_0x43fd70 &&
        TaskGoToEntity(_0x73ed28, _0x4a85a5, -1, 2, 1, 0, 0)
      await _0x15231f(500)
    }
  })
  const _0x358f76 = new Set()
  function _0x58a668(_0x374252) {
    return _0x358f76.has(_0x374252)
  }
  on('np-polyzone:enter', (_0x580fff) => {
    _0x358f76.add(_0x580fff)
  })
  on('np-polyzone:exit', (_0x2b52fa) => {
    _0x358f76.delete(_0x2b52fa)
  })
  let _0x3bd6f1 = null,
    _0x3bbc29 = [],
    _0x44b76b = []
  const _0x352abd = async (_0x124974, _0x5dacda) => {
      if (!_0x124974 || !_0x5dacda) {
        return [false, 'Where did I find this spray can...']
      }
      if (_0x90385b()) {
        return [false, 'You cannot place graffiti here']
      }
      const _0xa1e70e = await _0x5124bc()
      if (!_0xa1e70e) {
        return [false, 'You are not in a gang!']
      }
      if (_0xa1e70e !== _0x124974) {
        return [false, 'You are not in this gang!']
      }
      const _0x2bf508 = GetEntityCoords(PlayerPedId(), false),
        _0x749dda = {
          x: _0x2bf508[0],
          y: _0x2bf508[1],
          z: _0x2bf508[2],
        }
      const _0x4e5d5a = _0x749dda,
        _0x5cf2f1 = exports['np-objects'].GetObjectsByNamespace('graffiti'),
        _0x16aa9f = exports['np-objects']
          .GetObjectsByNamespace('gang-flags')
          .sort(
            (_0x13102a, _0x1ede6d) =>
              _0x1886df(_0x4e5d5a, {
                x: _0x13102a.x,
                y: _0x13102a.y,
                z: _0x13102a.z,
              }) -
              _0x1886df(_0x4e5d5a, {
                x: _0x1ede6d.x,
                y: _0x1ede6d.y,
                z: _0x1ede6d.z,
              })
          )
          .filter(
            (_0x189691) =>
              _0x1886df(_0x4e5d5a, {
                x: _0x189691.x,
                y: _0x189691.y,
                z: _0x189691.z,
              }) < _0x5aa409.minDistanceFromFlag
          ),
        _0x1e4012 = _0x5cf2f1.filter(
          (_0x39255f) =>
            _0x39255f.data.metadata.gangId &&
            _0x39255f.data.metadata.gangId === _0x124974
        ),
        _0x4c2721 = _0x5cf2f1.filter(
          (_0x58f57a) =>
            _0x58f57a.data.metadata.gangId &&
            _0x58f57a.data.metadata.gangId !== _0x124974
        ),
        _0x6dd8cf = _0x16aa9f.find(
          (_0x15d8cd) => _0x15d8cd.data.metadata.gangId !== _0xa1e70e
        ),
        _0x2cfd01 =
          _0x3a9aa7(_0x4c2721, _0x4e5d5a).filter(
            (_0x25ffe4) => _0x25ffe4 < _0x5aa409.minDistanceFromEnemy
          ).length > 0
      if (_0x2cfd01 || _0x6dd8cf) {
        return [false, 'You are too close to an enemy territory!']
      }
      const _0x195f64 =
        _0x3a9aa7(_0x1e4012, _0x4e5d5a).filter(
          (_0x1fe003) => _0x1fe003 < _0x5aa409.minDistanceFromFriendly
        ).length > 0
      if (_0x195f64) {
        return [false, 'Need to spread out more!']
      }
      const _0x4c929e =
          _0x3a9aa7(_0x1e4012, _0x4e5d5a).filter(
            (_0x3ec72f) => _0x3ec72f < _0x5aa409.maxDistanceFromFriendly
          ).length === 0,
        _0x4b926a = _0x16aa9f.find(
          (_0x4374b0) => _0x4374b0.data.metadata.gangId === _0xa1e70e
        )
      if (_0x4c929e && !_0x4b926a) {
        return [false, 'You are too far from a friendly territory!']
      }
      if (_0x4b926a || !_0x4c929e) {
        return [true, '']
      }
      return [true, '']
    },
    _0x5af286 = (_0x4578f7) => {
      const _0x261d19 = _0x1c0a1a.g.exports['np-objects']
        .GetObjectsByNamespace('graffiti')
        .filter(
          (_0x4aa8fe) =>
            _0x4aa8fe.data.metadata.gangId &&
            _0x1886df(_0x4578f7, {
              x: _0x4aa8fe.x,
              y: _0x4aa8fe.y,
              z: _0x4aa8fe.z,
            }) < 100
        )
        .sort(
          (_0x53a1c3, _0x33b6be) =>
            _0x1886df(_0x4578f7, {
              x: _0x53a1c3.x,
              y: _0x53a1c3.y,
              z: _0x53a1c3.z,
            }) -
            _0x1886df(_0x4578f7, {
              x: _0x33b6be.x,
              y: _0x33b6be.y,
              z: _0x33b6be.z,
            })
        )
      return _0x261d19.length > 0 ? _0x261d19[0].data.metadata.gangId : null
    },
    _0x76b0a = async (_0x546ae5) => {
      const _0x6ae5a = await _0x5124bc()
      if (_0x6ae5a === _0x546ae5) {
        return
      }
      const _0x4cd64e = GetEntityCoords(PlayerPedId(), true),
        _0x3693e0 = {
          x: _0x4cd64e[0],
          y: _0x4cd64e[1],
          z: _0x4cd64e[2],
        }
      const _0x3894bb = _0x3693e0,
        _0x2a6a6e = GetLabelText(
          GetNameOfZone(_0x3894bb.x, _0x3894bb.y, _0x3894bb.z)
        ),
        [_0x13978f, _0x2953c2] = GetStreetNameAtCoord(
          _0x3894bb.x,
          _0x3894bb.y,
          _0x3894bb.z
        ),
        _0x347d7c = GetStreetNameFromHashKey(_0x13978f) + ', ' + _0x2a6a6e
      _0x319555.emitNet(
        'np-gangsystem:graffitiBeingRemoved',
        _0x546ae5,
        _0x347d7c
      )
    },
    _0x2cb816 = async (_0x118e74) => {
      const _0x30747f = await _0x5124bc()
      if (!_0x30747f) {
        return
      }
      const _0x1a3f10 = PlayerPedId(),
        _0x2c91c5 = await _0x5982d9.execute(
          'np-gangsystem:openTrapInventory',
          _0x30747f
        )
      if (!_0x2c91c5) {
        return
      }
      _0x3bd6f1 = _0x118e74
      SetEntityAsMissionEntity(_0x118e74, true, true)
      SetNetworkIdCanMigrate(_0x118e74, false)
      ClearPedTasks(_0x118e74)
      TaskLookAtEntity(_0x118e74, _0x1a3f10, -1, 2048, 3)
      TaskTurnPedToFaceEntity(_0x118e74, _0x1a3f10, 10000)
    },
    _0x3263da = async () => {
      await _0x315b4d.loadAnim('mp_safehouselost@')
      TaskTurnPedToFaceEntity(_0x3bd6f1, PlayerPedId(), 0)
      TaskTurnPedToFaceEntity(PlayerPedId(), _0x3bd6f1, 0)
      TaskPlayAnim(
        _0x3bd6f1,
        'mp_safehouselost@',
        'package_dropoff',
        8,
        -8,
        -1,
        0,
        0,
        false,
        false,
        false
      )
      TaskPlayAnim(
        PlayerPedId(),
        'mp_safehouselost@',
        'package_dropoff',
        8,
        -8,
        -1,
        0,
        0,
        false,
        false,
        false
      )
      await _0x15231f(2000)
      SetEntityAsNoLongerNeeded(_0x3bd6f1)
      _0x3bd6f1 = null
    },
    _0x30eefe = async () => {
      const _0x478f36 = await _0x5124bc()
      if (!_0x478f36) {
        return emit('DoLongHudText', 'Looks at you confused...')
      }
      const _0x35fba0 = await _0x5982d9.execute(
          'np-gangsystem:getCostOfSpray',
          _0x478f36
        ),
        _0x423a98 = {
          icon: 'money-bill',
          title: 'Purchase Spray ($' + _0x35fba0 + ')',
          description: '',
          action: 'np-gangsystem:confirmPurchaseSpray',
          key: {},
        }
      _0x423a98.key.gangId = _0x478f36
      _0x423a98.key.cost = _0x35fba0
      const _0x3e4e1f = [_0x423a98]
      _0x1c0a1a.g.exports['np-ui'].showContextMenu(_0x3e4e1f)
    },
    _0x5cc3a5 = async () => {
      const _0xe70e09 = await _0x5124bc()
      if (!_0xe70e09) {
        return emit('DoLongHudText', 'Looks at you confused...')
      }
      const _0x11307d = await _0x5982d9.execute(
          'np-gangsystem:getCostOfSpray',
          _0xe70e09
        ),
        _0x39a590 = _0x11307d + 100000,
        _0x15f500 = {
          icon: 'money-bill',
          title: 'Purchase Cloth ($' + _0x39a590 + ')',
          description: '',
          action: 'np-gangsystem:confirmPurchaseCloth',
          key: {},
        }
      _0x15f500.key.gangId = _0xe70e09
      _0x15f500.key.cost = _0x39a590
      const _0x59e0d9 = [_0x15f500]
      _0x1c0a1a.g.exports['np-ui'].showContextMenu(_0x59e0d9)
    },
    _0x90385b = () => {
      const _0xbde568 = _0x58a668('np-gangsystem:blockedZone')
      return _0xbde568
    },
    _0x29ca6f = async (_0x3f7e41) => {
      var _0x233be6, _0x29c2f5
      const _0x4fa8ea = _0x3f7e41.meta.id,
        _0x3ddd93 =
          (_0x29c2f5 =
            (_0x233be6 = _0x3f7e41.meta.data) === null || _0x233be6 === void 0
              ? void 0
              : _0x233be6.metadata) === null || _0x29c2f5 === void 0
            ? void 0
            : _0x29c2f5.gangId
      if (!_0x4fa8ea) {
        return
      }
      const _0x3665b9 = await _0x5124bc()
      if (_0x3665b9 !== _0x3ddd93) {
        return
      }
      const _0x25149b = { upForGrabs: true }
      exports['np-objects'].UpdateObject(_0x4fa8ea, _0x25149b)
    },
    _0x38b5b6 = async (_0x496e88) => {
      var _0x4a26ae, _0x25e396, _0x44ec9c, _0x14314a, _0x44c45c
      const _0x103c39 = _0x496e88.meta.id,
        _0x4b4512 =
          (_0x25e396 =
            (_0x4a26ae =
              _0x496e88 === null || _0x496e88 === void 0
                ? void 0
                : _0x496e88.meta) === null || _0x4a26ae === void 0
              ? void 0
              : _0x4a26ae.data) === null || _0x25e396 === void 0
            ? void 0
            : _0x25e396.metadata.gangId,
        _0x58136e =
          (_0x44c45c =
            (_0x14314a =
              (_0x44ec9c =
                _0x496e88 === null || _0x496e88 === void 0
                  ? void 0
                  : _0x496e88.meta) === null || _0x44ec9c === void 0
                ? void 0
                : _0x44ec9c.data) === null || _0x14314a === void 0
              ? void 0
              : _0x14314a.metadata.gangsDiscovered) !== null &&
          _0x44c45c !== void 0
            ? _0x44c45c
            : [],
        _0x4ec656 = await _0x5124bc()
      if (
        _0x4b4512 === _0x4ec656 ||
        (_0x58136e && _0x58136e.includes(_0x4ec656))
      ) {
        const _0x28daae = {}
        return (
          (_0x28daae.i18n = ['You already know of this graffiti!']),
          emit(
            'DoLongHudText',
            'You already know of this graffiti!',
            1,
            12000,
            _0x28daae
          )
        )
      }
      emit('animation:PlayAnimation', 'search')
      const _0x53846c = await _0xd6d65c.taskBar(
        30000,
        'Discovering Graffiti',
        true,
        {
          distance: 2,
          entity: PlayerPedId(),
        }
      )
      ClearPedTasks(PlayerPedId())
      if (_0x53846c !== 100) {
        return
      }
      const _0x15328c = {
        gangsDiscovered: [..._0x58136e, _0x4ec656],
      }
      exports['np-objects'].UpdateObject(_0x103c39, _0x15328c)
      const _0x56de3a = {}
      return (
        (_0x56de3a.i18n = ['Discovered graffiti!']),
        emit('DoLongHudText', 'Discovered graffiti!', 1, 12000, _0x56de3a)
      )
    },
    _0x2b419e = async (_0xbf6dc4 = false) => {
      if (_0x3bbc29.length > 0) {
        for (const _0x2dcc28 of _0x3bbc29) {
          RemoveBlip(_0x2dcc28)
        }
        _0x3bbc29 = []
        const _0x8c0c76 = {}
        return (
          (_0x8c0c76.i18n = ['Removed all blips']),
          emit('DoLongHudText', 'Removed all blips', 1, 12000, _0x8c0c76)
        )
      }
      const _0x14e015 = await _0x5982d9.execute(
        'np-gangsystem:getFoundGraffiti',
        _0xbf6dc4
      )
      for (const _0xcf679b of _0x14e015) {
        const _0x3b1378 = AddBlipForRadius(
          _0xcf679b.coords.x,
          _0xcf679b.coords.y,
          _0xcf679b.coords.z,
          100
        )
        SetBlipAlpha(_0x3b1378, 100)
        SetBlipSprite(_0x3b1378, 9)
        SetBlipColour(_0x3b1378, _0xcf679b.color)
        _0x3bbc29.push(_0x3b1378)
      }
      if (_0x14e015.length > 0) {
        const _0x3ed32d = {}
        return (
          (_0x3ed32d.i18n = ['Discovered graffitis marked']),
          emit(
            'DoLongHudText',
            'Discovered graffitis marked',
            1,
            12000,
            _0x3ed32d
          )
        )
      }
    },
    _0x4d15a1 = async () => {
      const _0x3ed3a3 = await _0x5124bc()
      if (!_0x3ed3a3) {
        return
      }
      const _0x375c0c = await _0x5982d9.execute(
          'np-gangsystem:getCollectHistory',
          _0x3ed3a3
        ),
        _0xdd0aeb = _0x375c0c.map((_0x35155c) => {
          const _0x40677a = {}
          return (
            (_0x40677a.icon = 'info-circle'),
            (_0x40677a.title = '' + _0x35155c.log),
            (_0x40677a.description = '' + _0x35155c.date),
            (_0x40677a.action = ''),
            (_0x40677a.key = {}),
            _0x40677a
          )
        })
      if (_0xdd0aeb.length === 0) {
        const _0xfb0e06 = {
          icon: 'info-circle',
          title: 'No profit has been collected yet',
          description: '',
          action: '',
          key: {},
        }
        _0xdd0aeb.push(_0xfb0e06)
      }
      _0x1c0a1a.g.exports['np-ui'].showContextMenu(_0xdd0aeb)
      return
    },
    _0x2e85e8 = async () => {
      if (_0x44b76b.length > 0) {
        for (const _0x17a3b3 of _0x44b76b) {
          RemoveBlip(_0x17a3b3)
        }
        _0x44b76b = []
        const _0x5b9a42 = {}
        return (
          (_0x5b9a42.i18n = ['Removed all blips']),
          emit('DoLongHudText', 'Removed all blips', 1, 12000, _0x5b9a42)
        )
      }
      const _0x5dcdae = await _0x5124bc()
      if (!_0x5dcdae) {
        return
      }
      const _0x57b620 = await _0x5982d9.execute(
        'np-gangsystem:getContestedGraffiti',
        _0x5dcdae
      )
      for (const _0x247314 of _0x57b620) {
        const _0x59ac7f = AddBlipForRadius(
          _0x247314.coords.x,
          _0x247314.coords.y,
          _0x247314.coords.z,
          100
        )
        SetBlipAlpha(_0x59ac7f, 100)
        SetBlipSprite(_0x59ac7f, 9)
        SetBlipColour(_0x59ac7f, _0x247314.color)
        _0x44b76b.push(_0x59ac7f)
      }
      if (_0x57b620.length > 0) {
        const _0x17ed9d = {}
        return (
          (_0x17ed9d.i18n = ['Contested graffitis marked']),
          emit(
            'DoLongHudText',
            'Contested graffitis marked',
            1,
            12000,
            _0x17ed9d
          )
        )
      } else {
        const _0xa9263f = {}
        return (
          (_0xa9263f.i18n = ['No contested graffitis found']),
          emit(
            'DoLongHudText',
            'No contested graffitis found',
            1,
            12000,
            _0xa9263f
          )
        )
      }
    }
  const _0x22c438 = [],
    _0x28090e = { timeToLive: 600000 }
  const _0x18ba6c = _0x3e7431.cache(async (_0x3c0a95, _0x33d3de) => {
      const _0x5dbefc = await _0x5982d9.execute(
        'np-gangsystem:getGangNPCWeapon',
        _0x33d3de
      )
      return [true, _0x5dbefc]
    }, _0x28090e),
    _0x14c0d2 = async () => {
      const _0x36a54f = await _0xb3ba61()
      for (const _0x1edca7 in _0x36a54f) {
        _0x22c438.push({
          gangId: _0x1edca7,
          model: GetHashKey(_0x36a54f[_0x1edca7]),
        })
      }
    },
    _0x4ebbf6 = async (_0x49c20f, _0x559ee0) => {
      SetCanAttackFriendly(_0x49c20f, true, false)
      SetPedAlertness(_0x49c20f, 3)
      SetPedConfigFlag(_0x49c20f, 100, true)
      SetPedCombatRange(_0x49c20f, 1)
      SetPedSeeingRange(_0x49c20f, 100)
      SetPedHearingRange(_0x49c20f, 1000)
      SetPedDiesWhenInjured(_0x49c20f, false)
      SetPedEnableWeaponBlocking(_0x49c20f, true)
      SetPedSuffersCriticalHits(_0x49c20f, false)
      SetPedAccuracy(_0x49c20f, 90)
      SetPedCombatAbility(_0x49c20f, 2)
      SetPedCombatMovement(_0x49c20f, 3)
      SetPedCombatAttributes(_0x49c20f, 5, true)
      SetPedCombatAttributes(_0x49c20f, 16, true)
      SetPedCombatAttributes(_0x49c20f, 17, false)
      SetPedCombatAttributes(_0x49c20f, 46, true)
      SetPedCombatAttributes(_0x49c20f, 1424, false)
      SetPedFleeAttributes(_0x49c20f, 0, false)
      TaskWanderStandard(_0x49c20f, 1, 10)
      RegisterHatedTargetsAroundPed(_0x49c20f, 500)
      TaskCombatHatedTargetsAroundPed(_0x49c20f, 500, 0)
      SetPedKeepTask(_0x49c20f, true)
      SetBlockingOfNonTemporaryEvents(_0x49c20f, true)
      const _0x1445ca = await _0x18ba6c.get(_0x559ee0)
      GiveWeaponToPed(
        _0x49c20f,
        _0x1445ca !== null && _0x1445ca !== void 0 ? _0x1445ca : -1024456158,
        1000,
        false,
        true
      )
      SetPedDropsWeaponsWhenDead(_0x49c20f, false)
    },
    _0x4145d9 = (_0x5cbb7f) => {
      const _0x456b44 = GetEntityModel(_0x5cbb7f),
        _0x2e0dee = _0x22c438.find((_0x23c11d) => _0x23c11d.model === _0x456b44)
      return _0x2e0dee
    },
    _0x2b0473 = (_0x55441a, _0x54453f) => {
      const _0x25d5f2 = GetHashKey('PLAYER'),
        _0x2d69b4 = GetHashKey('GANG_' + _0x54453f)
      if (!DoesRelationshipGroupExist(_0x2d69b4)) {
        AddRelationshipGroup('GANG_' + _0x54453f)
      }
      SetRelationshipBetweenGroups(_0x55441a, _0x25d5f2, _0x2d69b4)
      SetRelationshipBetweenGroups(_0x55441a, _0x2d69b4, _0x25d5f2)
    }
  class _0x422d19 {
    constructor(_0x493ee1, _0x286cfe, _0x1de956 = 'interval') {
      this.callback = _0x493ee1
      this.delay = _0x286cfe
      this.mode = _0x1de956
      this.scheduled = {}
      this.tick = 0
      this.data = {}
      this.hooks = new Map([
        ['active', []],
        ['preStop', []],
        ['preStart', []],
        ['afterStop', []],
        ['afterStart', []],
        ['stopAborted', []],
        ['startAborted', []],
      ])
    }
    get ['isActive']() {
      return this.active
    }
    async ['start']() {
      if (this.active) {
        return
      }
      this.aborted = false
      this.scheduled = {}
      const _0x3a1911 = this.hooks.get('preStart')
      try {
        for (const _0x5632a7 of _0x3a1911) {
          if (!this.aborted) {
            await _0x5632a7.call(this)
          }
        }
      } catch (_0x2175c8) {
        this.aborted = true
        console.log('Error while calling pre-start hook', _0x2175c8.message)
      }
      if (this.aborted) {
        try {
          const _0x230085 = this.hooks.get('startAborted')
          for (const _0x41ac61 of _0x230085) {
            await _0x41ac61.call(this)
          }
        } catch (_0x1506b9) {
          console.log(
            'Error while calling start-aborted hook',
            _0x1506b9.message
          )
        }
        return
      }
      this.active = true
      const _0x162384 = this.hooks.get('active')
      switch (this.mode) {
        case 'tick': {
          this.threadId = _0x52e14d.setTick(async () => {
            this.tick += 1
            try {
              await this.callback.call(this)
              for (const _0x539495 of _0x162384) {
                await _0x539495.call(this)
              }
            } catch (_0x5762ff) {
              console.log('Error while calling active hook', _0x5762ff.message)
            }
            this.delay > 0 &&
              (await new Promise((_0x12cf1e) =>
                _0x52e14d.setTimeout(_0x12cf1e, this.delay)
              ))
          })
          break
        }
        case 'interval': {
          this.threadId = _0x52e14d.setInterval(async () => {
            this.tick += 1
            try {
              await this.callback.call(this)
              for (const _0x25de08 of _0x162384) {
                await _0x25de08.call(this)
              }
            } catch (_0x3c001f) {
              console.log('Error while calling active hook', _0x3c001f.message)
            }
          }, this.delay)
          break
        }
        case 'timeout': {
          const _0x5c6391 = () => {
            this.active &&
              (this.threadId = _0x52e14d.setTimeout(async () => {
                this.tick += 1
                try {
                  await this.callback.call(this)
                  for (const _0x1967a6 of _0x162384) {
                    await _0x1967a6.call(this)
                  }
                } catch (_0x49a987) {
                  console.log(
                    'Error while calling active hook',
                    _0x49a987.message
                  )
                }
                return _0x5c6391()
              }, this.delay))
          }
          _0x5c6391()
          break
        }
      }
      const _0x330fae = this.hooks.get('afterStart')
      try {
        for (const _0x3a60f2 of _0x330fae) {
          await _0x3a60f2.call(this)
        }
      } catch (_0x32b73d) {
        console.log('Error while calling after-start hook', _0x32b73d.message)
      }
    }
    async ['stop']() {
      if (!this.active) {
        return
      }
      const _0x8fafb4 = this.hooks.get('preStop')
      try {
        for (const _0x368c44 of _0x8fafb4) {
          if (!this.aborted) {
            await _0x368c44.call(this)
          }
        }
      } catch (_0x12937f) {
        this.aborted = true
        console.log('Error while calling pre-stop hook', _0x12937f.message)
      }
      this.active = false
      switch (this.mode) {
        case 'tick': {
          _0x52e14d.clearTick(this.threadId)
          break
        }
        case 'interval': {
          _0x52e14d.clearInterval(this.threadId)
          break
        }
        case 'timeout': {
          _0x52e14d.clearTimeout(this.threadId)
          break
        }
      }
      if (this.aborted) {
        try {
          const _0x3a650f = this.hooks.get('stopAborted')
          for (const _0x1e0aff of _0x3a650f) {
            await _0x1e0aff.call(this)
          }
        } catch (_0x5c38de) {
          console.log(
            'Error while calling stop-aborted hook',
            _0x5c38de.message
          )
        }
        return
      }
      const _0x48a87d = this.hooks.get('afterStop')
      try {
        for (const _0x405cbc of _0x48a87d) {
          await _0x405cbc.call(this)
        }
      } catch (_0x579f58) {
        console.log('Error while calling after-stop hook', _0x579f58.message)
      }
    }
    ['abort']() {
      this.aborted = true
    }
    ['addHook'](_0x282b4e, _0x8cea8c) {
      var _0x126fcc
      ;(_0x126fcc = this.hooks.get(_0x282b4e)) === null || _0x126fcc === void 0
        ? void 0
        : _0x126fcc.push(_0x8cea8c)
    }
    ['setNextTick'](_0xa7423c, _0x1ed533) {
      this.scheduled[_0xa7423c] = this.tick + _0x1ed533
    }
    ['canTick'](_0x54d98a) {
      return (
        this.scheduled[_0x54d98a] === undefined ||
        this.tick >= this.scheduled[_0x54d98a]
      )
    }
  }
  const _0x594dfe = new _0x422d19(function () {}, 1000)
  _0x594dfe.addHook('preStart', function () {})
  _0x594dfe.addHook('active', function () {
    if (!this.canTick('ped')) {
      return
    }
    this.setNextTick('ped', 5)
    this.data.playerId = PlayerId()
    this.data.playerPed = PlayerPedId()
  })
  const _0x535875 = new Set(),
    _0x36f417 = { _0x22da00: _0x4d855a[_0x22da00] },
    _0x29f7e7 = [
      -820634585, 2343591895, 1945849481, -2009644972, 727643628, 1834241177,
      1064738331, -691061592, 571920712,
    ]
  let _0x22b3d9 = [],
    _0x2ebe7f = false
  const _0x33e966 = async () => {
      await _0x15231f(10000)
      await _0x3605cd()
      await _0x1f53b3()
      await _0x14899d()
      await _0x5124bc()
      _0x594dfe.isActive ? await _0x594dfe.stop() : await _0x594dfe.start()
    },
    _0x3605cd = async () => {
      const _0x4d855a = await _0xb3ba61()
      for (const _0x22da00 in _0x4d855a) {
        if (!IsModelValid(_0x4d855a[_0x22da00])) {
          continue
        }
        try {
          await _0x315b4d.loadModel(_0x4d855a[_0x22da00])
          AddRelationshipGroup('GANG_' + _0x22da00)
        } catch (_0x3bfab5) {
          console.log('Failed to load model', _0x22da00)
        }
      }
    },
    _0x1f53b3 = () => {
      console.log('[GangSystem] Initializing ped creation event')
      _0x22b3d9.length === 0 &&
        (console.log('[GangSystem] Loading blocked models'),
        (_0x22b3d9 = [
          ..._0x5aa409.blockedModels.map((_0x3140f8) => GetHashKey(_0x3140f8)),
        ]))
      on(
        'populationPedCreating',
        (_0x2ae18d, _0x69e7b8, _0x3ac738, _0x5eb0b6, _0x55992d) => {
          if (
            !_0x36f417 ||
            Math.random() <= 0.5 ||
            _0x22b3d9.includes(_0x5eb0b6 & 4294967295)
          ) {
            return
          }
          const _0x3737e8 = {
            x: _0x2ae18d,
            y: _0x69e7b8,
            z: _0x3ac738,
          }
          const _0xc23232 = _0x5af286(_0x3737e8)
          if (!_0xc23232 || !_0x36f417[_0xc23232]) {
            return
          }
          const _0x50d397 = GetGamePool('CPed')
            .map((_0x44dd08) => GetEntityModel(_0x44dd08))
            .filter(
              (_0x27ee38) => GetHashKey(_0x36f417[_0xc23232]) === _0x27ee38
            )
          if (_0x50d397.length >= 4) {
            return
          }
          _0x55992d.setModel(_0x36f417[_0xc23232])
        }
      )
    }
  let _0x41745c = 0
  const _0x14899d = () => {
      setInterval(async () => {
        const _0x2085bb = GetSelectedPedWeapon(PlayerPedId()),
          _0x24edbf = _0x29f7e7.includes(_0x2085bb)
        if (
          IsPedShooting(PlayerPedId()) &&
          GetGameTimer() > _0x41745c + 60000 &&
          !_0x24edbf
        ) {
          const [_0x2b9f3b, _0x1cd98c] = GetEntityPlayerIsFreeAimingAt(
            PlayerId()
          )
          if (_0x1cd98c === 0) {
            return
          }
          const _0x4dce1d = Entity(_0x1cd98c).state
          if (!_0x4dce1d.gangId) {
            return
          }
          _0x41745c = GetGameTimer()
          const _0xd86dbd = GetEntityCoords(PlayerPedId(), false),
            _0x8972dd = {
              x: _0xd86dbd[0],
              y: _0xd86dbd[1],
              z: _0xd86dbd[2],
            }
          const _0x55514a = _0x8972dd,
            _0x1688d8 = _0x5af286(_0x55514a),
            _0x52ff45 = await _0x5124bc()
          if (
            !_0x1688d8 ||
            _0x1688d8 === _0x52ff45 ||
            _0x1688d8 !== _0x4dce1d.gangId
          ) {
            return
          }
          const _0xe12019 = GetGamePool('CPed')
            .filter(
              (_0x51a24b) =>
                GetHashKey(_0x36f417[_0x1688d8]) ===
                  GetEntityModel(_0x51a24b) && !IsPedAPlayer(_0x51a24b)
            )
            .filter((_0xd8cbcb, _0x11bee1) => _0x11bee1 < 8)
          for (const _0x395f49 of _0xe12019) {
            ClearPedTasks(_0x395f49)
            NetworkRequestControlOfEntity(_0x395f49)
            await _0x4ebbf6(_0x395f49, _0x1688d8)
            SetPedKeepTask(_0x395f49, true)
            TaskCombatPed(_0x395f49, PlayerPedId(), 0, 16)
          }
        }
      }, 3)
    },
    _0x4e1278 = async (_0x59b80a) => {
      const _0x91df5d = await _0x5124bc()
      if (!_0x91df5d) {
        return
      }
      const _0x249787 = GetEntityCoords(_0x59b80a, false),
        _0x5621d9 = {
          x: _0x249787[0],
          y: _0x249787[1],
          z: _0x249787[2],
        }
      const _0x48f552 = _0x5621d9,
        _0x89520f = _0x5af286(_0x48f552)
      if (!_0x89520f) {
        return
      }
      const _0x139623 = _0x4145d9(_0x59b80a)
      if (_0x139623.gangId !== _0x89520f) {
        return
      }
      const [_0x53f6ac, _0x451f88] = await _0x5982d9.execute(
        'np-gangsystem:canRobGang',
        _0x89520f
      )
      if (!_0x53f6ac) {
        return emit('DoLongHudText', _0x451f88, 2)
      }
      ClearPedTasks(_0x59b80a)
      await _0x315b4d.loadAnim('missfbi5ig_22')
      await _0x315b4d.loadAnim('random@shop_robbery')
      NetworkRequestControlOfEntity(_0x59b80a)
      TaskSetBlockingOfNonTemporaryEvents(0, true)
      SetEntityAsMissionEntity(_0x59b80a, true, true)
      SetNetworkIdCanMigrate(NetworkGetNetworkIdFromEntity(_0x59b80a), false)
      TaskGoToEntity(_0x59b80a, PlayerPedId(), -1, 2, 4, 0, 0)
      TaskTurnPedToFaceEntity(_0x59b80a, PlayerPedId(), -1)
      TaskTurnPedToFaceEntity(PlayerPedId(), _0x59b80a, -1)
      TaskPlayAnim(
        _0x59b80a,
        'missfbi5ig_22',
        'hands_up_anxious_scientist',
        8,
        1,
        -1,
        1,
        -1,
        false,
        false,
        false
      )
      TaskPlayAnim(
        PlayerPedId(),
        'random@shop_robbery',
        'robbery_action_b',
        20,
        -8,
        -1,
        49,
        0,
        false,
        false,
        false
      )
      const _0x222395 = GetLabelText(
          GetNameOfZone(_0x48f552.x, _0x48f552.y, _0x48f552.z)
        ),
        [_0x2b0466, _0x5b60b2] = GetStreetNameAtCoord(
          _0x48f552.x,
          _0x48f552.y,
          _0x48f552.z
        ),
        _0x15b7d5 = GetStreetNameFromHashKey(_0x2b0466) + ', ' + _0x222395,
        _0x2570ed = { i18n: ['Someone is robbing one of our members'] }
      _0x319555.emitNet(
        'np-gangsystem:notifyGang',
        'Someone is robbing one of our members! ' + _0x15b7d5,
        _0x89520f,
        _0x2570ed
      )
      _0x319555.emitNet('np-gangsystem:gangMemberBeingRobbed', _0x89520f)
      _0x2ebe7f = true
      const _0xbd041b = GetGamePool('CPed').filter(
        (_0x21480f) =>
          GetHashKey(_0x36f417[_0x89520f]) === GetEntityModel(_0x21480f) &&
          !IsPedAPlayer(_0x21480f)
      )
      for (const _0x181e26 of _0xbd041b) {
        if (_0x181e26 === _0x59b80a) {
          continue
        }
        ClearPedTasks(_0x181e26)
        NetworkRequestControlOfEntity(_0x181e26)
        SetNetworkIdCanMigrate(NetworkGetNetworkIdFromEntity(_0x181e26), false)
        await _0x4ebbf6(_0x181e26, _0x89520f)
        TaskCombatPed(_0x181e26, PlayerPedId(), 0, 16)
      }
      const _0x1d6601 = GetGameTimer(),
        _0x4f730c = setInterval(async () => {
          const _0x6af678 = exports['np-flags'].GetPedFlags(PlayerPedId())
          if (
            _0x1d6601 + 120000 < GetGameTimer() ||
            !_0x2ebe7f ||
            _0x6af678.isDead
          ) {
            return clearInterval(_0x4f730c)
          }
          !IsEntityPlayingAnim(
            PlayerPedId(),
            'random@shop_robbery',
            'robbery_action_b',
            3
          ) &&
            TaskPlayAnim(
              PlayerPedId(),
              'random@shop_robbery',
              'robbery_action_b',
              20,
              -8,
              -1,
              49,
              0,
              false,
              false,
              false
            )
          !IsEntityPlayingAnim(
            _0x59b80a,
            'missfbi5ig_22',
            'hands_up_anxious_scientist',
            3
          ) &&
            TaskPlayAnim(
              _0x59b80a,
              'missfbi5ig_22',
              'hands_up_anxious_scientist',
              8,
              1,
              -1,
              1,
              -1,
              false,
              false,
              false
            )
        }, 1000),
        _0x31d31a = await _0x18eefd(240000, 'Robbing gang member', true)
      _0x2ebe7f = false
      ClearPedTasks(PlayerPedId())
      ClearPedTasks(_0x59b80a)
      TaskWanderStandard(_0x59b80a, 1, 10)
      if (_0x31d31a !== 100) {
        return
      }
      const [_0x12b62b, _0x807199] = await _0x5982d9.execute(
        'np-gangsystem:robGangMember',
        _0x89520f
      )
      if (!_0x12b62b) {
        emit('DoLongHudText', _0x807199, 2)
      }
    }
  _0x594dfe.addHook('active', async function () {
    const _0x3e73d5 = GetGamePool('CPed')
    for (const _0x110f70 of _0x3e73d5) {
      const _0x5aacf2 = _0x4145d9(_0x110f70)
      if (_0x535875.has(_0x110f70) || !_0x5aacf2) {
        continue
      }
      const _0x58243c = IsPedAPlayer(_0x110f70),
        _0x200357 = GetPedType(_0x110f70) === 28
      if (_0x58243c || _0x200357) {
        continue
      }
      _0x535875.add(_0x110f70)
      TaskSetBlockingOfNonTemporaryEvents(_0x110f70, true)
      SetPedFleeAttributes(_0x110f70, 0, false)
      SetPedRelationshipGroupHash(
        _0x110f70,
        GetHashKey('GANG_' + _0x5aacf2.gangId)
      )
    }
  })
  let _0x1d6ea5 = false
  on('np-admin:currentDevmode', (_0x64a95c) => {
    _0x1d6ea5 = _0x64a95c
  })
  _0x319555.onNet('np-gangsystem:refreshGangStatus', () => {
    return _0x4f4209()
  })
  _0x319555.onNet('np-gangsystem:openGangStorage', (_0x7eb539, _0x39e7ac) => {
    return _0x2cb816(_0x39e7ac)
  })
  _0x319555.on('np-gangsystem:collectTrapProfit', async () => {
    const _0x3dfbdb = await _0x5124bc()
    return _0x319555.emitNet('np-gangsystem:collectTrapProfit', _0x3dfbdb)
  })
  _0x319555.on('np-gangsystem:collectHistory', () => {
    return _0x4d15a1()
  })
  _0x319555.onNet('np-gangsystem:robGangMember', (_0x39f947, _0xeded17) => {
    return _0x4e1278(_0xeded17)
  })
  _0x319555.on(
    'np-gangsystem:destroyFlag',
    (_0x205bfc, _0x4bf36c, _0x39ec33) => {
      return _0x320dd3(_0x4bf36c, _0x39ec33)
    }
  )
  _0x319555.on('np-gangsystem:purchaseGangSpray', () => {
    return _0x30eefe()
  })
  _0x319555.on('np-gangsystem:purchaseScrubbingCloth', () => {
    return _0x5cc3a5()
  })
  _0x319555.on(
    'np-gangsystem:handOverSpray',
    (_0x3fb440, _0x4ffc90, _0x4fe7e9) => {
      return _0x29ca6f(_0x4fe7e9)
    }
  )
  _0x319555.onNet('np-gangsystem:sendEmail', async (_0x52202f) => {
    const _0x247d9f = { i18n: [] }
    emit('phone:emailReceived', 'Unknown', 'IMPORTANT!', _0x52202f, _0x247d9f)
    await _0x1a032a('GANG', 'READ EMAIL APP', 'exclamation-triangle')
  })
  _0x319555.onNet(
    'np-gangsystem:incomingInvite',
    async (_0x35efd5, _0x119ebb, _0x3bb2b4) => {
      const _0x36ed3d = await _0x1a032a(
        'Gang invitation',
        _0x3bb2b4 + ' is inviting you to join their group.',
        'user-ninja'
      )
      if (!_0x36ed3d) {
        return
      }
      const [_0x5f4428, _0x135106] = await _0x5982d9.execute(
        'np-gangsystem:acceptGangInvite',
        _0x35efd5,
        _0x119ebb
      )
      emit('DoLongHudText', _0x135106, _0x5f4428 ? 1 : 2)
    }
  )
  _0x319555.on(
    'np-gangsystem:discoverGraffiti',
    (_0x25bbea, _0x53ff60, _0xc38e1d) => {
      return _0x38b5b6(_0xc38e1d)
    }
  )
  on('np-inventory:closed', (_0x3d85dd) => {
    if (!_0x3d85dd.endsWith('-Traphouse-Storage')) {
      return
    }
    return _0x3263da()
  })
  RegisterUICallback(
    'np-gangsystem:confirmPurchaseSpray',
    (_0x423cd5, _0x4d8ddc) => {
      _0x319555.emitNet(
        'np-gangsystem:purchaseGangSpray',
        _0x423cd5.key.gangId,
        _0x423cd5.key.cost
      )
      const _0x130a8a = {
        ok: true,
        message: '',
      }
      const _0x448c3b = {
        data: null,
        meta: _0x130a8a,
      }
      _0x4d8ddc(_0x448c3b)
    }
  )
  RegisterUICallback(
    'np-gangsystem:confirmPurchaseCloth',
    (_0x261f2a, _0x5f4674) => {
      _0x319555.emitNet(
        'np-gangsystem:purchaseScrubbingCloth',
        _0x261f2a.key.cost
      )
      const _0x4f86a6 = {
        ok: true,
        message: '',
      }
      const _0x4ee334 = {
        data: null,
        meta: _0x4f86a6,
      }
      _0x5f4674(_0x4ee334)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:fetchGangInfo',
    async (_0x196e86, _0x4908e1) => {
      const _0x2731b9 = await _0x5982d9.execute('np-gangsystem:getGanginfo'),
        _0x440206 = {
          ok: true,
          message: '',
        }
      const _0x547f6d = {
        data: _0x2731b9,
        meta: _0x440206,
      }
      _0x4908e1(_0x547f6d)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:kickMember',
    async (_0x1b4fe9, _0x166c9a) => {
      const _0x1d218c = await _0x5124bc(),
        [_0x44d99f, _0x3ebbd0] = await _0x5982d9.execute(
          'np-gangsystem:removeGangMember',
          _0x1d218c,
          Number(_0x1b4fe9.stateId)
        ),
        _0x3ed195 = {
          ok: _0x44d99f,
          message: _0x3ebbd0,
        }
      const _0x47da8a = {
        data: {},
        meta: _0x3ed195,
      }
      _0x166c9a(_0x47da8a)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:addMember',
    async (_0x5bd72c, _0x5f1c34) => {
      const _0x505be0 = await _0x5124bc(),
        [_0x18e0d5, _0x533787] = await _0x5982d9.execute(
          'np-gangsystem:addGangMember',
          _0x505be0,
          Number(_0x5bd72c.stateId)
        ),
        _0x6fd81e = {
          ok: _0x18e0d5,
          message: _0x533787,
        }
      const _0x1f11c2 = {
        data: {},
        meta: _0x6fd81e,
      }
      _0x5f1c34(_0x1f11c2)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:fetchGangProgression',
    async (_0x17f017, _0x187728) => {
      const _0x32ee2c = await _0x5124bc(),
        _0x43c7eb = await _0x5982d9.execute(
          'np-gangsystem:fetchGangProgression',
          _0x32ee2c
        ),
        _0x27151a = {
          ok: true,
          message: 'OK',
        }
      const _0x4b0ff4 = {
        data: _0x43c7eb,
        meta: _0x27151a,
      }
      _0x187728(_0x4b0ff4)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:fetchIsStaff',
    async (_0x4bd0c7, _0x3e585f) => {
      const _0x26e67f = await _0x5982d9.execute('np-gangsystem:fetchIsStaff'),
        _0x371f8a = { isStaff: _0x26e67f && _0x1d6ea5 }
      const _0x46eee1 = {
        ok: true,
        message: 'OK',
      }
      const _0x44c4db = {
        data: _0x371f8a,
        meta: _0x46eee1,
      }
      _0x3e585f(_0x44c4db)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:fetchStaffInformation',
    async (_0x18f2f9, _0x5d7b9f) => {
      const _0x1d1f18 = await _0x5982d9.execute(
          'np-gangsystem:fetchStaffInformation'
        ),
        _0x46430f = {
          ok: true,
          message: 'OK',
        }
      const _0x242ef7 = {
        data: _0x1d1f18,
        meta: _0x46430f,
      }
      _0x5d7b9f(_0x242ef7)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:staffRemoveMember',
    async (_0xdb6850, _0x629b95) => {
      const [_0x250a19, _0x26d965] = await _0x5982d9.execute(
          'np-gangsystem:staffRemoveMember',
          _0xdb6850.groupId,
          Number(_0xdb6850.stateId)
        ),
        _0x222650 = {
          ok: true,
          message: _0x26d965,
        }
      const _0x551a09 = {
        data: _0x250a19,
        meta: _0x222650,
      }
      _0x629b95(_0x551a09)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:staffFetchGangLogs',
    async (_0x10c7e5, _0x1b9752) => {
      const _0xc53654 = await _0x5982d9.execute(
          'np-gangsystem:staffFetchGangLogs',
          _0x10c7e5.groupId
        ),
        _0x1913ab = { logs: _0xc53654 }
      const _0x594d08 = {
        ok: true,
        message: '',
      }
      const _0xba04c8 = {
        data: _0x1913ab,
        meta: _0x594d08,
      }
      _0x1b9752(_0xba04c8)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:toggleGangBlips',
    async (_0x2dce70, _0x213bb1) => {
      await _0x2b419e()
      const _0x1eb602 = {
        ok: true,
        message: 'ok',
      }
      const _0x4af9c6 = {
        data: {},
        meta: _0x1eb602,
      }
      _0x213bb1(_0x4af9c6)
    }
  )
  RegisterUICallback(
    'np-gangsystem:ui:toggleContestedGraffitis',
    async (_0x504d72, _0x5eecf5) => {
      await _0x2e85e8()
      const _0xf30017 = {
        ok: true,
        message: 'ok',
      }
      const _0x1342c4 = {
        data: {},
        meta: _0xf30017,
      }
      _0x5eecf5(_0x1342c4)
    }
  )
  _0x1c0a1a.g.exports('GetCurrentGang', _0x5124bc)
  _0x1c0a1a.g.exports('GetCurrentFlagLocation', _0x442e4a)
  _0x1c0a1a.g.exports('IsValidGraffitiPlacement', _0x352abd)
  _0x1c0a1a.g.exports('RemovingGangSpray', _0x76b0a)
  _0x1c0a1a.g.exports('GetCurrentGangInfo', _0xe035bf)
  _0x1c0a1a.g.exports('InRestrictedArea', _0x90385b)
  _0x1c0a1a.g.exports('GetGangsPedModels', _0xb3ba61)
  RegisterCommand(
    'np-gangsystem:toggleGangBlips',
    async (_0x2ed95b, _0x59e361) => {
      _0x2b419e(true)
    },
    false
  )
  const _0x104699 = () => {
    const _0x3c3ccf = {
      NPXEvent: 'np-gangsystem:openGangStorage',
      id: 'gangs_hand_goods',
      icon: 'hand-holding',
      label: 'Hand Goods',
      parameters: {},
    }
    const _0x16669d = {
      NPXEvent: 'np-gangsystem:collectTrapProfit',
      id: 'gangs_collect_profit',
      icon: 'money-bill',
      label: 'Collect Profit',
      parameters: {},
    }
    const _0x48a2e0 = {
      NPXEvent: 'np-gangsystem:collectHistory',
      id: 'gangs_collect_profit_history',
      icon: 'history',
      label: 'Who has collected profit?',
      parameters: {},
    }
    const _0x4dd9cc = { radius: 2 }
    _0x1c0a1a.g.exports['np-interact'].AddPeekEntryByEntityType(
      [1],
      [_0x3c3ccf, _0x16669d, _0x48a2e0],
      {
        distance: _0x4dd9cc,
        isEnabled: async (_0x2ae9d6, _0x1ee732) => {
          const _0xb93981 = await _0x5124bc()
          if (!_0xb93981) {
            return false
          }
          const _0x5ba30a = await _0xb3ba61()
          if (!_0x5ba30a[_0xb93981]) {
            return false
          }
          const _0x1b5070 = GetHashKey(_0x5ba30a[_0xb93981]),
            _0x30fbff = GetEntityCoords(_0x2ae9d6, false),
            _0x405996 = {
              x: _0x30fbff[0],
              y: _0x30fbff[1],
              z: _0x30fbff[2],
            }
          const _0x585f57 = _0x405996,
            _0x1c97ed = _0x5af286(_0x585f57)
          return (
            _0x1ee732.model === _0x1b5070 &&
            _0x1c97ed === _0xb93981 &&
            !IsPedAPlayer(_0x2ae9d6) &&
            !IsEntityDead(_0x2ae9d6)
          )
        },
      }
    )
    const _0x25c5f7 = {
      NPXEvent: 'np-gangsystem:robGangMember',
      id: 'gangs_rob_npc',
      icon: 'bullseye',
      label: 'Rob Member',
      parameters: {},
    }
    const _0x19ff0c = { radius: 2 }
    _0x1c0a1a.g.exports['np-interact'].AddPeekEntryByEntityType(
      [1],
      [_0x25c5f7],
      {
        distance: _0x19ff0c,
        isEnabled: async (_0x186976, _0x5f6e0a) => {
          const _0x512a8b = await _0x5124bc()
          if (!_0x512a8b) {
            return false
          }
          const _0x17dede = GetEntityCoords(_0x186976, false),
            _0x4bd700 = {
              x: _0x17dede[0],
              y: _0x17dede[1],
              z: _0x17dede[2],
            }
          const _0x54ff1d = _0x4bd700,
            _0x4cb8dc = _0x5af286(_0x54ff1d),
            _0x43e66f = await _0xb3ba61()
          if (!_0x43e66f[_0x4cb8dc]) {
            return false
          }
          const _0x6f0bba = GetHashKey(_0x43e66f[_0x4cb8dc])
          return (
            _0x5f6e0a.model === _0x6f0bba &&
            _0x4cb8dc !== _0x512a8b &&
            !IsPedAPlayer(_0x186976) &&
            !IsEntityDead(_0x186976)
          )
        },
      }
    )
    const _0x49f819 = {
      NPXEvent: 'np-gangsystem:destroyFlag',
      id: 'gangs_destroy_flag',
      icon: 'trash',
      label: 'Remove Flag',
      parameters: {},
    }
    const _0x3cca82 = { radius: 2 }
    _0x1c0a1a.g.exports['np-interact'].AddPeekEntryByModel(
      [GetHashKey('np_gangflag')],
      [_0x49f819],
      {
        distance: _0x3cca82,
        isEnabled: async (_0x292b55, _0xc19963) => {
          var _0x5329cf, _0x28579e, _0x544fa8
          const _0x34f4b8 =
            (_0x544fa8 =
              (_0x28579e =
                (_0x5329cf = _0xc19963.meta) === null || _0x5329cf === void 0
                  ? void 0
                  : _0x5329cf.data) === null || _0x28579e === void 0
                ? void 0
                : _0x28579e.metadata) === null || _0x544fa8 === void 0
              ? void 0
              : _0x544fa8.gangId
          if (!_0x34f4b8) {
            return false
          }
          const _0x552694 = await _0x5124bc()
          if (!_0x552694) {
            return false
          }
          const _0x5b6248 = GetEntityCoords(PlayerPedId(), false),
            _0x75a29b = {
              x: _0x5b6248[0],
              y: _0x5b6248[1],
              z: _0x5b6248[2],
            }
          const _0x21bac9 = _0x75a29b,
            _0x39dd81 = _0x5af286(_0x21bac9)
          return _0x552694 === _0x39dd81 && _0x39dd81 === _0x34f4b8
        },
      }
    )
  }
  const _0x3860a0 = () => {
    var _0x4aa49b
    const _0x1fa17b =
      (_0x4aa49b = _0x266c7c('blockVinewoodArea')) !== null &&
      _0x4aa49b !== void 0
        ? _0x4aa49b
        : false
    if (_0x1fa17b) {
      const _0xa6bd3e = {
        x: -2304.55,
        y: -353.03,
      }
      const _0x5056e6 = {
        x: -2065.15,
        y: -65.15,
      }
      const _0x364fed = {
        x: -1756.06,
        y: -277.27,
      }
      const _0x5305fd = {
        x: -1695.45,
        y: -346.97,
      }
      const _0x52879a = {
        x: -1577.27,
        y: -177.27,
      }
      const _0x4c74a0 = {
        x: -1877.27,
        y: 101.52,
      }
      const _0x160cf1 = {
        x: -1813.64,
        y: 231.82,
      }
      const _0x4fa619 = {
        x: -1677.27,
        y: 325.76,
      }
      const _0x3d05b0 = {
        x: -1586.36,
        y: 316.67,
      }
      const _0x2fcae7 = {
        x: -1495.45,
        y: 231.82,
      }
      const _0x18168f = {
        x: -1450,
        y: 295.45,
      }
      const _0x7036c3 = {
        x: -1380.3,
        y: 231.82,
      }
      const _0x4931f6 = {
        x: -877.27,
        y: -556.06,
      }
      const _0x1f489d = {
        x: 646.97,
        y: -565.15,
      }
      const _0x1724bd = {
        x: 786.36,
        y: -46.97,
      }
      const _0x1307d9 = {
        x: 1277.27,
        y: -265.15,
      }
      const _0x178597 = {
        x: 1537.88,
        y: -1007.58,
      }
      const _0x4cf835 = {
        x: 3353.03,
        y: -1046.97,
      }
      const _0x4aee9a = {
        x: 3516.67,
        y: 1316.67,
      }
      const _0x47895e = {
        x: 3322.73,
        y: 2574.24,
      }
      const _0x78e87f = {
        x: 1604.55,
        y: 2813.64,
      }
      const _0x186aa7 = {
        x: 1010.61,
        y: 2719.7,
      }
      const _0x5dfd37 = {
        x: 1.52,
        y: 2625.76,
      }
      const _0x56ac42 = {
        x: -416.67,
        y: 2928.79,
      }
      const _0x456529 = {
        x: -3907.58,
        y: 2377.27,
      }
      const _0x5b275b = {
        x: -3919.7,
        y: -531.8,
      }
      const _0x185b75 = { id: 'np-gangsystem:blockedZone' }
      const _0x4ef2d9 = {
        minZ: 0,
        maxZ: 800,
        data: _0x185b75,
      }
      exports['np-polyzone'].AddPolyZone(
        'np-gangsystem:blockedZone',
        [
          _0xa6bd3e,
          _0x5056e6,
          _0x364fed,
          _0x5305fd,
          _0x52879a,
          _0x4c74a0,
          _0x160cf1,
          _0x4fa619,
          _0x3d05b0,
          _0x2fcae7,
          _0x18168f,
          _0x7036c3,
          _0x4931f6,
          _0x1f489d,
          _0x1724bd,
          _0x1307d9,
          _0x178597,
          _0x4cf835,
          _0x4aee9a,
          _0x47895e,
          _0x78e87f,
          _0x186aa7,
          _0x5dfd37,
          _0x56ac42,
          _0x456529,
          _0x5b275b,
        ],
        _0x4ef2d9
      )
    }
    const _0x346f98 = {
      x: -172.25,
      y: -426.8,
    }
    const _0x583a73 = {
      x: -300.07,
      y: -835.61,
    }
    const _0x1a1f8a = {
      x: -119,
      y: -1121.23,
    }
    const _0x3cf4ee = {
      x: 90.91,
      y: -1124.24,
    }
    const _0x2e5622 = {
      x: 590.91,
      y: -1133.33,
    }
    const _0x112911 = {
      x: 603.03,
      y: -624.24,
    }
    const _0x544669 = {
      x: 540.91,
      y: -572.73,
    }
    const _0xe24af0 = { id: 'np-gangsystem:blockedZone_downtown' }
    const _0x3566dd = {
      minZ: -400,
      maxZ: 800,
      data: _0xe24af0,
    }
    exports['np-polyzone'].AddPolyZone(
      'np-gangsystem:blockedZone',
      [
        _0x346f98,
        _0x583a73,
        _0x1a1f8a,
        _0x3cf4ee,
        _0x2e5622,
        _0x112911,
        _0x544669,
      ],
      _0x3566dd
    )
  }
  async function _0x256005() {
    await _0x3bdf90()
    await _0x5982d9.execute('np-datagrid:subscribe', 'gang-flags')
    _0x3860a0()
    await _0x33e966()
    await _0x14c0d2()
    _0x104699()
  }
  ;(async () => {
    await _0x256005()
  })()
})()

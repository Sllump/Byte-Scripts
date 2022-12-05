(function() {
	var _0x52e7a0 = {
			function(_0x1dc29f, BPX) {
				Object.defineProperty(BPX, '__esModule', {
					'value': true
				}), BPX.Hud = BPX.Interface = BPX.Utils = BPX.Streaming = BPX.Zones = BPX.Procedures = BPX.Events = undefined, BPX.Events = {
					'on': (_0x5d8a43, _0x1d3ef3) => {
						return APX.Events.on(_0x5d8a43, _0x1d3ef3);
					},
					'onNet': (_0xa9687b, _0x30297a) => {
						return APX.Events.onNet(_0xa9687b, _0x30297a);
					},
					'emit': (_0x56cf79, ..._0x1e7e82) => {
						return APX.Events.emit(_0x56cf79, ..._0x1e7e82);
					},
					'emitNet': (_0xeac8ab, ..._0x105506) => {
						return APX.Events.emitNet(_0xeac8ab, ..._0x105506);
					},
					'remove': (_0x3c3f08, _0x5ac063) => {
						return APX.Events.remove(_0x3c3f08, _0x5ac063);
					}
				}, BPX.Procedures = {
					'register': (_0x2990b3, _0x11cea3) => {
						return APX.Procedures.register(_0x2990b3, _0x11cea3);
					},
					'execute': (_0x493055, ..._0x159db2) => {
						return APX.Procedures.execute(_0x493055, ..._0x159db2);
					}
				}, BPX.Zones = {
					'isActive': (_0x5b311e, _0x5eb59e) => {
						return APX.Zones.isActive(_0x5b311e, _0x5eb59e);
					},
					'onEnter': (_0xe6ac78, _0x2d3022) => {
						return APX.Zones.onEnter(_0xe6ac78, _0x2d3022);
					},
					'onExit': (_0x19a198, _0x21886b) => {
						return APX.Zones.onExit(_0x19a198, _0x21886b);
					},
					'addBoxZone': (_0x1ff0e7, _0x403fa7, _0x6f77f7, _0x6421cf, _0x1ecedf, _0x40e0eb, _0x3c1062 = {}) => {
						const _0x576f79 = {
							'HtHNh': function(_0x22988f, _0x81d756) {
								return _0x22988f(_0x81d756);
							}
						};
						return APX.Zones.addBoxZone(_0x1ff0e7, _0x403fa7, _0x6f77f7, _0x6421cf, _0x1ecedf, _0x40e0eb, _0x3c1062);
					},
					'addBoxTarget': (_0x1b0aa8, _0x51033b, _0x4a34ef, _0x52ce95, _0x46726b, _0x4b7be1, _0x48eb76 = {}) => {
						const _0x4ff338 = {
							'JPRBo': 'object_zone',
							'BLorF': function(_0x361b98, _0x1da0a4) {
								return _0x361b98(_0x1da0a4);
							}
						};
						return APX.Zones.addBoxTarget(_0x1b0aa8, _0x51033b, _0x4a34ef, _0x52ce95, _0x46726b, _0x4b7be1, _0x48eb76);
					}
				}, BPX.Streaming = {
					'loadModel': _0x42671e => {
						return APX.Streaming.loadModel(_0x42671e);
					},
					'loadTexture': _0x1424ec => {
						return APX.Streaming.loadTexture(_0x1424ec);
					},
					'loadAnim': _0x4d3ce9 => {
						return APX.Streaming.loadAnim(_0x4d3ce9);
					},
					'loadClipSet': _0xa4ddd3 => {
						return APX.Streaming.loadClipSet(_0xa4ddd3);
					},
					'loadWeaponAsset': (_0x1eac89, _0x199907, _0x5f4675) => {
						return APX.Streaming.loadWeaponAsset(_0x1eac89);
					},
					'loadNamedPtfxAsset': _0x31347d => {
						return APX.Streaming.loadNamedPtfxAsset(_0x31347d);
					}
				}, BPX.Utils = {
					'cache': (_0x3d851f, _0x2adcbc) => {
						return APX.Utils.cache(_0x3d851f, _0x2adcbc);
					},
					'cacheableMap': (_0x13b4a4, _0x2a62ae) => {
						const _0x2c7cbe = {
							'CeiqZ': function(_0x4aa8c6, _0x4fe52e) {
								return _0x4aa8c6 === _0x4fe52e;
							}
						};
						return APX.Utils.cacheableMap(_0x13b4a4, _0x2a62ae);
					},
					'waitForCondition': (_0x80c5b3, _0x4c2b6b) => {
						return APX.Utils.waitForCondition(_0x80c5b3, _0x4c2b6b);
					},
					'getMapRange': (_0x1e3dfb, _0x29684a, _0x3ac0f7) => {
						return APX.Utils.getMapRange(_0x1e3dfb, _0x29684a, _0x3ac0f7);
					},
					'getDistance': ([_0x2c11be, _0x3f0acb, _0x56be5c], [_0x5ec5f5, _0x58e580, _0x43c331]) => {
						return APX.Utils.getDistance([_0x2c11be, _0x3f0acb, _0x56be5c], [_0x5ec5f5, _0x58e580, _0x43c331]);
					},
					'getRandomNumber': (_0x205aef, _0x4c04ba) => {
						return APX.Utils.getRandomNumber(_0x205aef, _0x4c04ba);
					}
				}, BPX.Interface = {
					'addPeekEntryByModel': (_0x4cd381, _0x2c7cb0, _0x10f367) => {
						return APX.Interface.addPeekEntryByModel(_0x4cd381, _0x2c7cb0, _0x10f367);
					},
					'addPeekEntryByTarget': (_0x3adb02, _0x2970d0, _0x4f20af) => {
						return APX.Interface.addPeekEntryByTarget(_0x3adb02, _0x2970d0, _0x4f20af);
					},
					'addPeekEntryByFlag': (_0x52a7c0, _0x181f02, _0x22b293) => {
						return APX.Interface.addPeekEntryByFlag(_0x52a7c0, _0x181f02, _0x22b293);
					},
					'taskbar': (_0x1b670f, _0x959ab7, _0x15e3b8 = false, _0x1c9a82 = null) => {
						const _0x44dfe5 = {
							'TWzuq': function(_0x1f99bd, _0x518656) {
								return _0x1f99bd(_0x518656);
							}
						};
						return APX.Interface.taskbar(_0x1b670f, _0x959ab7, _0x15e3b8, _0x1c9a82);
					},
					'phoneConfirmation': (_0x4f9f38, _0x2f07ac, _0x59724) => {
						return APX.Interface.phoneConfirmation(_0x4f9f38, _0x2f07ac, _0x59724);
					},
					'phoneNotification': (_0x55cbd5, _0x1652e9, _0x18f1a8, _0x15d6fa = true) => {
						return APX.Interface.phoneNotification(_0x55cbd5, _0x1652e9, _0x18f1a8, _0x15d6fa);
					}
				}, BPX.Hud = {
					'createBlip': (_0x5723d4, ..._0x33de03) => {
						return APX.Hud.createBlip(_0x5723d4, ..._0x33de03);
					},
					'applyBlipSettings': (_0x5c1a56, _0x38250b, _0x59744a, _0x1cac74, _0x33ac27, _0x1071de, _0x405607, _0x1ab0a2) => {
						return APX.Hud.applyBlipSettings(_0x5c1a56, _0x38250b, _0x59744a, _0x1cac74, _0x33ac27, _0x1071de, _0x405607, _0x1ab0a2);
					}
				};
			},
			0x267: function(_0x14e5eb, _0x24ff11) {
				Object.defineProperty(_0x24ff11, '__esModule', {
					'value': true
				}), _0x24ff11.mathClass = _0x24ff11.loadAnimDict = _0x24ff11.Delay = undefined;

				let _0x37fe7b = _0x5dae1f => new Promise(_0x39364f => setTimeout(_0x39364f, _0x5dae1f));

				_0x24ff11.Delay = _0x37fe7b;

				async function _0x124c05(_0xad43b1) {
					const _0x57489b = {
						'ogWxo': 'arp-objects:DeleteObject'
					};

					while (!HasAnimDictLoaded(_0xad43b1)) {
						RequestAnimDict(_0xad43b1), await (0, _0x24ff11.Delay)(5);
					}
				}

				_0x24ff11.loadAnimDict = _0x124c05;

				class _0x15c59f {
					constructor(_0x58c8df = 0, _0x42391f = 0, _0x25b9fc = 0) {
						this.x = _0x58c8df, this.y = _0x42391f, this.z = _0x25b9fc;
					}

					['setFromArray'](_0x44e022) {
						return this.x = _0x44e022[0], this.y = _0x44e022[1], this.z = _0x44e022[2], this;
					}

					['getArray']() {
						return [this.x, this.y, this.z];
					}

					['add'](_0x5cb2a1) {
						const _0x231875 = {
							'mNBpp': function(_0x1a6674, _0x19ba7e) {
								return _0x1a6674(_0x19ba7e);
							}
						};
						return this.x += _0x5cb2a1.x, this.y += _0x5cb2a1.y, this.z += _0x5cb2a1.z, this;
					}

					['addScalar'](_0x2fcd6d) {
						return this.x += _0x2fcd6d, this.y += _0x2fcd6d, this.z += _0x2fcd6d, this;
					}

					['sub'](_0x5c32cf) {
						return this.x -= _0x5c32cf.x, this.y -= _0x5c32cf.y, this.z -= _0x5c32cf.z, this;
					}

					['equals'](_0x12bd13) {
						return this.x === _0x12bd13.x && this.y === _0x12bd13.y && this.z === _0x12bd13.z;
					}

					['subScalar'](_0x276eca) {
						return this.x -= _0x276eca, this.y -= _0x276eca, this.z -= _0x276eca, this;
					}

					['multiply'](_0x47d776) {
						return this.x *= _0x47d776.x, this.y *= _0x47d776.y, this.z *= _0x47d776.z, this;
					}

					['multiplyScalar'](_0x3bdfc8) {
						return this.x *= _0x3bdfc8, this.y *= _0x3bdfc8, this.z *= _0x3bdfc8, this;
					}

					['round']() {
						return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
					}

					['floor']() {
						return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
					}

					['ceil']() {
						return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
					}

					['magnitude']() {
						return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
					}

					['normalize']() {
						let _0x1eacf6 = this.magnitude;
						if (isNaN(_0x1eacf6)) _0x1eacf6 = 0;
						return this.multiplyScalar(1 / _0x1eacf6);
					}

					['forward']() {
						const _0x363147 = _0x15c59f.fromObject(this).multiplyScalar(Math.PI / 180);

						return new _0x15c59f(-Math.sin(_0x363147.z) * Math.abs(Math.cos(_0x363147.x)), Math.cos(_0x363147.z) * Math.abs(Math.cos(_0x363147.x)), Math.sin(_0x363147.x));
					}

					['getDistance'](_0x3bd152) {
						const [_0x467254, _0x147b58, _0x126aeb] = [this.x - _0x3bd152.x, this.y - _0x3bd152.y, this.z - _0x3bd152.z];
						return Math.sqrt(_0x467254 * _0x467254 + _0x147b58 * _0x147b58 + _0x126aeb * _0x126aeb);
					}

					['getDistanceFromArray'](_0x17700b) {
						const [_0x53fad4, _0x544f24, _0x3f5176] = [this.x - _0x17700b[0], this.y - _0x17700b[1], this.z - _0x17700b[2]];
						return Math.sqrt(_0x53fad4 * _0x53fad4 + _0x544f24 * _0x544f24 + _0x3f5176 * _0x3f5176);
					}

					static['fromArray'](_0x633405) {
						return new _0x15c59f(_0x633405[0], _0x633405[1], _0x633405[2]);
					}

					static['fromObject'](_0x513530) {
						return new _0x15c59f(_0x513530.x, _0x513530.y, _0x513530.z);
					}

				}

				_0x24ff11.mathClass = _0x15c59f;
			}
		},
		_0x24c1f1 = {};

	function _0x36c93d(_0x407162) {
		const _0x5daa76 = {
			'iHQYP': function(_0x106606, _0xada536) {
				return _0x106606(_0xada536);
			}
		};
		var _0x379196 = _0x24c1f1[_0x407162];

		if (_0x379196 !== undefined) {
			return _0x379196.exports;
		}

		var _0x259ec3 = _0x24c1f1[_0x407162] = {
			'exports': {}
		};

		return _0x52e7a0[_0x407162](_0x259ec3, _0x259ec3.exports, _0x36c93d), _0x259ec3.exports;
	}

	! function() {
		_0x36c93d.g = function() {
			if (typeof globalThis === 'object') return globalThis;

			try {
				return this || new Function('return this')();
			} catch (_0x4eb665) {
				if (typeof window === 'object') return window;
			}
		}();
	}();
	var _0x17f18c = {};
	! function() {
		var _0x3862c5 = {},
			_0x531459;

		_0x531459 = {
			'value': true
		}, _0x531459 = undefined;

		const _0x34f0b1 = _0x36c93d(678),
			_0x52a174 = _0x36c93d(615);

		let _0x177ecb = [],
			_0x468c13 = [];
		setImmediate(async () => {
			await (0, _0x52a174.Delay)(5000), Number(_0x177ecb.length) === 0 && emitNet('arp-objects:requestObjects');
		}), onNet('arp-objects:loadObjects', async _0x52d279 => {
			let _0x3abf03 = _0x52d279;
			Object.entries(_0x3abf03).forEach(([_0x399ff3, _0x163f52]) => {
				_0x31dae0(_0x163f52);
			});
		}), onNet('arp:objects:prepareNewObject', async _0x253980 => {
			_0x31dae0(_0x253980);
		}), on('arp-polyzone:enter', async (_0x3ada85, _0x2fe060) => {
			if (_0x3ada85 !== 'object_zone') return;

			let _0x13f07d = _0x177ecb.findIndex(_0x5b3f6d => _0x5b3f6d.id.toString() === _0x2fe060.id.toString());

			if (!_0x177ecb[_0x13f07d]) return;
			if (_0x177ecb[_0x13f07d].obj) return;
			let _0x4b586a = _0x177ecb[_0x13f07d].coordinates;
			_0x177ecb[_0x13f07d].obj = await _0x52815b(_0x177ecb[_0x13f07d].model, _0x4b586a.x, _0x4b586a.y, _0x4b586a.z, _0x4b586a.h);

			let _0x22739b = _0x468c13.findIndex(_0x3d37cd => _0x3d37cd.id.toString() === _0x2fe060.id.toString());

			_0x468c13[_0x22739b] = {
				'x': _0x4b586a.x,
				'y': _0x4b586a.y,
				'z': _0x4b586a.z
			};
		}), on('arp-polyzone:exit', (_0x200b31, _0x1e1480) => {
			const _0x1ba2ef = {
				'yvSSQ': 'arp-objects:UpdateObject'
			}; {
				if (_0x200b31 !== 'object_zone') return;

				let _0x5ea490 = _0x177ecb.findIndex(_0x2fd38b => _0x2fd38b.id.toString() === _0x1e1480.id.toString());

				if (!_0x177ecb[_0x5ea490]) return;
				if (!_0x177ecb[_0x5ea490].obj) return;
				DeleteObject(_0x177ecb[_0x5ea490].obj), _0x177ecb[_0x5ea490].obj = 0;

				let _0x465a6d = _0x468c13.filter(_0x373434 => Number(_0x373434.id) !== Number(_0x1e1480.id));

				_0x468c13 = _0x465a6d;
			}
		}), onNet('arp-objects:clearObjects', _0x4bccf7 => {
			Object.entries(_0x4bccf7).forEach(([_0x1f07de, _0x4d3d9b]) => {
				let _0x4e9b98 = _0x468c13.findIndex(_0x5f0322 => _0x5f0322.id.toString() === _0x4d3d9b.toString());

				if (_0x468c13[_0x4e9b98]) {
					let _0x5311d9 = _0x468c13.filter(_0xb9aa52 => Number(_0xb9aa52.id) !== Number(_0x4d3d9b));

					_0x468c13 = _0x5311d9;
				}

				let _0x2312ab = _0x177ecb.findIndex(_0x37f773 => _0x37f773.id.toString() === _0x4d3d9b.toString());

				if (_0x177ecb[_0x2312ab]) {
					_0x177ecb[_0x2312ab].obj && DeleteObject(Number(_0x177ecb[_0x2312ab].obj));

					let _0xc8bdba = _0x177ecb.filter(_0x10d9f4 => Number(_0x10d9f4.id) !== Number(_0x4d3d9b));

					_0x177ecb = _0xc8bdba;
				}
			});
		}), onNet('arp-objects:updateObjects', _0x8b9fcc => {
			Object.entries(_0x8b9fcc).forEach(([_0x282ba1, _0x26d5af]) => {
				let _0x2b194c = _0x468c13.findIndex(_0x5757e4 => _0x5757e4.id.toString() === _0x26d5af.toString());

				if (_0x468c13[_0x2b194c]) {
					let _0x3efdda = _0x468c13.filter(_0x47139a => Number(_0x47139a.id) !== Number(_0x26d5af));

					_0x468c13 = _0x3efdda;
				}

				let _0x56422c = _0x177ecb.findIndex(_0x481586 => _0x481586.id.toString() === _0x26d5af.toString());

				if (_0x177ecb[_0x56422c]) {
					_0x177ecb[_0x56422c].obj && DeleteObject(_0x177ecb[_0x56422c].obj);

					let _0xfcfa38 = _0x177ecb.filter(_0x4c5012 => Number(_0x4c5012.id) !== Number(_0x26d5af));

					_0x177ecb = _0xfcfa38;
				}
			}), _0x31dae0(_0x8b9fcc);
		});

		async function _0x31dae0(_0x219b5a) {
			const _0xc77bc5 = {
				'UpxrW': function(_0x282ad0, _0x5bda75) {
					return _0x282ad0(_0x5bda75);
				}
			}; {
				let _0x52aae2 = {
					'x': _0x219b5a.coordinates.x,
					'y': _0x219b5a.coordinates.y,
					'z': _0x219b5a.coordinates.z
				};
				PolyZone.addCircleZone('object_zone', {
					'x': _0x219b5a.coordinates.x,
					'y': _0x219b5a.coordinates.y,
					'z': _0x219b5a.coordinates.z
				}, Math.max(75, 40), {
					'data': {
						'id': _0x219b5a.id
					}
				});

				let _0x5a3170 = undefined,
					_0x1de5bd = GetEntityCoords(PlayerPedId(), false),
					_0x2b994e = GetDistanceBetweenCoords(_0x1de5bd[0], _0x1de5bd[1], _0x1de5bd[2], _0x52aae2.x, _0x52aae2.y, _0x52aae2.z, true);

				if (Number(_0x2b994e) < 25) {
					let _0x263f56 = _0x219b5a.coordinates.h;
					if (_0x263f56 === undefined) _0x263f56 = 0;
					_0x5a3170 = await _0x52815b(_0x219b5a.model, _0x52aae2.x, _0x52aae2.y, _0x52aae2.z, _0x263f56), _0x468c13.push({
						'id': _0x219b5a.id,
						'vector': _0x52aae2
					});
				}

				_0x177ecb.push({
					'id': _0x219b5a.id,
					'model': _0x219b5a.model,
					'coordinates': _0x219b5a.coordinates,
					'metaData': _0x219b5a.metaData,
					'obj': _0x5a3170
				});
			}
		}

		_0x531459 = _0x31dae0;

		async function _0x52815b(_0x21a1ba, _0x5535c4, _0x501880, _0x41f292, _0x36cd04) {
			await _0x34f0b1.Streaming.loadModel(_0x21a1ba);

			const _0x155541 = GetHashKey(_0x21a1ba);

			let _0x33fceb = CreateObjectNoOffset(_0x155541, _0x5535c4, _0x501880, _0x41f292, false, false, false);

			if (!_0x36cd04) _0x36cd04 = 0;
			return typeof _0x36cd04 === 'number' ? SetEntityHeading(_0x33fceb, _0x36cd04 + 0) : SetEntityRotation(_0x33fceb, _0x36cd04.x, _0x36cd04.y, _0x36cd04.z, 2, true), FreezeEntityPosition(_0x33fceb, true), _0x33fceb;
		}

		on('onResourceStop', _0x517a51 => {
			const _0x585fca = {
				'zkeRU': function(_0x550bde, _0x1a4aa1) {
					return _0x550bde(_0x1a4aa1);
				}
			};
			if (_0x517a51 !== 'arp-objects') return;
			Object.entries(_0x177ecb).forEach(([_0xdf1e87, _0x3a831f]) => {
				_0x3a831f.obj && DeleteObject(Number(_0x3a831f.obj));
			});
		});

		function _0x42fc1e(_0x352a12) {
			const _0x51f77c = {
				'apTcI': function(_0x5a4bc, _0x4aa23a) {
					return _0x5a4bc === _0x4aa23a;
				},
				'svAvv': 'aZvAo',
				'ekAsH': 'ToSea',
				'guccz': function(_0xf2bc8b, _0x39198b) {
					return _0xf2bc8b(_0x39198b);
				},
				'mcAQn': function(_0xcbdb46, _0x3a1e4a) {
					return _0xcbdb46 !== _0x3a1e4a;
				},
				'CdNKS': 'oVGmw',
				'KymbQ': 'ngoTF'
			}; {
				let _0x39bc69 = false;
				return Object.entries(_0x177ecb).forEach(([_0x393e04, _0x3c82e5]) => {
					const _0x200308 = {
						'Wneqs': function(_0x427a6f, _0x43cd22) {
							return _0x427a6f === _0x43cd22;
						}
					}; {
						if (Number(_0x3c82e5.obj) === Number(_0x352a12)) {
							let _0x57f932 = _0x177ecb.findIndex(_0x10cdb1 => Number(_0x10cdb1.id) === Number(_0x3c82e5.id));

							_0x177ecb[_0x57f932] && (_0x39bc69 = _0x177ecb[_0x57f932]);
						}
					}
				}), _0x39bc69;
			}
		}

		_0x36c93d.g.exports('GetObjectByEntity', _0x42fc1e);

		function _0x390122(_0x211c4a) {
			let _0x1b049c = false,
				_0x3e7c18 = _0x177ecb.findIndex(_0x159dee => _0x159dee.id.toString() === _0x211c4a.toString());

			return _0x177ecb[_0x3e7c18] && (_0x1b049c = _0x177ecb[_0x3e7c18]), _0x1b049c;
		}

		_0x36c93d.g.exports('GetObject', _0x390122);

		function _0x1a6b8f(_0x2d7635) {
			let _0x5ce65b = RPC.execute('arp-objects:DeleteObject', _0x2d7635);

			return _0x5ce65b;
		}

		_0x36c93d.g.exports('DelObject', _0x1a6b8f);

		function _0x123730(_0xcfebda, _0x325e2e) {
			RPC.execute('arp-objects:UpdateObject', _0xcfebda, _0x325e2e);
		}

		_0x36c93d.g.exports('UpdateObject', _0x123730), RegisterCommand('getObject', (_0x5640cf, _0x4b79af, _0x21a97c) => {
			let _0x18a3e6 = _0x4b79af[0],
				_0x340f02 = _0x42fc1e(_0x18a3e6);

			console.log('[arp-objects] getObject return: ', _0x340f02);
		}, false), RegisterCommand('objects:print', () => {
			console.log(_0x177ecb);
		}, false);
	}(), ! function() {
		const _0x3ea57d = {
			'GvivP': function(_0xe6999a, _0x3838d9, _0x41bddd, _0x8eeb2b, _0x2c6f4e, _0x102a24, _0x516a98, _0x102ab9) {
				return _0xe6999a(_0x3838d9, _0x41bddd, _0x8eeb2b, _0x2c6f4e, _0x102a24, _0x516a98, _0x102ab9);
			},
			'uTPmP': 'arp-objects:prepareObject',
			'NHrib': function(_0x399a50, _0xac8828, _0x2b8b03, _0x3240e4) {
				return _0x399a50(_0xac8828, _0x2b8b03, _0x3240e4);
			},
			'yWSTe': function(_0x3474f7, _0x331e25) {
				return _0x3474f7 !== _0x331e25;
			},
			'EdEgR': 'distance',
			'aiBSU': 'kYBXe',
			'WwbND': function(_0x3885a5, _0x2bc1ac) {
				return _0x3885a5 / _0x2bc1ac;
			},
			'twPGL': function(_0x4bb9ae, _0x3c8efa) {
				return _0x4bb9ae + _0x3c8efa;
			},
			'pAusf': function(_0x542bad, _0x339028) {
				return _0x542bad * _0x339028;
			},
			'UJwak': function(_0x3f0c38, _0x30519b, _0xf33c26) {
				return _0x3f0c38(_0x30519b, _0xf33c26);
			},
			'ZQhBh': function(_0x28d512, _0xa1bc0c) {
				return _0x28d512(_0xa1bc0c);
			},
			'awrkv': function(_0x302974, _0x4e5694, _0x35accb) {
				return _0x302974(_0x4e5694, _0x35accb);
			},
			'jpPTq': function(_0x3ca404, _0x27ba43) {
				return _0x3ca404 - _0x27ba43;
			},
			'GxXvS': function(_0x1c243a, _0x2ef1b9) {
				return _0x1c243a - _0x2ef1b9;
			},
			'bQhcz': 'cWDGP',
			'EIwAq': function(_0x48e205, _0x4e896e) {
				return _0x48e205 !== _0x4e896e;
			},
			'MpEsH': 'PsIPE',
			'wQAGq': 'LRxHa',
			'fCMjK': function(_0x283b95, _0x18bc94, _0x596af4, _0x5549c1, _0x2da38e, _0xea7364, _0x58447b, _0x40fbe0, _0x3b7bd0) {
				return _0x283b95(_0x18bc94, _0x596af4, _0x5549c1, _0x2da38e, _0xea7364, _0x58447b, _0x40fbe0, _0x3b7bd0);
			},
			'rKZsf': function(_0x36438a, _0x47bed9, _0x4b82c7) {
				return _0x36438a(_0x47bed9, _0x4b82c7);
			},
			'asqip': 'colZOffset',
			'hhuGw': function(_0x1ce287, _0x1ba079) {
				return _0x1ce287 && _0x1ba079;
			},
			'ytmHH': function(_0x5acd9f, _0x285997, _0x185458, _0x344325, _0x33578a) {
				return _0x5acd9f(_0x285997, _0x185458, _0x344325, _0x33578a);
			},
			'OoinM': 'UpUiz',
			'zvIeY': 'afterRender',
			'ywFkY': function(_0x346ee6, _0x7b40ea) {
				return _0x346ee6(_0x7b40ea);
			},
			'YJRgY': function(_0x23b978, _0x93c2d1) {
				return _0x23b978 === _0x93c2d1;
			},
			'FOfMz': 'LMyKL',
			'fpkWw': 'Mdnrv',
			'IIJFX': function(_0x3864fa, _0x4a2d1c, _0x180fb3, _0x347b38) {
				return _0x3864fa(_0x4a2d1c, _0x180fb3, _0x347b38);
			},
			'tzheP': function(_0x1ff5fd, _0x45f361, _0x404306, _0x14abc9) {
				return _0x1ff5fd(_0x45f361, _0x404306, _0x14abc9);
			},
			'BmurJ': function(_0x41caa5, _0x2aef55, _0x5bcf41) {
				return _0x41caa5(_0x2aef55, _0x5bcf41);
			},
			'URSde': 'feIiC',
			'vSqUW': 'VBQMy',
			'paoSv': function(_0x53b34c, _0x379d9d) {
				return _0x53b34c !== _0x379d9d;
			},
			'JEOPH': 'HYgMW',
			'cKjNe': function(_0xbaf2e1, _0x26f06c, _0x4ab3fe) {
				return _0xbaf2e1(_0x26f06c, _0x4ab3fe);
			},
			'RJjNt': function(_0x165304, _0x2e8105) {
				return _0x165304 > _0x2e8105;
			},
			'hUKok': function(_0x1353d2, _0x18a3e4) {
				return _0x1353d2 < _0x18a3e4;
			},
			'MaISq': 'groundSnap',
			'KgzHY': 'forceGroundSnap',
			'PQsFp': function(_0x2238d0, _0x1e5173, _0x58aefb) {
				return _0x2238d0(_0x1e5173, _0x58aefb);
			},
			'CrVSe': 'useModelOffset',
			'fMeZc': 'adjustZ',
			'ooUpW': function(_0x520530, _0x1bb629, _0x318a65) {
				return _0x520530(_0x1bb629, _0x318a65);
			},
			'vqyef': 'haxJT',
			'hcwTE': function(_0x12de20, _0x32b9a2, _0x4c4901, _0x4c80f1, _0x451611, _0x1f2775, _0x5a4f58, _0x24e611, _0x4a6c15, _0x8388, _0x5e730c, _0x4377e0, _0x4cf689, _0x245068) {
				return _0x12de20(_0x32b9a2, _0x4c4901, _0x4c80f1, _0x451611, _0x1f2775, _0x5a4f58, _0x24e611, _0x4a6c15, _0x8388, _0x5e730c, _0x4377e0, _0x4cf689, _0x245068);
			},
			'KqsXp': function(_0x1cedde, _0x3ff48b) {
				return _0x1cedde + _0x3ff48b;
			},
			'nNinJ': function(_0x59e8d6) {
				return _0x59e8d6();
			},
			'XCKIZ': function(_0x13c412, _0x3d5ed2) {
				return _0x13c412 * _0x3d5ed2;
			},
			'zTclT': function(_0x2977fa, _0xf45d85, _0x94be6c, _0x491663, _0x5f146d, _0x4f07e4, _0x49dd50, _0x4e802f, _0x428c56, _0x276f24, _0x2ae8e4) {
				return _0x2977fa(_0xf45d85, _0x94be6c, _0x491663, _0x5f146d, _0x4f07e4, _0x49dd50, _0x4e802f, _0x428c56, _0x276f24, _0x2ae8e4);
			},
			'JPLUX': function(_0x44b973, _0x34e08c) {
				return _0x44b973(_0x34e08c);
			},
			'XjvJq': 'onDJT',
			'wVHAh': function(_0x32a523, _0x5294a6) {
				return _0x32a523 === _0x5294a6;
			},
			'pSkFq': function(_0x194b8a) {
				return _0x194b8a();
			},
			'pLPLo': function(_0x114438, _0x136253, _0x187a97) {
				return _0x114438(_0x136253, _0x187a97);
			},
			'GCMgN': function(_0x199ffe, _0x5174da, _0x4dc760, _0x497134, _0x2caed6, _0x4ad994, _0x1a5d9c, _0x326a32) {
				return _0x199ffe(_0x5174da, _0x4dc760, _0x497134, _0x2caed6, _0x4ad994, _0x1a5d9c, _0x326a32);
			},
			'KRcfE': function(_0x2c4dd9, _0x12ef54) {
				return _0x2c4dd9 > _0x12ef54;
			},
			'ULdeM': function(_0x10f2f8, _0xc7dcfe) {
				return _0x10f2f8(_0xc7dcfe);
			},
			'kKmfY': 'DoLongHudText',
			'yWofK': 'You cannot place the object this far away',
			'XLUGj': function(_0x485a0d) {
				return _0x485a0d();
			},
			'ekLXR': function(_0x3f27aa, _0x1c2367) {
				return _0x3f27aa + _0x1c2367;
			},
			'NyIXb': function(_0x2cd9c7, _0x3c673c) {
				return _0x2cd9c7 * _0x3c673c;
			},
			'burcm': function(_0x1fd14a, _0x5fad27) {
				return _0x1fd14a * _0x5fad27;
			},
			'OdZDA': function(_0xbbd604, _0x30b284) {
				return _0xbbd604 * _0x30b284;
			},
			'GTKDc': function(_0x296ae2, _0x274e41) {
				return _0x296ae2 !== _0x274e41;
			},
			'Gxsci': 'arp-objects',
			'VrDhU': function(_0x40ce4, _0x164a52) {
				return _0x40ce4 !== _0x164a52;
			},
			'YYSYI': 'PFJnJ'
		};

		var _0x5939ce = _0x17f18c,
			_0x576392;

		_0x576392 = {
			'value': true
		};

		const _0x2e57e3 = _0x36c93d(615);

		let _0x1f9932 = undefined,
			_0x28b3a5 = undefined,
			_0x327d7e = false,
			_0x3b3a33 = 0,
			_0x4d677d = 0,
			_0x348da4 = undefined,
			_0x42dce2 = undefined;

		const _0x1b1f5a = async (_0x51af28, _0x500ce6 = {}, _0x33a91f, _0x117f27 = () => true, _0x3f9404 = 'objects', _0x47fe59) => {
			const [_0x32587b, _0x4bcb28] = await _0x5ce773(_0x51af28, _0x33a91f, _0x117f27);
			if (!_0x32587b) return null;
			return await RPC.execute('arp-objects:SaveObject', _0x3f9404, _0x51af28, _0x4bcb28.coords, _0x4bcb28.rotation, _0x500ce6, _0x47fe59);
		};

		_0x36c93d.g.exports('PlaceAndSaveObject', _0x1b1f5a);

		let _0x475d34 = false;

		const _0x5ce773 = async (_0x5c8873, _0x4b17e1, _0x3db1d8 = () => true) => {
			var _0x4077c1, _0x115897, _0x55e395, _0x116560;

			if (_0x475d34) return [false, null];

			const _0x453697 = typeof _0x5c8873 === 'string' ? _0x5c8873.trim() : _0x5c8873;

			if (!IsModelValid(_0x453697)) return [false, null];
			_0x475d34 = true, await _0x5a212a(_0x453697);

			const [_0x4f7ff9, _0x62eca7] = GetModelDimensions(_0x453697),
				_0x41f4c7 = _0x2e57e3.mathClass.fromArray(_0x4f7ff9),
				_0x426f61 = _0x2e57e3.mathClass.fromArray(_0x62eca7),
				_0x1725b4 = _0x426f61.sub(_0x41f4c7),
				_0x5a9f1b = PlayerPedId();

			let _0x454119 = (_0x4077c1 = _0x4b17e1.groundSnap) !== null && _0x4077c1 !== undefined ? _0x4077c1 : _0x4b17e1.forceGroundSnap,
				_0x4a3358 = GetEntityHeading(_0x5a9f1b),
				_0x1451da = _0x4b17e1.useModelOffset,
				_0x110712 = true,
				_0x3b2fcf = true,
				_0x385a5e = true,
				_0x1b152c = (_0x115897 = _0x4b17e1.zOffset) !== null && _0x115897 !== undefined ? _0x115897 : 0,
				_0x3180a7 = false;

			const _0x14a077 = (_0x55e395 = _0x4b17e1.alignToSurface) !== null && _0x55e395 !== undefined ? _0x55e395 : false,
				_0xdf9aef = (_0x116560 = _0x4b17e1.surfaceOffset) !== null && _0x116560 !== undefined ? _0x116560 : 0,
				_0x5e8cc2 = CreateObjectNoOffset(_0x453697, 0, 0, 0, false, false, false);

			SetEntityAlpha(_0x5e8cc2, 200, false), SetEntityCollision(_0x5e8cc2, false, false), SetCanClimbOnEntity(_0x5e8cc2, false), SetEntityDrawOutlineColor(255, 0, 0, 128);

			const _0x305332 = setTick(() => {
					const _0x42b270 = {
						'psMhV': function(_0x14bffb, _0xbbf256, _0x3f62d5, _0x17fbfc, _0x347361, _0x26336a, _0x156bfc, _0x35395f) {
							return _0x14bffb(_0xbbf256, _0x3f62d5, _0x17fbfc, _0x347361, _0x26336a, _0x156bfc, _0x35395f);
						},
						'CsfxA': 'arp-objects:prepareObject'
					};

					var _0x59b37c;

					const [_0x331a90, _0x45abb6, _0x305480, _0x4764fe, _0x1aa464, _0x3f22e6] = _0x55bd5c(19, _0x5e8cc2, (_0x59b37c = _0x4b17e1.distance) !== null && _0x59b37c !== undefined ? _0x59b37c : 10);

					if (_0x45abb6) {
						const _0x374c85 = _0x2e57e3.mathClass.fromArray(_0x305480);

						if (!_0x454119 && _0x1451da) {
							_0x374c85.z += _0x1725b4.z / 2;
						}

						let _0x3f7809 = [0, 0, 0];
						_0x14a077 ? (_0x4a3358 = -Math.atan2(_0x4764fe[0], _0x4764fe[1]) * 57.29579999999987 + 180, SetEntityHeading(_0x5e8cc2, _0x4a3358), _0x3f7809 = GetEntityForwardVector(_0x5e8cc2).map(_0x39208a => _0x39208a * _0xdf9aef)) : SetEntityHeading(_0x5e8cc2, _0x4a3358), SetEntityCoords(_0x5e8cc2, _0x374c85.x - _0x3f7809[0], _0x374c85.y - _0x3f7809[1], _0x374c85.z - _0x3f7809[2], false, false, false, false);

						if (_0x454119) {
							PlaceObjectOnGroundProperly_2(_0x5e8cc2);
						}

						if (_0x1b152c !== 0) {
							const _0x5a4658 = _0x2e57e3.mathClass.fromArray(GetEntityCoords(_0x5e8cc2, false));

							_0x374c85.z += _0x1b152c, SetEntityCoords(_0x5e8cc2, _0x5a4658.x, _0x5a4658.y, _0x5a4658.z + _0x1b152c, false, false, false, false);
						}

						const _0x39fef7 = _0x454119 ? _0x2e57e3.mathClass.fromArray(GetEntityCoords(_0x5e8cc2, true)) : _0x374c85,
							_0x36af22 = _0x4b17e1.collision ? !_0xee8616(_0x5e8cc2, _0x5a9f1b, _0x1725b4, _0x39fef7, _0x4b17e1.colZOffset) : true,
							_0xe5b01a = true;

						_0x385a5e = _0x36af22 && _0xe5b01a && _0x3db1d8(_0x39fef7, _0x1aa464, _0x5e8cc2, _0x3f22e6);
						if (_0x385a5e) SetEntityDrawOutline(_0x5e8cc2, false);
						else {
							SetEntityDrawOutline(_0x5e8cc2, true);
						}
					} else _0x385a5e = false;

					_0x4b17e1.afterRender && _0x4b17e1.afterRender(_0x5e8cc2, !!_0x45abb6, _0x385a5e);
				}),
				_0x1bf8ef = setTick(() => {
					const _0x4f3b64 = {
						'owCth': function(_0x41ba98, _0x1993d5) {
							return _0x41ba98(_0x1993d5);
						}
					}; {
						DisableControlAction(0, 44, true), DisableControlAction(0, 46, true), DisableControlAction(0, 140, true), DisableControlAction(0, 20, true), DisableControlAction(0, 16, true), DisableControlAction(0, 17, true), DisableControlAction(0, 36, true);

						const _0x43b649 = IsDisabledControlPressed(0, 36);

						if (IsDisabledControlPressed(2, 17)) {
							if (_0x3180a7) {
								_0x1b152c += _0x43b649 ? 0.09999999999990905 : 0.5;
							} else {
								_0x4a3358 += _0x43b649 ? 1 : 5;
								if (!_0x43b649) _0x4a3358 = Math.round(_0x4a3358);
							}
						} else {
							if (IsDisabledControlPressed(2, 16)) {
								if (_0x3180a7) _0x1b152c -= _0x43b649 ? 0.1000000000003638 : 0.5;
								else {
									_0x4a3358 -= _0x43b649 ? 1 : 5;
									if (!_0x43b649) _0x4a3358 = Math.round(_0x4a3358);
								}
							}
						}

						if (_0x4a3358 > 360) _0x4a3358 -= 360;
						else _0x4a3358 < 0 && (_0x4a3358 += 360);
						_0x4b17e1.groundSnap && !_0x4b17e1.forceGroundSnap && IsDisabledControlJustPressed(0, 44) && (_0x454119 = !_0x454119), _0x4b17e1.useModelOffset && IsDisabledControlJustPressed(0, 140) && (_0x1451da = !_0x1451da);
						_0x4b17e1.adjustZ && IsDisabledControlJustPressed(0, 20) && (_0x3180a7 = !_0x3180a7, SetEntityAlpha(_0x5e8cc2, _0x3180a7 ? 255 : 200, false));

						if (IsDisabledControlJustPressed(0, 200) || IsDisabledControlJustPressed(0, 177)) {
							_0x110712 = false;
						}

						_0x385a5e && IsDisabledControlJustPressed(0, 46) && (_0x3b2fcf = false, _0x110712 = false);
					}
				});

			while (_0x110712) {
				await (0, _0x2e57e3.Delay)(1);
			}

			clearTick(_0x305332), clearTick(_0x1bf8ef);

			const _0x48c6c3 = _0x2e57e3.mathClass.fromArray(GetEntityCoords(_0x5e8cc2, true)),
				_0x29b946 = _0x2e57e3.mathClass.fromArray(GetEntityRotation(_0x5e8cc2, 2)),
				_0x48fcc7 = GetEntityQuaternion(_0x5e8cc2);

			_0x300edf(_0x5e8cc2), _0x475d34 = false;
			if (_0x3b2fcf) return [false, null];
			const _0x29b614 = {};
			return _0x29b614.coords = _0x48c6c3, _0x29b614.rotation = _0x29b946, _0x29b614.quaternion = _0x48fcc7, [true, _0x29b614];
		};

		_0x36c93d.g.exports('PlaceObject', _0x5ce773);

		function _0xee8616(_0x1c398b, _0x22dfac, _0x5aefe7, _0x1f05b0, _0x495ea3) {
			const _0x330c20 = _0x2e57e3.mathClass.fromArray(GetEntityRotation(_0x1c398b, 2)),
				_0xabf70 = _0x2e57e3.mathClass.fromObject(_0x5aefe7).multiplyScalar(0.75),
				_0xd02f84 = StartShapeTestBox(_0x1f05b0.x, _0x1f05b0.y, _0x1f05b0.z + (_0x495ea3 !== null && _0x495ea3 !== undefined ? _0x495ea3 : 0), _0xabf70.x, _0xabf70.y, _0xabf70.z, _0x330c20.x, _0x330c20.y, _0x330c20.z, 2, 83, _0x22dfac, 4),
				[_0x11cc98, _0x255a82] = GetShapeTestResultIncludingMaterial(_0xd02f84);

			return _0x255a82;
		}

		const _0x55bd5c = (_0x1590ea, _0x4008b0, _0x3529e6 = 5) => {
				const _0xc85f18 = GetGameplayCamCoord(),
					[_0x2cdff2, , _0x1a4679] = GetGameplayCamRot(0).map(_0x519736 => Math.PI / 180 * _0x519736),
					_0x3de158 = Math.abs(Math.cos(_0x2cdff2)),
					_0x418bc5 = [-Math.sin(_0x1a4679) * _0x3de158, Math.cos(_0x1a4679) * _0x3de158, Math.sin(_0x2cdff2)],
					_0x12e794 = _0x418bc5.map((_0x20ffc9, _0x21cab8) => _0xc85f18[_0x21cab8] + _0x20ffc9),
					_0x3030b4 = _0x2e57e3.mathClass.fromArray(GetEntityCoords(PlayerPedId(), false)).getDistanceFromArray(GetGameplayCamCoord()),
					_0x2ce6a8 = _0x418bc5.map((_0x3f4610, _0x3c79c4) => _0xc85f18[_0x3c79c4] + _0x3f4610 * (_0x3529e6 + _0x3030b4)),
					_0x299dee = StartShapeTestSweptSphere(_0x12e794[0], _0x12e794[1], _0x12e794[2], _0x2ce6a8[0], _0x2ce6a8[1], _0x2ce6a8[2], 0.1999999999998181, _0x1590ea, _0x4008b0, 7);

				return GetShapeTestResultIncludingMaterial(_0x299dee);
			},
			_0x300edf = _0x37d336 => {
				DoesEntityExist(_0x37d336) && DeleteObject(_0x37d336);
			};

		async function _0x5a212a(_0x4ba75e) {
			if (IsModelValid(_0x4ba75e)) {
				RequestModel(_0x4ba75e);
				let _0x5d54d7 = false;
				setTimeout(() => _0x5d54d7 = true, 3000);

				while (!HasModelLoaded(_0x4ba75e) && !_0x5d54d7) {
					await (0, _0x2e57e3.Delay)(10);
				}

				return !_0x5d54d7;
			}

			return false;
		}

		function _0x69c387(_0x2d98a0, _0x5f3c39) {
			if (_0x348da4 === undefined) return _0x6bea4c();

			let _0x56e125 = {
					'x': _0x2d98a0[0],
					'y': _0x2d98a0[1],
					'z': _0x2d98a0[2]
				},
				_0xac8fc4 = GetEntityCoords(PlayerPedId(), false),
				_0x339409 = GetDistanceBetweenCoords(_0xac8fc4[0], _0xac8fc4[1], _0xac8fc4[2], _0x56e125.x, _0x56e125.y, _0x56e125.z, true);

			if (Number(_0x339409) > 50) {
				emit('DoLongHudText', 'You cannot place the object this far away', 2);
				return;
			}

			_0x327d7e = true, _0x3b3640(_0x56e125);
		}

		function _0x3b3640(_0x3bea72) {
			emitNet('arp-objects:prepareObject', _0x1f9932, _0x3bea72.x, _0x3bea72.y, _0x3bea72.z, _0x4d677d, _0x28b3a5), _0x6bea4c();
		}

		function _0x6bea4c() {
			_0x3b3a33 !== 0 && DeleteObject(_0x3b3a33), _0x4d677d = 0, _0x1f9932 = undefined, _0x348da4 = undefined, _0x327d7e = false;
		}

		function _0x155a15(_0x3b2046, _0x25aeb8) {
			const _0x297369 = {
				'TfzAI': function(_0x190cba, _0x142fcd, _0x1731c6) {
					return _0x190cba(_0x142fcd, _0x1731c6);
				},
				'nrvVc': function(_0x303e0e, _0x3fcbbd, _0x52ad4d, _0x3f2068, _0x514f38, _0x4b9695, _0x217d72, _0x424aa9, _0x4613a7, _0xd70d9d, _0x580176, _0x284185, _0x31f38e, _0x1ccb0e) {
					return _0x303e0e(_0x3fcbbd, _0x52ad4d, _0x3f2068, _0x514f38, _0x4b9695, _0x217d72, _0x424aa9, _0x4613a7, _0xd70d9d, _0x580176, _0x284185, _0x31f38e, _0x1ccb0e);
				},
				'hkXld': function(_0x4c686a, _0xd03f33) {
					return _0x4c686a + _0xd03f33;
				},
				'IJskv': function(_0x116c6c, _0x147773) {
					return _0x116c6c !== _0x147773;
				},
				'PDXcK': function(_0x4c2b3d, _0x40b904) {
					return _0x4c2b3d(_0x40b904);
				}
			}; {
				let _0x539b91 = GetGameplayCamCoord(),
					_0x405c51 = GetGameplayCamRot(0),
					_0x1b8005 = Math.PI / 180 * _0x405c51[0],
					_0x629810 = Math.PI / 180 * _0x405c51[2],
					_0x431354 = Math.abs(Math.cos(_0x1b8005)),
					_0x1b81fb = -Math.sin(_0x629810) * _0x431354,
					_0x2c5d98 = Math.cos(_0x629810) * _0x431354,
					_0x58fb29 = Math.sin(_0x1b8005),
					_0x392615 = {
						'x': _0x1b81fb,
						'y': _0x2c5d98,
						'z': _0x58fb29
					},
					_0x1e00aa = StartShapeTestSweptSphere(_0x539b91[0] + _0x392615.x, _0x539b91[1] + _0x392615.y, _0x539b91[2] + _0x392615.z, _0x539b91[0] + _0x392615.x * 200, _0x539b91[1] + _0x392615.y * 200, _0x539b91[2] + _0x392615.z * 200, 0.2000000000007276, _0x3b2046, _0x25aeb8, 7);

				return GetShapeTestResult(_0x1e00aa);
			}
		}

		function _0x4b600b() {
			const [_0x365eaf, _0x5ebf6a, _0xa5bacd, _0x3767f7, _0x3b5d47] = _0x155a15(1, _0x3b3a33);

			Number(_0x5ebf6a) === 1 && (_0x348da4 = _0xa5bacd);
		}

		on('onResourceStop', _0x1413fa => {
			if (_0x1413fa !== 'arp-objects') return;

			if (_0x3b3a33 !== 0) {
				DeleteObject(_0x3b3a33);
			}
		});
	}();
})();
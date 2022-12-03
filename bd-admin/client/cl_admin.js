(() => {
    'use strict';
    var globalList = {};
    (() => {
        globalList.d = (_0x41d5cf, _0x13fc28) => {
            for (var _0x508bfc in _0x13fc28) {
                if (globalList.o(_0x13fc28, _0x508bfc) && !globalList.o(_0x41d5cf, _0x508bfc)) {
                    Object.defineProperty(_0x41d5cf, _0x508bfc, {
                        enumerable: true,
                        get: _0x13fc28[_0x508bfc]
                    });
                }
            }
        };
    })();
    (() => {
        globalList.g = (function () {
            if (typeof globalThis === "object") {
                return globalThis;
            }
            try {
                return this || new Function("return this")();
            } catch (_0x3b8855) {
                if (typeof window === "object") {
                    return window;
                }
            }
        })();
    })();
    (() => {
        globalList.o = (_0x4d919f, _0xe37928) => Object.prototype.hasOwnProperty.call(_0x4d919f, _0xe37928);
    })();
    (() => {
        globalList.r = _0x1f3431 => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(_0x1f3431, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(_0x1f3431, "__esModule", {
                value: true
            });
        };
    })();
    var actionList = {};
    globalList.r(actionList);
    globalList.d(actionList, {
        blips: () => toggleBlip,
        cloak: () => toggleCloak,
        deleteEntity: () => deleteEntityAction,
        devspawn: () => setDevSpawn,
        fixVehicle: () => fixVehicleAction,
        god: () => toggleGod,
        noclip: () => noclipAction,
        superJump: () => superJumpAction,
        teleport: () => teleportAction,
        teleportCoords: () => teleportCoordsAction,
        teleportMarker: () => teleportMarkerAction
    });;;
    const optionList = [{
        optionName: "toggleBlockEmotes",
        displayName: "Block Emotes",
        optionType: "toggle",
        data: false
    }, {
        optionName: "toggleDefaultMenu",
        displayName: "Large menu is default",
        optionType: "toggle",
        data: true
    }, {
        optionName: "expandedOnPass",
        displayName: "Large menu on 'Pass' menu is default",
        optionType: "toggle",
        data: false
    }, {
        optionName: "showTooltips",
        displayName: "Show Tooltips",
        optionType: "toggle",
        data: true
    }, {
        optionName: "openDefaultMenu",
        displayName: "Open Normal Menu with Bind",
        optionType: "toggle",
        data: true
    }];;
    let adminBinds = [{
        parent: '',
        key: "none"
    }, {
        parent: '',
        key: "adminBind_0"
    }, {
        parent: '',
        key: "adminBind_1"
    }, {
        parent: '',
        key: "adminBind_2"
    }, {
        parent: '',
        key: "adminBind_3"
    }, {
        parent: '',
        key: "adminBind_4"
    }, {
        parent: '',
        key: "adminBind_5"
    }],
        staffOptions = [],
        favCommands = [],
        optionsLoaded = false,
        bindsLoaded = false,
        currentKeybinds = [];
    async function initOptions() {
        return new Promise(resolve => {
            let needUpdate = false;
            const adminOptions = JSON.parse(GetResourceKvpString("Json_adminMenuOptions"));
            if (!optionsLoaded && adminOptions != null) {
                for (const optionName in optionList) {
                    const pOption = optionList[optionName],
                        option = adminOptions.find(_option => _option.optionName === pOption.optionName);
                    if (option == null) {
                        needUpdate = true;
                        adminOptions.push(pOption);
                    }
                }
                optionsLoaded = true;
                if (needUpdate) {
                    setAdminOptions(adminOptions);
                }
            }
            if (adminOptions == null) {
                if (staffOptions.length == 0) {
                    staffOptions = optionList;
                }
            } else {
                staffOptions = adminOptions;
            }
            return resolve(staffOptions);
        });
    }

    function setAdminOptions(_0x394e50) {
        staffOptions = _0x394e50;
        SetResourceKvp("Json_adminMenuOptions", JSON.stringify(staffOptions));
    }
    async function getOption(pOption) {
        if (staffOptions.length == 0) {
            await initOptions();
        }
        const _0x26402d = staffOptions.find(_0x3c2ec8 => _0x3c2ec8.optionName === pOption);
        return _0x26402d;
    }

    function getKeyBinds() {
        const bindOptions = [],
            savedOptions = JSON.parse(GetResourceKvpString("Json_adminKeyOptions_2"));
        if (!bindsLoaded && savedOptions != null) {
            for (const key in adminBinds) {
                const value = adminBinds[key],
                    option = savedOptions.find(_option => _option.key === value.key);
                if (option == null) {
                    savedOptions.push(value);
                }
            }
            bindsLoaded = true;
            adminBinds = savedOptions;
        }
        for (const key in adminBinds) {
            const value = adminBinds[key];
            const bind = {
                text: value.key
            };
            bindOptions.push(bind);
        }
        for (const key in commands) {
            const value = commands[key];
            if (value.adminMenu && value.adminMenu.options.bindKey && value.adminMenu.options.bindKey.options) {
                const title = value.adminMenu.command.title,
                    command = adminBinds.find(_command => _command.parent === title);
                if (command) {
                    value.adminMenu.options.bindKey.value = command.key;
                } else {
                    value.adminMenu.options.bindKey.value = null;
                }
                value.adminMenu.options.bindKey.options = bindOptions;
            }
        }
        return;
    }

    function updateKeybinds(pKeybinds) {
        if (JSON.stringify(currentKeybinds) === JSON.stringify(pKeybinds)) {
            return;
        }
        currentKeybinds = pKeybinds;
        for (const key in pKeybinds) {
            const value = pKeybinds[key];
            if (value == "none") {
                const _0x712c1d = adminBinds.find(_0x1b0d9c => _0x1b0d9c.parent.toLocaleLowerCase() === key.toLocaleLowerCase());
                if (_0x712c1d) {
                    _0x712c1d.parent = '';
                }
                continue;
            }
            if (value == null) {
                continue;
            }
            const _0x1ab8bd = adminBinds.find(_0x333b9c => _0x333b9c.key === value);
            if (_0x1ab8bd) {
                _0x1ab8bd.parent = key;
            }
            for (const _0x4fe9b8 in adminBinds) {
                const _0x51041e = adminBinds[_0x4fe9b8];
                if (_0x51041e.parent == key && _0x51041e.key != value) {
                    _0x51041e.parent = '';
                }
            }
        }
        SetResourceKvp("Json_adminKeyOptions_2", JSON.stringify(adminBinds));
        getKeyBinds();
        const _0x3ef54b = [];
        for (const _0x1e8ec4 in commands) {
            const _0x487fed = commands[_0x1e8ec4];
            _0x3ef54b.push(_0x487fed.adminMenu);
        }
        global.exports["bd-adminUI"].updateMenuData(_0x3ef54b);
        return;
    }
    async function getFavCommands() {
        const _favCommands = JSON.parse(GetResourceKvpString("Json_adminMenuFavCommands"));
        if (_favCommands == null) {
            return [];
        }
        return _favCommands;
    }

    function updateFavCommands(pCommands) {
        favCommands = pCommands;
        SetResourceKvp("Json_adminMenuFavCommands", JSON.stringify(favCommands));
    };
    let commands = [],
        selection = null;
    async function doNothing() { }

    function deSelectOption() {
        if (adminMode) {
            deSelect();
            return;
        }
    }

    function deSelect() {
        global.exports["bd-selector"].deselect();
    }
    async function selectEntity() {
        const isAdmin = await RPC.execute("bd:admin:isAdmin");
        if (isAdmin) {
            if (!adminMode) {
                return;
            }
            global.exports["bd-selector"].startSelecting(-1, PlayerPedId(), (_0x41ab31, _0x4aca27, _0x4949aa) => _0x4aca27 === 1 || _0x4aca27 === 2 || _0x4aca27 === 3);
        }
    }

    function deselectEntity() {
        if (!adminMode) {
            return;
        }
        selection = global.exports["bd-selector"].stopSelecting();
        if (selection.selectedEntity) {
            getDataForThing(selection.selectedEntity);
        } else {
            global.exports["bd-adminUI"].setCommandUI(null);
            global.exports["bd-selector"].deselect();
        }
    }
    async function openMenu() {
        const isAdmin = await RPC.execute("bd:admin:isAdmin");
        if (isAdmin) {
            const option = await getOption("openDefaultMenu");
            commands = await RPC.execute("bd:admin:getCommandUI");
            setCommands(commands);
            if (option.data) {
                initializeList(2);
            } else {
                initializeList(3);
            }
        }
    }
    RegisterCommand("+adminSelect", () => selectEntity(), false);
    RegisterCommand("-adminSelect", () => deselectEntity(), false);
    RegisterCommand("+adminDeleteEntity", () => deleteEntity(), false);
    RegisterCommand("-adminDeleteEntity", () => { }, false);
    RegisterCommand("+openAdminMenu", () => openMenu(), false);
    RegisterCommand("-openAdminMenu", () => { }, false);
    global.exports["bd-keybinds"].registerKeyMapping('', "zzAdmin", "Delete Target", "+adminDeleteEntity", "-adminDeleteEntity", '');
    global.exports["bd-keybinds"].registerKeyMapping('', "zzAdmin", "Select Target", "+adminSelect", "-adminSelect", '');
    global.exports["bd-keybinds"].registerKeyMapping('', "zzAdmin", "Open Menu", "+openAdminMenu", "-openAdminMenu", '');
    global.exports("enterSelection", selectEntity);
    async function getDataForThing(pEntity) {
        const entityType = GetEntityType(pEntity);
        let command = [],
            pData = {};
        switch (entityType) {
            case 0:
                command = null;
                break;
            case 1:
                if (IsEntityAPed(pEntity) && IsPedAPlayer(pEntity)) {
                    command = _0x2c25a3(1, null);
                    const pPlayerId = getPlayerId(pEntity),
                        pUserData = await RPC.execute("bd:admin:getUserData", pPlayerId);
                    pData = {
                        name: pUserData.name,
                        steamid: pUserData.steamid,
                        serverID: pPlayerId,
                        charID: pUserData.character.id,
                        cash: pUserData.character.cash
                    };
                } else {
                    if (IsEntityAPed(pEntity)) {
                        command = _0x2c25a3(-1, null);
                        pData = {
                            name: "Local"
                        };
                    }
                }
                break;
            case 2:
                command = _0x2c25a3(2, -1);
                pData = {
                    name: GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(pEntity)))
                };
                const _0xf2064f = exports["bd-vehicles"].GetVehicleIdentifier(pEntity);
                let _0x487816 = null;
                if (_0xf2064f) {
                    _0x487816 = await RPC.execute("bd:admin:getVehicleInfo", _0xf2064f);
                }
                if (_0x487816) {
                    pData.vin = _0x487816.vin;
                    pData.plate = GetVehicleNumberPlateText(pEntity);
                    pData.cid = _0x487816.cid;
                    pData.size = _0x487816.size;
                    pData.lastGarage = _0x487816.garage;
                    pData.mileage = _0x487816.metadata.mileage;
                    pData.fuel = _0x487816.metadata.fuel;
                } else {
                    pData.size = GetVehicleModelNumberOfSeats(GetEntityModel(pEntity));
                }
                break;
            case 3:
                command = _0x2c25a3(3, -1);
                pData = {
                    name: '' + pEntity
                };
                break;
        }
        global.exports["bd-adminUI"].setCommandUI(command, pData, 1);
    }
    async function setCommands(pCommands) {
        commands = pCommands;
    }

    function closeMenu() {
        global.exports["bd-adminUI"].setCommandUI(null);
        global.exports["bd-adminUI"].exitNUI();
        global.exports["bd-selector"].deselect();
    }

    function getPlayerId(pPlayer) {
        return GetPlayerServerId(NetworkGetPlayerIndexFromPed(pPlayer));
    }

    function _0x2c25a3(_0x495815, _0x1f74c3) {
        const _0x3ae1d0 = [];
        for (const _0x18f6f1 in commands) {
            const _0x192dfd = commands[_0x18f6f1].selection;
            if (!_0x192dfd) {
                continue;
            }
            if (_0x192dfd.entityType == _0x495815 || _0x1f74c3 != null && _0x192dfd.entityType == _0x1f74c3) {
                _0x3ae1d0.push(_0x192dfd);
            }
        }
        return _0x3ae1d0;
    }
    async function deleteEntity() {
        const isAdmin = await RPC.execute("bd:admin:isAdmin");
        if (isAdmin) {
            const entity = selection.selectedEntity;
            if (selection.selectedEntity) {
                const type = GetEntityType(entity);
                if (type >= 1 && !IsPedAPlayer(entity)) {
                    RPC.execute("bd:admin:runCommandFromClient", "deleteEntity", {
                        entity: entity
                    });
                }
            }
        }
    }
    RegisterNuiCallbackType("runCommand");
    on("__cfx_nui:runCommand", (data, cb) => {
        if (selection.selectedEntity != null) {
            data.entity = selection.selectedEntity;
            if (IsEntityAPed(data.entity) && IsPedAPlayer(data.entity)) {
                data.targetSrc = getPlayerId(data.entity);
            }
            RPC.execute("bd:admin:runCommandFromClient", data.action, data);
        }
        cb();
    });;
    const pLogs = new Map();

    function getLog(pAction) {
        return pLogs.get(pAction);
    }

    function doLog(pAction, pValue) {
        pLogs.set(pAction, pValue);
        return;
    };
    let definedNames = [],
        vehicleList = [],
        validItems = [],
        jobsTable = [],
        validLicenses = [],
        bindsRegistered = false;
    async function doNothing3() { }
    let adminMode = false;
    RegisterNuiCallbackType("adminMenu");
    on("__cfx_nui:adminMenu", async (data, cb) => {
        switch (data.action) {
            case "updatePlayerLogs":
                updatePlayerLogs(data.searchParam);
                break;
            case "updateOptions":
                setAdminOptions(data.options);
                break;
            case "updateKeybinds":
                updateKeybinds(data.keyBinds);
                break;
            case "updateFavCommands":
                updateFavCommands(data.favCommands);
                break;
            case "getDefinedNames":
                await getDefinedNames(data.playerList);
                break;
            case "updateCommandState":
                RPC.execute("bd:admin:runCommandFromClient", data.commandAction, data.commandData);
                break;
            case "toggleAdminMode":
                adminMode = !adminMode;
                emit("bd-admin:currentDevmode", adminMode);
                global.exports["bd-adminUI"].updateAdminMode(adminMode);
                break;
            case "runEvent":
                emit(data.event);
                break;
            case "clearDefinedNames":
                definedNames = [];
                break;
        }
        cb();
    });
    RegisterNuiCallbackType("runCommandMenu");
    on("__cfx_nui:runCommandMenu", (data, cb) => {
        RPC.execute("bd:admin:runCommandFromClient", data.action, data.data);
        cb();
    });
    async function updatePlayerLogs(pData) {
        const logs = await RPC.execute("bd:admin:getPlayerLogs", pData);
        global.exports["bd-adminUI"].updatePlayerLogs(logs);
    }
    async function initializeList(type) {
        getKeyBinds();
        const players = await RPC.execute("bd:admin:getPlayerList"),
            menuData = [];
        for (const key in commands) {
            const value = commands[key],
                cmdData = value.adminMenu;
            if (cmdData && cmdData.command && (cmdData.command.child == false || cmdData.command.child == true)) {
                const action = getLog(cmdData.command.action);
                if (action == null || !action) {
                    doLog(cmdData.command.action, false);
                }
                commands[key].adminMenu.command.child = getLog(cmdData.command.action);
            }
            menuData.push(value.adminMenu);
        }
        const commandList = {
            playerData: players.CurrentPlayers,
            options: await initOptions(),
            menuData: menuData,
            playerLogs: null,
            adminMode: adminMode,
            itemList: await getValidItems(),
            vehicleList: await getValidVehicles(),
            jobList: await getValidJobs(),
            licenseList: await getValidLicenses(),
            favCommands: await getFavCommands(),
            disconnectedPlayers: players.Disconnected,
            bannedList: players.Banned
        };
        global.exports["bd-adminUI"].setCommandUI(commandList, null, type);
        if (definedNames && definedNames.length != 0) {
            await getDefinedNames(definedNames);
        }
    }
    async function getDefinedNames(pDefinedNames) {
        if (pDefinedNames == "empty") {
            definedNames = null;
            return;
        }
        const _definedNames = await RPC.execute("bd:admin:getDefinedNames", pDefinedNames);
        definedNames = pDefinedNames;
        global.exports["bd-adminUI"].updateDefinedNames(_definedNames);
    }
    async function executeBind(pKey) {
        if (!adminMode) {
            return;
        }
        if (commands == null || commands.length <= 0) {
            const _commands = await RPC.execute("bd:admin:getCommandUI");
            await setCommands(_commands);
        }
        const bind = adminBinds.find(_0x35879c => _0x35879c.key === pKey);
        if (bind) {
            const command = commands.find(_command => _command.adminMenu != null && _command.adminMenu.command.title.toLowerCase() === bind.parent.toLowerCase());
            if (command == null) {
                return;
            }
            const data = {
                toggle: !getLog(command.adminMenu.command.action)
            };
            RPC.execute("bd:admin:runCommandFromClient", command.adminMenu.command.action, data);
        }
    }
    async function getValidVehicles() {
        if (vehicleList.length >= 1) {
            return vehicleList;
        }
        const [vehicles] = await RPC.execute("showroom:getCarConfig"),
            vehicleTable = [];

        for (const id in vehicles) {
            const vehicle = vehicles[id];
            if (vehicle) {
                let vehicleName = GetLabelText(GetDisplayNameFromVehicleModel(vehicle.model))
                if (vehicleName == "NULL") {
                    vehicleName = GetDisplayNameFromVehicleModel(vehicle.model)
                }

                vehicleTable.push({
                    model: vehicle.model,
                    name: vehicleName
                });
            }
        }
        vehicleList = vehicleTable;
        return vehicleTable;
    }
    async function getValidItems() {
        if (validItems.length >= 1) {
            return validItems;
        }
        validItems = global.exports["bd-inventory"].getItemListNames();
        return validItems;
    }
    async function getValidJobs() {
        if (jobsTable.length >= 1) {
            return jobsTable;
        }
        const validJobs = global.exports["bd-base"].getModule("JobManager").ValidJobs,
            table = [];
        for (const jobname in validJobs) {
            if (validJobs) {
                const job = validJobs[jobname];
                if (job) {
                    table.push({
                        job: jobname,
                        name: job.name
                    });
                }
            }
        }
        jobsTable = table;
        return jobsTable;
    }
    async function getValidLicenses() {
        if (validLicenses.length >= 1) {
            return validLicenses;
        }
        const availableLicenses = await RPC.execute("bd-admin:getValidLicenses"),
            licenses = [];
        for (const id in availableLicenses) {
            const license = availableLicenses[id];
            if (license) {
                licenses.push({
                    licenseID: id,
                    name: license.name
                });
            }
        }
        validLicenses = licenses;
        return validLicenses;
    }

    function registerBinds() {
        if (bindsRegistered) {
            return;
        }
        getKeyBinds();
        getValidVehicles();
        for (const bind in adminBinds) {
            const adminBind = adminBinds[bind];
            if (adminBind.key != "none") {
                RegisterCommand('+' + adminBind.key, () => executeBind(adminBind.key), false);
                RegisterCommand('-' + adminBind.key, () => { }, false);
                global.exports["bd-keybinds"].registerKeyMapping('', "zzAdmin", adminBind.key, '+' + adminBind.key, '-' + adminBind.key, '');
            }
        }
        bindsRegistered = true;
    };
    var _getRank;
    (function (pRank) {
        pRank[pRank.owner = 99] = "owner";
        pRank[pRank.dev = 10] = "dev";
        pRank[pRank.special = 9] = "special";
        pRank[pRank.admin = 8] = "admin";
        pRank[pRank.mod = 7] = "mod";
        pRank[pRank.helper = 6] = "helper";
        pRank[pRank.user = 0] = "user";
    })(_getRank || (_getRank = {}));;
    class formatCoords {
        constructor(_0x2f115e = 0, _0x49c94d = 0, _0x399f56 = 0) {
            this.x = _0x2f115e;
            this.y = _0x49c94d;
            this.z = _0x399f56;
        }
        ["setFromArray"](_0x5e6628) {
            this.x = _0x5e6628[0];
            this.y = _0x5e6628[1];
            this.z = _0x5e6628[2];
            return this;
        }
        ["getArray"]() {
            return [this.x, this.y, this.z];
        }
        ["add"](_0x577068) {
            this.x += _0x577068.x;
            this.y += _0x577068.y;
            this.z += _0x577068.z;
            return this;
        }
        ["addScalar"](_0x3cec5f) {
            this.x += _0x3cec5f;
            this.y += _0x3cec5f;
            this.z += _0x3cec5f;
            return this;
        }
        ["sub"](_0x433de8) {
            this.x -= _0x433de8.x;
            this.y -= _0x433de8.y;
            this.z -= _0x433de8.z;
            return this;
        }
        ["addPlusScaler"](_0x4ae6bb, _0x312d60) {
            this.x += _0x4ae6bb.x * _0x312d60;
            this.y += _0x4ae6bb.y * _0x312d60;
            this.z += _0x4ae6bb.z * _0x312d60;
            return this;
        }
        ["subPlusScaler"](_0x3c1021, _0x43b5c6) {
            this.x -= _0x3c1021.x * _0x43b5c6;
            this.y -= _0x3c1021.y * _0x43b5c6;
            this.z -= _0x3c1021.z * _0x43b5c6;
            return this;
        }
        ["equals"](_0x197093) {
            return this.x === _0x197093.x && this.y === _0x197093.y && this.z === _0x197093.z;
        }
        ["subScalar"](_0x1ce594) {
            this.x -= _0x1ce594;
            this.y -= _0x1ce594;
            this.z -= _0x1ce594;
            return this;
        }
        ["multiply"](_0x2f3ec0) {
            this.x *= _0x2f3ec0.x;
            this.y *= _0x2f3ec0.y;
            this.z *= _0x2f3ec0.z;
            return this;
        }
        ["multiplyScalar"](_0x4082db) {
            this.x *= _0x4082db;
            this.y *= _0x4082db;
            this.z *= _0x4082db;
            return this;
        }
        ["round"]() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            this.z = Math.round(this.z);
            return this;
        }
        ["floor"]() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            this.z = Math.floor(this.z);
            return this;
        }
        ["ceil"]() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            this.z = Math.ceil(this.z);
            return this;
        }
        ["getDistance"](_0x3dad86) {
            const [_0x3afbe0, _0x3b3f19, _0xa74551] = [this.x - _0x3dad86.x, this.y - _0x3dad86.y, this.z - _0x3dad86.z];
            return Math.sqrt(_0x3afbe0 * _0x3afbe0 + _0x3b3f19 * _0x3b3f19 + _0xa74551 * _0xa74551);
        }
        ["getDistanceFromArray"](_0x4bc89a) {
            const [_0x16c9dc, _0x11debb, _0x1916c8] = [this.x - _0x4bc89a[0], this.y - _0x4bc89a[1], this.z - _0x4bc89a[2]];
            return Math.sqrt(_0x16c9dc * _0x16c9dc + _0x11debb * _0x11debb + _0x1916c8 * _0x1916c8);
        }
        ["isCoordinateEqual"](_0x546b9f, _0x391563) {
            return _0x546b9f.equals(_0x391563);
        }
        static ["fromArray"](_0x149c0b) {
            return new formatCoords(_0x149c0b[0], _0x149c0b[1], _0x149c0b[2]);
        }
    };
    async function Delay(ms) {
        return new Promise(res => setTimeout(() => res(), ms));
    }

    function _0x1722cc(_0x5b376b) {
        const _0x5e1171 = [];
        _0x5b376b.forEach((_0x34c7be, _0x3ea86d) => _0x5e1171.push({
            key: _0x3ea86d,
            value: _0x34c7be
        }));
        return _0x5e1171;
    }

    async function doCoords(coords) {
        const regexTemplate = /s?(-?\d{1,}\.?,?\d{1,})/g,
            _0x85f90a = coords.match(regexTemplate),
            _0x520640 = new formatCoords(+_0x85f90a[0x0], +_0x85f90a[0x1], +_0x85f90a[0x2]);

        return _0x520640;
    }

    function _0x1b4ae7(_0x5c3311) {
        const _0x60658f = new Map();
        _0x5c3311.forEach(_0x815f8d => _0x60658f.set(_0x815f8d.key, _0x815f8d.value));
        return _0x60658f;
    };
    const teleportAction = {
        name: "teleport",
        value: _getRank.admin,
        executedFuntion: async function _0x517b21(pSource, pData) {
            const targetCoords = exports["bd-infinity"].GetPlayerCoords(pData.target.source, true),
                formatedCoords = new formatCoords(targetCoords[0], targetCoords[1], targetCoords[2]),
                playerId = PlayerPedId();
            if (formatedCoords.isCoordinateEqual(formatedCoords, new formatCoords(0, 0, 0))) {
                return "Faile to find player";
            }
            RequestCollisionAtCoord(formatedCoords.x, formatedCoords.y, formatedCoords.z);
            SetPedCoordsKeepVehicle(playerId, formatedCoords.x, formatedCoords.y, formatedCoords.z);
            FreezeEntityPosition(playerId, true);
            SetPlayerInvincible(playerId, true);
            const _0x250eae = GetGameTimer();
            while (!HasCollisionLoadedAroundEntity(playerId)) {
                if (GetGameTimer() - _0x250eae > 5000) {
                    break;
                }
                await Delay(10);
            }
            FreezeEntityPosition(playerId, false);
            SetPlayerInvincible(playerId, false);
            return '' + pData.target.name;
        },
        log: "Teleported to ",
        target: true,
        canTargetAbove: true,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Teleport",
                    cat: "Player",
                    child: {
                        inputs: ["Target"]
                    }
                },
                options: {
                    bindKey: null
                }
            }
        }
    };;
    const fixVehicleAction = {
        name: "fixVehicle",
        value: _getRank.dev,
        executedFuntion: async function _0x2bfc6b(pSource, pData) {
            const _0x2232ef = PlayerPedId(),
                _0x1ed6bd = GetVehiclePedIsIn(_0x2232ef, false);
            if (!_0x1ed6bd) {
                return '';
            }
            exports["bd-sync"].SyncedExecution("SetVehicleEngineHealth", _0x1ed6bd, 1000);
            exports["bd-sync"].SyncedExecution("SetVehicleBodyHealth", _0x1ed6bd, 1000);
            exports["bd-sync"].SyncedExecution("SetVehicleDeformationFixed", _0x1ed6bd);
            exports["bd-sync"].SyncedExecution("SetVehicleFixed", _0x1ed6bd);
            return '';
        },
        log: "Fixed current Vehicle.",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Fix Vehicle",
                    cat: "Player",
                    child: null
                },
                options: {
                    bindKey: {
                        value: null,
                        options: []
                    }
                }
            }
        }
    };;
    const teleportCoordsAction = {
        name: "teleportCoords",
        value: _getRank.admin,
        executedFuntion: async function _0x5c92eb(pSource, pData) {
            const coords = await doCoords(pData.Coords),
                playerPed = PlayerPedId();

            if (coords.isCoordinateEqual(coords, new formatCoords(0, 0, 0))) {
                return 'Failed to find Coords';
            }

            const playerCoords = GetEntityCoords(playerPed, false);

            doLog('lastCoords', [playerCoords[0], playerCoords[1], playerCoords[2]]), RequestCollisionAtCoord(coords.x, coords.y, coords.z), SetPedCoordsKeepVehicle(playerPed, coords.x, coords.y, coords.z), FreezeEntityPosition(playerPed, true), SetPlayerInvincible(playerPed, true);

            const gameTimer = GetGameTimer();

            while (!HasCollisionLoadedAroundEntity(playerPed)) {
                if (GetGameTimer() - gameTimer > 5000) {
                    break;
                }

                await Delay(10);
            }

            return FreezeEntityPosition(playerPed, false), SetPlayerInvincible(playerPed, false), '' + coords.x + ' ' + coords.y + ' ' + coords.z;
        },
        log: "Teleported to Coord ",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Teleport Coords",
                    cat: "Player",
                    child: {
                        inputs: ["Coords"]
                    }
                },
                options: {
                    bindKey: null
                }
            }
        }
    };;
    const toggleGod = {
        name: "god",
        value: _getRank.admin,
        executedFuntion: async function _0x4b1577(pSource, pData) {
            let god = false;
            if (pData.toggle != null) {
                god = pData.toggle;
            }
            doLog("god", god);
            emit("carandplayerhud:godCheck", god);
            if (god && await getLog("godTimer") != null) {
                return '' + god + ')';
            } else {
                if (!god) {
                    godTimer();
                    return '' + god + ')';
                }
            }
            await doLog("godTimer", setInterval(godEnable, 10));
            async function godEnable() {
                SetPlayerInvincible(PlayerId(), true);
            }
            async function godTimer() {
                clearInterval(await getLog("godTimer"));
                await doLog("godTimer", null);
                SetPlayerInvincible(PlayerId(), false);
            }
            return '' + god + ')';
        },
        log: "set into god mode (",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "God",
                    cat: "Player",
                    child: false
                },
                options: {
                    bindKey: {
                        value: null,
                        options: []
                    }
                }
            }
        }
    };;
    const setDevSpawn = {
        name: "devspawn",
        value: _getRank.dev,
        executedFuntion: async function _0x3faabf(pSource, pData) {
            const _0x41f1e6 = PlayerPedId(),
                _0x1682a4 = GetEntityCoords(_0x41f1e6, false),
                _0x2efa41 = GetEntityHeading(_0x41f1e6);
            const _0x30a683 = {
                x: _0x1682a4[0],
                y: _0x1682a4[1],
                z: _0x1682a4[2],
                w: _0x2efa41
            };
            exports.storage.setDev(_0x30a683, "devspawn");
            return '' + _0x30a683.x + ' ' + _0x30a683.y + ' ' + _0x30a683.z;
        },
        log: "Changed their dev spawn. ",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Dev Spawn",
                    cat: "Utility",
                    child: null
                },
                options: {
                    bindKey: null
                }
            }
        }
    };;
    let _0x481483 = null,
        _0x2be047 = 1;
    const _0xa9c07f = 0x20;
    let _0x567dd2 = null,
        _0x27e553 = null,
        _0x474d53 = null;
    const _0x4dee5f = -89,
        _0x17f98b = 0x59;
    async function _0x554bf9(_0x483ec7) {
        const _0x1197ef = PlayerPedId(),
            _0x2eaa79 = GetVehiclePedIsIn(_0x1197ef, false);
        let _0x163ff0 = null,
            _0x3250f2 = false;
        if (_0x483ec7) {
            if (_0x2eaa79 != 0) {
                _0x3250f2 = true;
                _0x474d53 = _0x2eaa79;
                _0x163ff0 = _0x2eaa79;
            } else {
                _0x163ff0 = _0x1197ef;
            }
            _0x481483 = await _0xc7a02(_0x163ff0, _0x1197ef, _0x3250f2);
        } else {
            await _0xe4ca89(_0x481483, _0x1197ef);
            _0x481483 = null;
            clearTick(_0x567dd2);
            clearTick(_0x27e553);
            return;
        }
        _0x567dd2 = setTick(() => {
            _0x209abb(_0x163ff0, _0x1197ef, _0x3250f2);
        });
        _0x27e553 = setTick(() => {
            _0x572525();
        });
    }
    async function _0xe4ca89(_0x69f52b, _0x2cdf2b) {
        DestroyCam(_0x69f52b, false);
        RenderScriptCams(false, false, 0xbb8, true, false);
        let _0x211c2b = null,
            _0x31bfa4 = null;
        if (_0x474d53 != null) {
            _0x211c2b = _0x474d53;
            _0x31bfa4 = true;
        } else {
            _0x211c2b = _0x2cdf2b;
        }
        FreezeEntityPosition(_0x211c2b, false);
        ApplyForceToEntityCenterOfMass(_0x211c2b, 0, 0, 0, 0, false, false, false, false);
        SetEntityCollision(_0x211c2b, true, true);
        SetEntityAlpha(_0x211c2b, 0xff, null);
        SetPedCanRagdoll(_0x2cdf2b, true);
        SetEntityVisible(_0x211c2b, true, false);
        ClearPedTasksImmediately(_0x2cdf2b);
        if (_0x31bfa4) {
            FreezeEntityPosition(_0x2cdf2b, false);
            SetEntityCollision(_0x2cdf2b, true, true);
            SetEntityAlpha(_0x2cdf2b, 0xff, null);
            SetEntityVisible(_0x2cdf2b, true, false);
            SetPedIntoVehicle(_0x2cdf2b, _0x211c2b, -1);
        }
        _0x474d53 = null;
    }
    async function _0xc7a02(_0xd71cb8, _0xda38ea, _0x25735e) {
        const _0x148ed0 = GetEntityCoords(_0xd71cb8, false),
            _0x2c6640 = GetEntityRotation(_0xd71cb8, 0),
            _0x4bdae1 = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", _0x148ed0[0], _0x148ed0[1], _0x148ed0[2], 0, 0, _0x2c6640[2], 0x4b, true, 2);
        AttachCamToEntity(_0x4bdae1, _0xd71cb8, 0, 0, 0, true);
        RenderScriptCams(true, false, 0xbb8, true, false);
        FreezeEntityPosition(_0xd71cb8, true);
        SetEntityCollision(_0xd71cb8, false, false);
        SetEntityAlpha(_0xd71cb8, 0, null);
        SetPedCanRagdoll(_0xda38ea, false);
        SetEntityVisible(_0xd71cb8, false, false);
        ClearPedTasksImmediately(_0xda38ea);
        if (_0x25735e) {
            FreezeEntityPosition(_0xda38ea, true);
            SetEntityCollision(_0xda38ea, false, false);
            SetEntityAlpha(_0xda38ea, 0, null);
            SetEntityVisible(_0xda38ea, false, false);
        }
        return _0x4bdae1;
    }

    function _0x2c2e89(_0x1ccbf3, _0x363d51, _0x5b14a5, _0x2a5ac3, _0x261379) {
        let _0x2f5d13 = new formatCoords(0, 0, 0);
        const _0x19fadb = GetEntityCoords(_0x363d51, false),
            _0x397072 = new formatCoords(_0x19fadb[0], _0x19fadb[1], _0x19fadb[2]);
        if (_0x1ccbf3) {
            _0x2f5d13 = _0x397072.addPlusScaler(_0x5b14a5, _0x2a5ac3 * _0x261379);
        } else {
            _0x2f5d13 = _0x397072.subPlusScaler(_0x5b14a5, _0x2a5ac3 * _0x261379);
        }
        return _0x2f5d13;
    }

    function _0x209abb(_0x199f99, _0x533bd0, _0x2b3c6f) {
        const _0x36be69 = GetCamMatrix(_0x481483),
            _0x573951 = new formatCoords(_0x36be69[1][0], _0x36be69[1][1], _0x36be69[1][2]);
        if (IsDisabledControlPressed(2, 0x11)) {
            _0x2be047 = Math.min(_0x2be047 + 0.1, _0xa9c07f);
        } else {
            if (IsDisabledControlPressed(2, 0x10)) {
                _0x2be047 = Math.max(0.1, _0x2be047 - 0.1);
            }
        }
        let _0x336e31 = 1;
        if (IsDisabledControlPressed(2, 0xd1)) {
            _0x336e31 = 2;
        } else {
            if (IsDisabledControlPressed(2, 0x13)) {
                _0x336e31 = 0x4;
            } else {
                if (IsDisabledControlPressed(2, 0x24)) {
                    _0x336e31 = 0.25;
                }
            }
        }
        if (IsDisabledControlPressed(2, 0x20)) {
            const _0xb92f07 = _0x2c2e89(true, _0x533bd0, _0x573951, _0x2be047, _0x336e31);
            SetEntityCoordsNoOffset(_0x533bd0, _0xb92f07.x, _0xb92f07.y, _0xb92f07.z, false, false, false);
            if (_0x2b3c6f) {
                SetEntityCoordsNoOffset(_0x199f99, _0xb92f07.x, _0xb92f07.y, _0xb92f07.z, false, false, false);
            }
        } else {
            if (IsDisabledControlPressed(2, 0x21)) {
                const _0x2f07a3 = _0x2c2e89(false, _0x533bd0, _0x573951, _0x2be047, _0x336e31);
                SetEntityCoordsNoOffset(_0x533bd0, _0x2f07a3.x, _0x2f07a3.y, _0x2f07a3.z, false, false, false);
                if (_0x2b3c6f) {
                    SetEntityCoordsNoOffset(_0x199f99, _0x2f07a3.x, _0x2f07a3.y, _0x2f07a3.z, false, false, false);
                }
            }
        }
        if (IsDisabledControlPressed(2, 0x22)) {
            const _0x76cf85 = GetOffsetFromEntityInWorldCoords(_0x199f99, -_0x2be047 * _0x336e31, 0, 0);
            SetEntityCoordsNoOffset(_0x533bd0, _0x76cf85[0], _0x76cf85[1], GetEntityCoords(_0x199f99, false)[2], false, false, false);
            if (_0x2b3c6f) {
                SetEntityCoordsNoOffset(_0x199f99, _0x76cf85[0], _0x76cf85[1], GetEntityCoords(_0x199f99, false)[2], false, false, false);
            }
        } else {
            if (IsDisabledControlPressed(2, 0x23)) {
                const _0x27bd78 = GetOffsetFromEntityInWorldCoords(_0x199f99, _0x2be047 * _0x336e31, 0, 0);
                SetEntityCoordsNoOffset(_0x533bd0, _0x27bd78[0], _0x27bd78[1], GetEntityCoords(_0x199f99, false)[2], false, false, false);
                if (_0x2b3c6f) {
                    SetEntityCoordsNoOffset(_0x199f99, _0x27bd78[0], _0x27bd78[1], GetEntityCoords(_0x199f99, false)[2], false, false, false);
                }
            }
        }
        if (IsDisabledControlPressed(2, 0x33)) {
            const _0x486a82 = GetOffsetFromEntityInWorldCoords(_0x199f99, 0, 0, _0x336e31 * _0x2be047 / 2);
            SetEntityCoordsNoOffset(_0x533bd0, _0x486a82[0], _0x486a82[1], _0x486a82[2], false, false, false);
            if (_0x2b3c6f) {
                SetEntityCoordsNoOffset(_0x199f99, _0x486a82[0], _0x486a82[1], _0x486a82[2], false, false, false);
            }
        } else {
            if (IsDisabledControlPressed(2, 0x34)) {
                const _0x330b80 = GetOffsetFromEntityInWorldCoords(_0x199f99, 0, 0, _0x336e31 * -_0x2be047 / 2);
                SetEntityCoordsNoOffset(_0x533bd0, _0x330b80[0], _0x330b80[1], _0x330b80[2], false, false, false);
                if (_0x2b3c6f) {
                    SetEntityCoordsNoOffset(_0x199f99, _0x330b80[0], _0x330b80[1], _0x330b80[2], false, false, false);
                }
            }
        }
        const _0x39288d = GetCamRot(_0x481483, 2);
        SetEntityHeading(_0x199f99, (0x168 + _0x39288d[2]) % 0x168);
        SetEntityVisible(_0x199f99, false, null);
        if (_0x2b3c6f) {
            SetEntityVisible(_0x533bd0, false, null);
        }
        DisableControlAction(2, 0x20, true);
        DisableControlAction(2, 0x21, true);
        DisableControlAction(2, 0x22, true);
        DisableControlAction(2, 0x23, true);
        DisableControlAction(2, 0x24, true);
        DisableControlAction(2, 0xc, true);
        DisableControlAction(2, 0xd, true);
        DisableControlAction(2, 0xe, true);
        DisableControlAction(2, 0xf, true);
        DisableControlAction(2, 0x10, true);
        DisableControlAction(2, 0x11, true);
        DisablePlayerFiring(PlayerId(), true);
    }

    function _0x572525() {
        const _0x4ed4c1 = GetDisabledControlNormal(0, 0xdc),
            _0x1d9edd = GetDisabledControlNormal(0, 0xdd);
        if (Math.abs(_0x4ed4c1) > 0 && Math.abs(_0x1d9edd) > 0) {
            const _0x25252d = GetCamRot(_0x481483, 2),
                _0x16d30d = _0x25252d[2] + _0x4ed4c1 * -10,
                _0x257dc7 = _0x1d9edd * -5;
            let _0x4a8369 = _0x25252d[0];
            if (_0x4a8369 + _0x257dc7 > _0x4dee5f && _0x4a8369 + _0x257dc7 < _0x17f98b) {
                _0x4a8369 = _0x25252d[0] + _0x257dc7;
            }
            SetCamRot(_0x481483, _0x4a8369, _0x25252d[1], _0x16d30d, 2);
        }
    };
    const noclipAction = {
        name: "noclip",
        value: _getRank.admin,
        executedFuntion: async function _0x1cf13d(pSource, pData) {
            let _0x53d718 = false;
            if (pData.toggle != null) {
                _0x53d718 = pData.toggle;
            }
            doLog("noclip", _0x53d718);
            _0x554bf9(_0x53d718);
            return '' + _0x53d718 + ')';
        },
        log: "Nocliped (",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Noclip",
                    cat: "Player",
                    child: false
                },
                options: {
                    bindKey: {
                        value: null,
                        options: []
                    }
                }
            }
        }
    };;
    const toggleCloak = {
        name: "cloak",
        value: _getRank.admin,
        executedFuntion: async function _0xef958d(pSource, pData) {
            let cloak = false;
            if (pData.toggle != null) {
                cloak = pData.toggle;
            }
            doLog("cloak", cloak);
            RPC.execute("bd:admin:cloak", cloak);
            return '' + cloak + ')';
        },
        log: "Toggled Cloaked (",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Cloak",
                    cat: "Player",
                    child: false
                },
                options: {
                    bindKey: {
                        value: null,
                        options: []
                    }
                }
            }
        }
    };;
    class _0x35b2f7 {
        constructor(_0x5c6a56, _0x57a408, _0x125583) {
            this.id = null;
            this.mode = null;
            this.type = null;
            this.active = false;
            this.handle = null;
            this.entity = null;
            this.settings = null;
            this.timer = null;
            this.id = _0x57a408;
            this.mode = null;
            this.type = _0x5c6a56;
            this.active = false;
            this.handle = null;
            this.entity = exports["bd-infinity"].GetLocalEntity(_0x5c6a56, _0x5c6a56);
            this.settings = _0x125583;
        }
        ["setSettings"]() {
            if (!this.settings) {
                return;
            }
            if (this.settings.color) {
                SetBlipColour(this.handle, this.settings.color);
            }
            if (this.settings.route) {
                SetBlipRoute(this.handle, this.settings.route);
            }
            if (this.settings.short) {
                SetBlipAsShortRange(this.handle, this.settings.short);
            }
            if (this.settings.scale) {
                SetBlipScale(this.handle, this.settings.scale);
            }
            if (this.settings.heading) {
                ShowHeadingIndicatorOnBlip(this.handle, this.settings.heading);
            }
            if (this.settings.category) {
                SetBlipCategory(this.handle, this.settings.category);
            }
            if (this.settings.text) {
                BeginTextCommandSetBlipName("STRING");
                AddTextComponentString(this.settings.text);
                EndTextCommandSetBlipName(this.handle);
            }
        }
        ["onModeChange"](_0x52aa8e) {
            if (_0x52aa8e == this.mode || !this.active) {
                return;
            }
            RemoveBlip(this.handle);
            if (_0x52aa8e == "coords") {
                const _0x40d508 = exports["bd-infinity"].GetNetworkedCoords(this.type, this.id);
                if (_0x40d508) {
                    this.handle = AddBlipForCoord(_0x40d508[0], _0x40d508[1], _0x40d508[2]);
                    this.mode = "coords";
                }
            } else {
                if (_0x52aa8e == "entity") {
                    const _0x52d2f9 = exports["bd-infinity"].GetLocalEntity(this.type, this.id);
                    if (_0x52d2f9) {
                        this.handle = AddBlipForEntity(_0x52d2f9);
                        this.mode = "entity";
                    }
                }
            }
            this.setSettings();
        }
        ["onUpdateCoords"](_0x2844df) {
            if (this.mode != "coords" || !this.active) {
                return;
            }
            const _0x2896c8 = _0x2844df || exports["bd-infinity"].GetNetworkedCoords(this.type, this.id);
            SetBlipCoords(this.handle, _0x2896c8[0], _0x2896c8[1], _0x2896c8[2]);
        }
        ["entityExistLocally"]() {
            return DoesEntityExist(exports["bd-infinity"].GetLocalEntity(this.type, this.id));
        }
        ["disable"]() {
            if (!this.active) {
                return;
            }
            this.active = false;
            RemoveBlip(this.handle);
            clearTick(this.timer);
        }
        ["enable"](_0x387c61) {
            if (this.active) {
                return;
            }
            this.active = true;
            const _0x376c31 = exports["bd-infinity"].GetLocalEntity(this.type, this.id),
                _0x5ae82e = DoesEntityExist(_0x376c31) && "entity" || "coords";
            if (_0x387c61) {
                this.onModeChange(_0x5ae82e);
            } else {
                if (this.active) {
                    const _0x3cee89 = this.type == "player" && 0x1f4 || 1000;
                    this.timer = setTick(async () => {
                        this.blipTimer();
                        await Delay(_0x3cee89);
                    });
                }
            }
        }
        ["blipTimer"]() {
            const _0x387742 = exports["bd-infinity"].GetLocalEntity(this.type, this.id),
                _0x2071bf = DoesEntityExist(_0x387742) && "entity" || "coords";
            if (_0x2071bf != this.mode) {
                this.onModeChange(_0x2071bf);
            } else {
                if (_0x2071bf == "coords") {
                    this.onUpdateCoords(null);
                }
            }
        }
    };
    let cloakPlayers = [],
        cloakTick = null,
        _0x113eb9 = null;
    async function cloakList(pList, pVisible, pPlayerServerId) {
        cloakPlayers = pList;
        if (onlinePlayers[pPlayerServerId] && onlinePlayers[pPlayerServerId].inScope) {
            showPlayerId(pPlayerServerId, pVisible);
        }
        if (GetPlayerFromServerId(pPlayerServerId) == PlayerId()) {
            if (pVisible) {
                cloakTick = setTick(() => {
                    visiblePlayer();
                });
            } else {
                invisiblePlayer();
            }
        }
    }
    async function loadPlayers(_0x4bcf27) {
        if (_0x113eb9 == null) {
            _0x113eb9 = setTick(() => {
                _0x496c3e(_0x4bcf27);
            });
        } else {
            clearTick(_0x113eb9);
            _0x113eb9 = setTick(() => {
                _0x496c3e(_0x4bcf27);
            });
        }
    }
    async function showPlayerId(pServerId, pToggle) {
        const pPlayerId = GetPlayerFromServerId(pServerId);
        if (PlayerId() != pPlayerId) {
            NetworkConcealPlayer(pPlayerId, pToggle, false);
        }
    }
    async function _0x496c3e(_0x1ff478) {
        if (_0x113eb9 == null) {
            return;
        }
        for (const _0x589f6a in _0x1ff478) {
            const _0x2d5f5b = _0x1ff478[_0x589f6a];
            if (cloakPlayers.indexOf(_0x2d5f5b.player) != -1) {
                showPlayerId(_0x2d5f5b.player, _0x2d5f5b.inScope);
            }
        }
        let _0x5eb9ab = false;
        for (const _0x123b8f in _0x1ff478) {
            const _0x20304d = _0x1ff478[_0x123b8f];
            if (cloakPlayers.indexOf(_0x20304d.player) != -1) {
                if (!NetworkIsPlayerConcealed(_0x20304d.player)) {
                    _0x5eb9ab = true;
                }
            }
        }
        if (!_0x5eb9ab) {
            clearTick(_0x113eb9);
            return;
        }
    }

    function visiblePlayer() {
        const pPlayer = GetPlayerPed(PlayerId());
        SetEntityAlpha(pPlayer, 100, null);
    }

    function invisiblePlayer() {
        const pPlayer = GetPlayerPed(PlayerId());
        SetEntityAlpha(pPlayer, 255, null);
        clearTick(cloakTick);
    };
    const onlinePlayers = {};

    function addPlayer(pPlayerId) {
        if (onlinePlayers[pPlayerId] == null) {
            onlinePlayers[pPlayerId] = {
                player: pPlayerId,
                inScope: true
            };
        } else {
            onlinePlayers[pPlayerId].inScope = true;
            loadPlayers(onlinePlayers);
        }
    }

    function removePlayer(pPlayerId) {
        if (onlinePlayers[pPlayerId] == null) {
            onlinePlayers[pPlayerId] = {
                player: pPlayerId,
                inScope: false
            };
        } else {
            onlinePlayers[pPlayerId].inScope = false;
            loadPlayers(onlinePlayers);
        }
    }
    async function getValidPlayers() {
        const playerList = GetActivePlayers();
        for (const id in playerList) {
            const player1 = playerList[id],
                pPlayerId = GetPlayerServerId(player1);
            if (onlinePlayers[pPlayerId] == null) {
                onlinePlayers[pPlayerId] = {
                    player: pPlayerId,
                    inScope: true
                };
            } else {
                onlinePlayers[pPlayerId].inScope = true;
            }
        }
        loadPlayers(onlinePlayers);
    };
    let currentPlayers = [],
        _0x9c1fb5 = [],
        _0x570219 = null,
        _0x232670 = false;

    function _0x3425ad(_0x5102ff) {
        const _0xb3e3e = {
            short: true,
            sprite: 1,
            category: 7,
            color: 1,
            heading: true,
            text: _0x5102ff,
            route: null,
            scale: 1
        };
        return _0xb3e3e;
    }

    function _0x2774e9(_0x3bf2cb, _0x50ac5a) {
        _0x9c1fb5 = [];
        _0x232670 = _0x50ac5a;
        if (_0x3bf2cb) {
            _0x570219 = setTick(() => {
                showPlayers();
            });
            _0xac2b();
        } else {
            clearTick(_0x570219);
            _0x566ad0();
        }
    }

    function _0x2adb3b(_0x2c446d, _0x5ea010, _0x53e6b8, _0x5267d9) {
        const _0x244efa = World3dToScreen2d(_0x2c446d, _0x5ea010, _0x53e6b8),
            _0x283a2d = _0x244efa[0],
            _0x4511a6 = _0x244efa[1],
            _0x3a1c73 = _0x244efa[2];
        if (_0x283a2d) {
            SetTextFont(0);
            SetTextProportional(true);
            SetTextScale(0, 1);
            SetTextColour(0xff, 0, 0, 0xff);
            SetTextDropshadow(0, 0, 0, 0, 0x37);
            SetTextEdge(2, 0, 0, 0, 0x96);
            SetTextDropShadow();
            SetTextOutline();
            SetTextEntry("STRING");
            SetTextCentre(true);
            AddTextComponentString(_0x5267d9);
            DrawText(_0x4511a6, _0x3a1c73);
        }
    }

    function showPlayers() {
        for (const id in onlinePlayers) {
            const players = onlinePlayers[id];
            if (players.inScope) {
                const pPlayer = GetPlayerFromServerId(+players.player),
                    pPlayerPed = GetPlayerPed(pPlayer),
                    pCoords = GetEntityCoords(_0x136478, false);
                _0x2adb3b(pCoords[0], pCoords[1], pCoords[2] + 1.15, '[' + players.player + "] - " + GetPlayerName(pPlayer));
            }
        }
    }
    async function _addPlayer(pPlayerId) {
        if (currentPlayers[pPlayerId]) {
            currentPlayers[pPlayerId].inScope = true;
            await Delay(1000);
            if (currentPlayers[pPlayerId].inScope) {
                currentPlayers[pPlayerId].onModeChange("entity");
            }
        }
    }
    async function _removePlayer(pPlayerId) {
        if (currentPlayers[pPlayerId]) {
            currentPlayers[pPlayerId].inScope = false;
            currentPlayers[pPlayerId].onModeChange("coords");
        }
        if (_0x9c1fb5[pPlayerId]) {
            _0x9c1fb5[pPlayerId] = null;
        }
    }
    async function _0x3753f6(_0x5b1d82) {
        for (const _0x7940d5 in currentPlayers) {
            const _0x357f7f = currentPlayers[_0x7940d5];
            if (_0x357f7f && _0x357f7f.mode == "coords" && _0x5b1d82.get(+_0x7940d5)) {
                _0x357f7f.onUpdateCoords(_0x5b1d82.get(+_0x7940d5));
                if (_0x357f7f.entityExistLocally()) {
                    _0x357f7f.onModeChange("entity");
                }
            }
        }
    }

    function _0x5f1700(_0x3633ae) {
        currentPlayers[_0x3633ae].disable();
        currentPlayers[_0x3633ae] = null;
    }

    function _0x566ad0() {
        for (const _0x9f9218 in currentPlayers) {
            const _0x18e515 = currentPlayers[_0x9f9218];
            if (_0x18e515) {
                _0x5f1700(_0x9f9218);
            }
        }
        currentPlayers = [];
    }

    function _0x1e2d4f(_0x291d5d) {
        const _0x4bce9e = _0x291d5d,
            _0x38a741 = _0x3425ad(_0x4bce9e),
            _0x3bb615 = new _0x35b2f7("player", +_0x4bce9e, _0x38a741);
        _0x3bb615.enable(true);
        currentPlayers[_0x4bce9e] = _0x3bb615;
    }

    function _0xac2b() {
        const _0x1aeb88 = exports["bd-infinity"].GetPlayerListJS();
        for (const _0x2c142d in _0x1aeb88) {
            _0x1e2d4f('' + _0x1aeb88[_0x2c142d].serverId);
        }
    }

    function _0x4f47ff(_0xe5d0eb) {
        if (_0x232670) {
            _0x1e2d4f('' + _0xe5d0eb);
        }
    }

    function _0x26fd1b(_0x4da941) {
        if (_0x232670) {
            _0x5f1700('' + _0x4da941);
        }
    };
    const toggleBlip = {
        name: "blips",
        value: _getRank.admin,
        executedFuntion: async function _0x2c9a25(pSource, pData) {
            let _0x291a32 = false;
            if (pData.toggle != null) {
                _0x291a32 = pData.toggle;
            }
            doLog("blips", _0x291a32);
            _0x2774e9(_0x291a32, _0x291a32);
            return '' + _0x291a32 + ')';
        },
        log: "Toggled Blips",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Player Blips",
                    cat: "Player",
                    child: false
                },
                options: {
                    bindKey: {
                        value: null,
                        options: []
                    }
                }
            }
        }
    };;
    const deleteEntityAction = {
        name: "deleteEntity",
        value: _getRank.admin,
        executedFuntion: async function _0x279a48(pSource, pData) {
            global.exports["bd-sync"].SyncedExecution("DeleteEntity", pData.entity);
            await Delay(0xfa);
            if (DoesEntityExist(pData.entity)) {
                global.exports["bd-sync"].SyncedExecution("SetEntityCoords", pData.entity, 0, 0, 0);
            }
            emit("bd:admin:updateUI");
            return '[' + pData.entity + ']';
        },
        log: " Deleted Entity ",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            selection: {
                title: "Delete Entity",
                child: null,
                action: '',
                entityType: -1
            }
        }
    };;
    const teleportMarkerAction = {
        name: "teleportMarker",
        value: _getRank.admin,
        executedFuntion: async function _0xa9dd57(pSource, pData) {
            const _0x251011 = GetFirstBlipInfoId(0x8);
            if (!DoesBlipExist(_0x251011)) {
                emit("DoLongHudText", "Failed to find marker.", 2);
                return "Failed to find marker";
            }
            const _0x1751cc = GetBlipInfoIdCoord(_0x251011),
                _0x33c43b = new formatCoords(_0x1751cc[0], _0x1751cc[1], _0x1751cc[2]),
                _0x43e03f = PlayerPedId();
            for (let _0x49b0f1 = 1; _0x49b0f1 < 1000; _0x49b0f1++) {
                SetPedCoordsKeepVehicle(_0x43e03f, _0x33c43b.x, _0x33c43b.y, _0x49b0f1 + 0);
                const _0x2ff5de = GetGroundZFor_3dCoord(_0x33c43b.x, _0x33c43b.y, _0x49b0f1 + 0, false);
                if (_0x2ff5de[0]) {
                    SetPedCoordsKeepVehicle(_0x43e03f, _0x33c43b.x, _0x33c43b.y, _0x49b0f1 + 0);
                    break;
                }
                await Delay(0x5);
            }
            return '' + _0x33c43b.x + ' ' + _0x33c43b.y + ' ' + _0x33c43b.z;
        },
        log: "Teleported to Marker. ",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "Teleport Marker",
                    cat: "Player",
                    child: null
                },
                options: {
                    bindKey: {
                        value: null,
                        options: []
                    }
                }
            }
        }
    };;
    let superJumpActive = null;
    async function superJumpToggle(pToggle) {
        if (pToggle) {
            superJumpActive = setTick(() => {
                activeSuperJump();
            });
        } else {
            clearTick(superJumpActive);
        }
    }

    function activeSuperJump() {
        if (IsPedJumping(PlayerPedId())) {
            SetPedCanRagdoll(PlayerPedId(), false);
        }
        SetSuperJumpThisFrame(PlayerId());
    };
    const superJumpAction = {
        name: "superJump",
        value: _getRank.dev,
        executedFuntion: async function _0x24501c(pSource, pData) {
            let usingSuperJump = false;
            if (pData.toggle != null) {
                usingSuperJump = pData.toggle;
            }
            doLog("superJump", usingSuperJump);
            superJumpToggle(usingSuperJump);
            return '' + usingSuperJump + ')';
        },
        log: "SuperJummped (",
        target: false,
        canTargetAbove: false,
        isClientCommand: true,
        commandUI: {
            adminMenu: {
                command: {
                    title: "SuperJump",
                    cat: "Player",
                    child: false
                },
                options: {
                    bindKey: {
                        value: null,
                        options: []
                    }
                }
            }
        }
    };;;
    const actions = [];
    async function generateActions() {
        Object.values(actionList).forEach(_action => actions.push(_action));
    };
    async function bringPlayer(pCoords) {
        const pPed = PlayerPedId(),
            pTargetCoords = new formatCoords(pCoords[0], pCoords[1], pCoords[2]);
        if (pTargetCoords.isCoordinateEqual(pTargetCoords, new formatCoords(0, 0, 0))) {
            return;
        }
        RequestCollisionAtCoord(pTargetCoords.x, pTargetCoords.y, pTargetCoords.z);
        SetPedCoordsKeepVehicle(pPed, pTargetCoords.x, pTargetCoords.y, pTargetCoords.z);
        FreezeEntityPosition(pPed, true);
        SetPlayerInvincible(pPed, true);
        const _0xdf30ae = GetGameTimer();
        while (!HasCollisionLoadedAroundEntity(pPed)) {
            if (GetGameTimer() - _0xdf30ae > 5000) {
                break;
            }
            await Delay(10);
        }
        FreezeEntityPosition(pPed, false);
        SetPlayerInvincible(pPed, false);
    };
    let usingAttach = false;
    async function attachAction(pCoords, pValue) {
        const pPlayer = PlayerPedId();
        if (!usingAttach) {
            usingAttach = true;
            const _0x5f233d = new formatCoords(pCoords[0], pCoords[1], pCoords[2]);
            if (_0x5f233d.isCoordinateEqual(_0x5f233d, new formatCoords(0, 0, 0))) {
                return;
            }
            SetEntityCollision(pPlayer, false, false);
            RequestCollisionAtCoord(_0x5f233d.x, _0x5f233d.y, _0x5f233d.z);
            SetEntityCoords(pPlayer, _0x5f233d.x, _0x5f233d.y, _0x5f233d.z, false, false, false, false);
            FreezeEntityPosition(pPlayer, true);
            SetPlayerInvincible(pPlayer, true);
            const _0x35ae4d = GetGameTimer();
            while (!HasCollisionLoadedAroundEntity(pPlayer)) {
                if (GetGameTimer() - _0x35ae4d > 5000) {
                    break;
                }
                await Delay(10);
            }
            FreezeEntityPosition(pPlayer, false);
            SetPlayerInvincible(pPlayer, false);
            const targetPlayer = GetPlayerFromServerId(pValue.target.source),
                targetPed = GetPlayerPed(targetPlayer);
            AttachEntityToEntity(pPlayer, targetPed, 0x2e28, 0, -1.48, 2, 0, 0, 0, false, false, false, false, 2, true);
            NetworkSetInSpectatorMode(true, targetPed);
        } else {
            const _0x4246bb = GetPlayerFromServerId(pValue.target.source),
                _0x35e69c = GetPlayerPed(_0x4246bb);
            NetworkSetInSpectatorMode(false, _0x35e69c);
            usingAttach = false;
            DetachEntity(pPlayer, true, true);
            SetEntityCollision(pPlayer, true, true);
        }
    };
    async function doNothing2() { }
    const voiceTable = [{
        mode: 1,
        range: 0,
        priority: 1
    }, {
        mode: 2,
        range: 0,
        priority: 1
    }, {
        mode: 3,
        range: 0,
        priority: 1
    }];
    onNet("bd-admin:runClientCommand", (pAction, pSource, pData, pLog) => {
        runCommand(pAction, pSource, pData, pLog);
    });
    onNet("bd-admin:bringClient", _0x39d2d2 => {
        bringPlayer(_0x39d2d2);
    });
    onNet("bd-admin:attachClient", (_0x3de452, _0xe0e113) => {
        attachAction(_0x3de452, _0xe0e113);
    });
    onNet("bd-admin:gagPlayer", pGaggedPlayers => {
        const playerId = PlayerId(),
            playerServerId = GetPlayerServerId(playerId);
        if (pGaggedPlayers[playerServerId]) {
            return;
        }
        TriggerEvent("bd:voice:proximity:override", "gag", voiceTable);
        TriggerServerEvent("bd:voice:transmission:state", -1, "gag", true, "gag");
    });
    onNet("bd-admin:ungagPlayer", () => {
        TriggerEvent("bd:voice:proximity:override", "gag", voiceTable, -1, -1);
        TriggerServerEvent("bd:voice:transmission:state", -1, "gag", false, "gag");
    });
    onNet("bd-admin:mutePlayer", pServerId => {
        MumbleSetVolumeOverrideByServerId(pServerId, 0);
    });
    onNet("bd-admin:unmutePlayer", pServerId => {
        MumbleSetVolumeOverrideByServerId(pServerId, -1);
    });
    onNet("bd-admin:cloakList", (pList, pVisible, pPlayerServerId) => {
        cloakList(pList, pVisible, pPlayerServerId);
    });
    onNet("onPlayerJoining", function (pPlayer) {
        _addPlayer(pPlayer);
        addPlayer(+pPlayer);
    });
    onNet("onPlayerDropped", function (pPlayer) {
        _removePlayer(pPlayer);
        removePlayer(+pPlayer);
    });
    on("bd:infinity:player:coords:array", _0x1f0de5 => {
        if (!_0x232670) {
            return;
        }
        _0x3753f6(_0x1b4ae7(_0x1f0de5));
    });
    on("bd-admin:blip:dropped", _0x5cec49 => {
        _0x26fd1b(_0x5cec49);
    });
    on("bd-admin:blip:ready", _0x2e4f33 => {
        _0x4f47ff(_0x2e4f33);
    });
    on("bd-spawn:characterSpawned", async () => {
        const isAdmin = await RPC.execute("bd:admin:isAdmin");
        if (isAdmin) {
            registerBinds();
            initOptions();
            getValidItems();
            getValidVehicles();
            getValidJobs();
            getValidLicenses();
            const commands = RPC.execute("bd:admin:getCommandUI");
            setCommands(commands);
        }
    });
    on("SpawnEventsClient", async () => {
        const isAdmin = await RPC.execute("bd:admin:isAdmin");
        if (isAdmin) {
            registerBinds();
            initOptions();
            getValidItems();
            getValidVehicles();
            getValidJobs();
            getValidLicenses();
            const commands = RPC.execute("bd:admin:getCommandUI");
            setCommands(commands);
        }
    });
    on("bd:admin:updateUI", () => {
        closeMenu();
    });
    onNet("bd:admin:openMenu", async pType => {
        const commandData = await RPC.execute("bd:admin:getCommandUI");
        setCommands(commandData);
        initializeList(pType);
    });
    async function runCommand(pAction, pSource, pData, pLog) {
        if (actions.length == 0) {
            generateActions();
        }
        for (const key in actions) {
            const value = actions[key];
            if (value.name == pAction) {
                const responseLog = await value.executedFuntion(pSource, pData);
                RPC.execute("bd:admin:triggerLogFromClient", pLog, responseLog);
                break;
            }
        }
    }
    on("bd-admin:hotreload", async () => {
        const isAdmin = await RPC.execute("bd:admin:isAdmin");
        if (isAdmin) {
            registerBinds();
            await initOptions();
            await getValidItems();
            await getValidVehicles();
            await getValidJobs();
            await getValidLicenses();
            await getValidPlayers();
        }
    });
    onNet("bd-admin:setLastVehicle", async pVehNetId => {
        const pVehicle = NetworkGetEntityFromNetworkId(pVehNetId);
        if (pVehicle == null || pVehicle == 0 || !pVehicle) {
            return;
        }
        await doLog("lastVeh", pVehicle);
    });
    on("bd-admin:enterlastVeh", async () => {
        const pVehicle = await getLog("lastVeh");
        if (pVehicle && DoesEntityExist(pVehicle)) {
            TaskWarpPedIntoVehicle(PlayerPedId(), pVehicle, -1);
        } else {
            TriggerEvent("DoLongHudText", "Failed to find Vehicle.", 2);
        }
    });
    onNet("bd-admin:closeMenu", async _0x3e5a10 => {
        global.exports["bd-adminUI"].enableMenu(false, false);
        global.exports["bd-adminUI"].exitNUI();
    });;
    async function initAdmin() {
        await doNothing();
        await doNothing2();
        await doNothing3();
    };
    const currentResourceName = GetCurrentResourceName();
    on("onClientResourceStart", async pResourceName => {
        if (pResourceName !== currentResourceName) {
            return;
        }
        await initAdmin();
    });
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.Hud = exports.Interface = exports.Utils = exports.Streaming = exports.Zones = exports.Procedures = exports.Events = void 0;
exports.Events = {
    on: (event, callback) => {
        return APX.Events.on(event, callback);
    },
    onNet: (event, callback) => {
        return APX.Events.onNet(event, callback);
    },
    emit: (event, ...args) => {
        return APX.Events.emit(event, ...args);
    },
    emitNet: (event, ...args) => {
        return APX.Events.emitNet(event, ...args);
    },
    remove: (event, callback) => {
        return APX.Events.remove(event, callback);
    }
};
exports.Procedures = {
    register: (name, callback) => {
        return APX.Procedures.register(name, callback);
    },
    execute: (name, ...args) => {
        console.log("execute", name, args);
        return APX.Procedures.execute(name, ...args);
    }
};
exports.Zones = {
    isActive: (zone, data) => {
        return APX.Zones.isActive(zone, data);
    },
    onEnter: (zone, callback) => {
        return APX.Zones.onEnter(zone, callback);
    },
    onExit: (zone, callback) => {
        return APX.Zones.onExit(zone, callback);
    },
    addBoxZone: (id, zone, pCoords, pLength, pWidth, pOptions, pData = {}) => {
        return APX.Zones.addBoxZone(id, zone, pCoords, pLength, pWidth, pOptions, pData);
    },
    addBoxTarget: (id, event, pCoords, pLength, pWidth, pOptions, pData = {}) => {
        return APX.Zones.addBoxTarget(id, event, pCoords, pLength, pWidth, pOptions, pData);
    }
};
exports.Streaming = {
    loadModel: (model) => {
        return APX.Streaming.loadModel(model);
    },
    loadTexture: (texture) => {
        return APX.Streaming.loadTexture(texture);
    },
    loadAnim: (anim) => {
        return APX.Streaming.loadAnim(anim);
    },
    loadClipSet: (clipSet) => {
        return APX.Streaming.loadClipSet(clipSet);
    },
    loadWeaponAsset: (weaponAsset, p1, p2) => {
        return APX.Streaming.loadWeaponAsset(weaponAsset);
    },
    loadNamedPtfxAsset: (asset) => {
        return APX.Streaming.loadNamedPtfxAsset(asset);
    }
};
exports.Utils = {
    cache: (callback, options) => {
        return APX.Utils.cache(callback, options);
    },
    cacheableMap: (callback, options) => {
        return APX.Utils.cacheableMap(callback, options);
    },
    waitForCondition: (condition, timeout) => {
        return APX.Utils.waitForCondition(condition, timeout);
    },
    getMapRange: (p1, p2, p3) => {
        return APX.Utils.getMapRange(p1, p2, p3);
    },
    getDistance: ([x1, y1, z1], [x2, y2, z2]) => {
        return APX.Utils.getDistance([x1, y1, z1], [x2, y2, z2]);
    },
    getRandomNumber: (min, max) => {
        return APX.Utils.getRandomNumber(min, max);
    }
};
exports.Interface = {
    addPeekEntryByModel: (model, data, options) => {
        return APX.Interface.addPeekEntryByModel(model, data, options);
    },
    addPeekEntryByTarget: (event, data, options) => {
        return APX.Interface.addPeekEntryByTarget(event, data, options);
    },
    addPeekEntryByFlag: (flag, data, options) => {
        return APX.Interface.addPeekEntryByFlag(flag, data, options);
    },
    taskbar: (length, name, runCheck = false, moveCheck = null) => {
        return APX.Interface.taskbar(length, name, runCheck, moveCheck);
    },
    phoneConfirmation: (title, text, timeout = 30, icon = undefined) => {
        return APX.Interface.phoneConfirmation(timeout, title, text, "home");
    },
    phoneNotification: (app, title, body, showEvenIfActive = true) => {
        return APX.Interface.phoneNotification(app, title, body, showEvenIfActive);
    }
};
exports.Hud = {
    createBlip: (type, ...args) => {
        return APX.Hud.createBlip(type, ...args);
    },
    applyBlipSettings: (blip, p1, p2, p3, p4, p5, p6, p7) => {
        return APX.Hud.applyBlipSettings(blip, p1, p2, p3, p4, p5, p6, p7);
    }
};
exports.Base = {
    getCharacter: async (pSource) => {
        return await global.exports["arp-lib"].getCharacter(pSource);
    }
};

import { clientConfig } from "../config";

const currentResource = GetCurrentResourceName();
let isCfgReady = false;
const pConfigMap = new Map();

RPC.register("nc-config:getClientConfig", () => {
    return clientConfig;
})

async function initConfig() {
    console.log("[Config] Initializing config...");
    for (const config of clientConfig) {
        pConfigMap.set(config["configId"], config["data"]);
        emit(currentResource + ":configLoaded", config["configId"], config["data"]);
    }
    isCfgReady = true;
    emit(currentResource + ":configReady");
    console.log("[Config] Config initialized.");
}

setImmediate(() => {
    initConfig();
})

function GetModuleConfig(pId: string) {
    return pConfigMap.get(pId);
}

global.exports("GetModuleConfig", GetModuleConfig);

function IsConfigReady() {
    return isCfgReady;
}

global.exports("IsConfigReady", IsConfigReady);

function GetMiscConfig(pId: string) {
    var returnVal;
    const config = GetModuleConfig("misc");
    if (config === undefined) return;
    return (returnVal = config[pId]) !== null && returnVal !== void 0 ? returnVal : null;
}

global.exports("GetMiscConfig", GetMiscConfig);
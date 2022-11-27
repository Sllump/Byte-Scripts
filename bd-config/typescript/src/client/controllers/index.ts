const currentResource = GetCurrentResourceName();
let isCfgReady = false;
const pConfigMap = new Map();

const Delay = (ms: any) => new Promise(res => setTimeout(res, ms));

const serverType = GetConvar("sv_serverType", "whitelisted");
const serverCode = GetConvar("sv_serverCode", "wl");
const serverName = GetConvar("sv_serverName", "Main");

function getCfg(pId: string) {
  return GetModuleConfig(pId);
}

const getGameData = (pGame: string) => {
  const pGames = getCfg("nc-games:games");
  return pGames["games"].find((game: any) => game['id'] == pGame);
};

RegisterCommand("getGameData", (src: number, args: string) => {
  console.log(getGameData(args[0]));
}, false)

async function initConfig() {
  console.log("[Config] Initializing config...");
  const clientConfig = await RPC.execute(currentResource + ":getClientConfig");
  for (const config of clientConfig) {
      pConfigMap.set(config["configId"], config["data"]);
      emit(currentResource + ":configLoaded", config["configId"], config["data"]);
  }
  isCfgReady = true;
  emit(currentResource + ":configReady");
  console.log("[Config] Config initialized.");
}

function setConfig(pId: string, pConfig: any) {
  pConfigMap.set(pId, pConfig);
  emit(currentResource + ":configLoaded", pId, pConfig);
}

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

onNet(currentResource + ":setConfig", (configData: any) => {
  if (configData === undefined || !(configData instanceof Array)) return;
  for (const config of configData) {
      setConfig(config["configId"], config["data"]);
  }
})

const getConfig = (pModule: string, pId: string) => {
  const configData = GetModuleConfig(pModule);
  if (configData === undefined) return;
  return pId ? configData === null || configData === void 0 ? void 0 : configData[pId] : configData;
}

global.exports("GetConfigLib", () => {
  const invokingResource = GetInvokingResource();
  const pData: any = {};
  return pData["IsConfigReady"] = (): any => {
      return isCfgReady;
  }, 
  pData["GetModuleConfig"] = getConfig, pData["GetMainConfig"] = (pId: string) => {
      return getConfig("main", pId);
  }, pData["GetMiscConfig"] = (pId: string) => {
      return getConfig("misc", pId);
  }, pData["GetResourceConfig"] = (pId: string) => {
      return getConfig(invokingResource, pId);
  }, pData;
});

global.exports("GetServerType", () => serverType);
global.exports("GetServerCode", () => serverCode);
global.exports("GetServerName", () => serverName);

setImmediate(() => {
  initConfig();
  //toggleDiscoveredGangSprays();
})

// let discoveredGangSprays: any = [];

// const foundGraffitis = [
//   //-816.5678, -731.2567, 122.27062, 180.00006
//   //-815.1914, -899.1652, 24.661485, 180.72424
//   //-701.9456, -666.3905, 30.674478, 180.72424
//   //-620.9213, -840.6878, 25.141098, 180.72424
//   //-639.4777, -686.9592, 31.095813, 180.72424
//   {
//     coords: {
//       x: -816.5678,
//       y: -731.2567,
//       z: 122.27062
//     },
//     color: 1
//   },
//   {
//     coords: {
//       x: -815.1914,
//       y: -899.1652,
//       z: 24.661485
//     },
//     color: 1
//   },
//   {
//     coords: {
//       x: -701.9456,
//       y: -666.3905,
//       z: 30.674478
//     },
//     color: 1
//   },
//   {
//     coords: {
//       x: -620.9213,
//       y: -840.6878,
//       z: 25.141098
//     },
//     color: 1
//   },
//   {
//     coords: {
//       x: -639.4777,
//       y: -686.9592,
//       z: 31.095813
//     },
//     color: 1
//   }
// ]

// const toggleDiscoveredGangSprays = async () => {
//   if (discoveredGangSprays.length > 0) {
//       for (const blip of discoveredGangSprays) {
//           RemoveBlip(blip);
//       }
//       discoveredGangSprays = [];
//       return emit("DoLongHudText", "Removed all blips", 1, 12000);
//   }
//   //const foundGraffitis = //await Procedures.execute("nc-gangsystem:getFoundGraffiti", _0x30db1b);
//   for (const graffiti of foundGraffitis) {
//       const pBlip = AddBlipForRadius(graffiti["coords"]['x'], graffiti["coords"]['y'], graffiti["coords"]['z'], 100);
//       SetBlipAlpha(pBlip, 100);
//       SetBlipSprite(pBlip, 9);
//       SetBlipColour(pBlip, graffiti["color"]);
//       discoveredGangSprays.push(pBlip);
//   }
//   if (foundGraffitis.length > 0) {
//       return emit("DoLongHudText", "Discovered graffitis marked", 1, 12000);
//   }
// }

// RegisterCommand("clearblips", () => {
//   if (discoveredGangSprays.length > 0) {
//     for (const blip of discoveredGangSprays) {
//         RemoveBlip(blip);
//     }
//     discoveredGangSprays = [];
//     return emit("DoLongHudText", "Removed all blips", 1, 12000);
// }
// }, false)
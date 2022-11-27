import Events from "../modules/events";
import Procedures from "../modules/procedures";
import Zones from "../modules/zones";
import Streaming from "../modules/streaming";
import Utils from "../modules/utils";
import Interface from "../modules/interface";
import Hud from "../modules/hud";

const Modules: any = {
    Events: Events,
    Procedures: Procedures,
    Zones: Zones,
    Streaming: Streaming,
    Utils: Utils,
    Interface: Interface,
    Hud: Hud
}

global.NCX = Modules;

setImmediate(() => {
    global.exports("GetLibrary", () => {
        return Modules;
    })
});
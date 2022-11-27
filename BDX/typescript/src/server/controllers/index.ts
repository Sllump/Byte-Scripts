import Events from "../modules/events";
import Procedures from "../modules/procedures";
import Utils from "../modules/utils";

const Modules: any = {
    Events: Events,
    Procedures: Procedures,
    Utils: Utils
}

global.NCX = Modules;

setImmediate(() => {
    global.exports("GetLibrary", () => {
        return Modules;
    })
});
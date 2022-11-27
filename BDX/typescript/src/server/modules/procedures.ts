import Events from "./events"
import EventUtils from "./event-utils";

let curTime = new Date().getTime();
const ResourceName = GetCurrentResourceName();
const executed = new Map();

const registerProcedure = (pName: string, pFunc: any) => {
    Events.onNet("__ncx_req:" + pName, async (pPayload: any, pResult: any) => {
        console.log("Received request: " + pName, pPayload, pResult);
        
        let response, success;
        
        const pDecodedPayload = EventUtils.decode(pPayload);

        console.log("Decoded payload: ", pDecodedPayload);
        
        if (pDecodedPayload === undefined) return console.log("[RPC] Received malformed packet:", pPayload);
        
        try {
            response = await pFunc(pDecodedPayload.src, ...pResult);
            success = true;
        } catch (error) {
            response = error;
            success = false;
        }

        console.log("Success: ", success);
        console.log("Response: ", response);
        
        if (pDecodedPayload.type === "remote") {
            Events.emitNet("__ncx_res:" + pDecodedPayload.origin, pDecodedPayload.src, pDecodedPayload.id, [success, response]);
        } else if (pDecodedPayload.type === "local") {
            Events.emit("__ncx_res:" + pDecodedPayload.origin, pDecodedPayload.id, [success, response]);
        }
    });
}

const executeProcedure = (pName: string, ...pParams: any) => {
    const pPayload = {
        id: ++curTime,
        type: "remote",
        origin: ResourceName
    };

    const pProm = new Promise((resolve, reject) => {
        const pTimeout = +setTimeout(() => reject(new Error("Remote call timed out | " + pName)), 60000);

        executed.set(pPayload.id, {
            resolve: resolve,
            reject: reject,
            timeout: pTimeout
        });

    });

    Events.emitNet("__ncx_req:" + pName, EventUtils.encode(pPayload), pParams);
    
    pProm.finally(() => executed.delete(pPayload.id));

    return pProm;
}

Events.onNet("__ncx_res:" + ResourceName, (p1: any, p2: any) => {
    const event = executed.get(p1);
    
    if (event === undefined) return;
    
    clearTimeout(event.timeout);
    
    const [success, response] = p2;
    
    if (success) event.resolve(response);
    else {
        event.reject(new Error(response));
    }
});

export default {
    register: registerProcedure,
    execute: executeProcedure
}
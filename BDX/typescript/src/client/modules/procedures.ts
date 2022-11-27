import Events from "./events"
import EventUtils from "./event-utils";

let curTime = new Date().getTime();
const ResourceName = GetCurrentResourceName();
const executed = new Map();

const registerProcedure = (name: string, callback: Function) => {
    console.log("Registering procedure: " + name);
    Events.onNet(`__ncx_req:${name}`, async (payload: any, args: any) => {
        console.log("Received procedure request: " + name);
        let cb: any;
        let result: any;
        const decoded = EventUtils.decode(payload);

        if (!decoded) return console.log("[RPC] Received malformed packet:", payload);

        try {
            cb = await callback(...args);
            result = true;
        } catch (error: any) {
            cb = error;
            result = false;
        }

        if (decoded.type === 'remote') {
            Events.emitNet(`__ncx_res:${decoded.origin}`, decoded.id, [result, cb]);
        } else if (decoded.type === 'local') {
            Events.emit(`__ncx_res:${decoded.origin}`, decoded.id, [result, cb]);
        }
    });
}

const executeProcedure = (name: string, ...args: any[]) => {
    console.log("Executing procedure: " + name);
    const src = GetPlayerServerId(PlayerId());

    const payload = {
        id: curTime++,
        type: 'remote',
        origin: ResourceName,
        src: src
    };

    const promise = new Promise((resolve, reject) => {
        const timeout = +setTimeout(() => reject(`Remote call timed out | ${name}`), 60000);
        executed.set(payload.id, {
            resolve: resolve,
            reject: reject,
            timeout: timeout
        });
    });

    Events.emitNet(`__ncx_req:${name}`, EventUtils.encode(payload), promise.finally(() => executed.delete(payload.id)));

    return promise;
}

Events.onNet(`__ncx_res:${ResourceName}`, (id: any, result: any) => {
    console.log("Received procedure response: " + id);
    const data = executed.get(id);
    if (!data) return;

    console.log("Got data", data);

    clearTimeout(data.timeout);

    const [success, cb] = result;

    console.log("Got result", success, cb);

    if (success) {
        data.resolve(cb);
    } else {
        data.reject(new Error(cb));
    }

    if (data) {
        clearTimeout(data.timeout);
        data.resolve(cb);
    }
});

export default {
    register: registerProcedure,
    execute: executeProcedure
}
const Zones = new Set();
const ZoneHandlers = new Map();

on("arp-polyzone:enter", (zone: string, data?: any) => {
    Zones.add(zone);
});

on("arp-polyzone:exit", (zone: string, data?: any) => {
    Zones.delete(zone);
});

const HasActiveZone = (zone: string, data?: any) => {
    return Zones.has(data ? `${zone}-${data}` : zone);
}

const AddOnEnterHandler = (zone: string, cb: Function) => {
    const id = `${zone}-enter`;

    const handlers = ZoneHandlers.get(id) ?? [];

    if (!ZoneHandlers.has(id)) ZoneHandlers.set(id, handlers);

    handlers.push(cb);
}

const AddOnExitHandler = (zone: string, cb: Function) => {
    const id = `${zone}-exit`;

    const handlers = ZoneHandlers.get(id) ?? [];

    if (!ZoneHandlers.has(id)) ZoneHandlers.set(id, handlers);

    handlers.push(cb);
}

const AddBoxZone = (id: string, zone: string, vectors: Vector3, length: number, width: number, options: any, data = {}): void => {
    const opt = { ...options, data: data ?? {} };

    opt.data['id'] = id;

    global.exports["arp-polyzone"].AddBoxZone(zone, vectors, length, width, opt);
}

const AddBoxTarget = (id: string, zone: string, vectors: Vector3, length: number, width: number, options: any, data = {}): void => {
    const opt = { ...options, data };

    opt.data['id'] = id;

    global.exports["arp-polytarget"].AddBoxZone(zone, vectors, length, width, opt);
}

export default {
    isActive: HasActiveZone,
    onEnter: AddOnEnterHandler,
    onExit: AddOnExitHandler,
    addBoxZone: AddBoxZone,
    addBoxTarget: AddBoxTarget
}
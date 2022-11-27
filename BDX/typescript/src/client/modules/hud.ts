const createBlip = (type: string, ...args: any[]) => {
    switch (type) {
        case "coord": {
            const [x, y, z] = args;
            return AddBlipForCoord(x, y, z);
        }
        case "area": {
            const [x, y, z, w, h] = args;
            return AddBlipForArea(x, y, z, w, h);
        }
        case "radius": {
            const [x, y, z, r] = args;
            return AddBlipForRadius(x, y, z, r);
        }
        case "pickup": {
            const [pickup] = args;
            return AddBlipForPickup(pickup);
        }
        case "entity": {
            const [entity] = args;
            return AddBlipForEntity(entity);
        }
        default: {
            console.error(new Error("Invalid Blip Type"));
            return 0;
        }
    }
}

const applyBlipSettings = (blip: number, text: string, spriteId: any, color: any, alpha: any, scale: any, enabled: any, toggle: any) => {
    if (typeof spriteId === "number") SetBlipSprite(blip, spriteId);
    if (typeof color === "number") SetBlipColour(blip, color);
    if (typeof alpha === "number") SetBlipAlpha(blip, alpha);
    if (typeof scale === "number") SetBlipScale(blip, scale);
    if (typeof enabled === "boolean") SetBlipRoute(blip, enabled);
    if (typeof toggle === "boolean") SetBlipAsShortRange(blip, toggle);
    if (typeof text === "string") {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentString(text);
        EndTextCommandSetBlipName(blip);
    }
}

export default {
    create: createBlip,
    applySettings: applyBlipSettings
}
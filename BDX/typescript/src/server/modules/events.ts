const eventOn = (event: string, callback: Function) => {
    return on(event, callback);
}

const eventOnNet = (event: string, callback: Function) => {
    return onNet(event, callback);
}

const eventEmit = (event: string, ...args: any[]) => {
    return emit(event, ...args);
}

const eventEmitNet = (event: string, src: string, ...args: any[]) => {
    const payload = msgpack_pack(args);

    payload.length < 16000 ? TriggerClientEventInternal(event, src, payload, payload.length) : TriggerLatentClientEventInternal(event, src, payload, payload.length, 128000);
}

const eventRemove = (event: string, callback: Function) => {
    return removeEventListener(event, callback);
}

export default {
    on: eventOn,
    onNet: eventOnNet,
    emit: eventEmit,
    emitNet: eventEmitNet,
    remove: eventRemove
}
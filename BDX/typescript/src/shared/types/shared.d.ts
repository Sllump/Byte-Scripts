interface ModuleConfigEntry {
    configId: string;
    data: Record<string, any>;
}

interface MainConfig {
    payoutFactor: number;
    characterLimit: number;
    progression: any;
    restartLength: number;
}

declare const RPC: { 
    register<T>(name: string, callback: Function): T,
    execute<T>(name: string, ...args: any): T
};

declare const SQL: { 
    execute(name: string, ...args: any): any;
    query(name: string, ...args: any): any;
};

declare const AsyncExports: any;

declare function CacheableMap(func: Function, options: { timeToLive: number }): any;

declare function RegisterInterfaceCallback(name: string, cb: any): any;

declare function SendInterfaceMessage(data: any): any;

declare const msgpack_pack: any;

interface Vector3 {
    x: number;
    y: number;
    z: number;
}

interface Vector4 extends Vector3 {
    h: number;
}
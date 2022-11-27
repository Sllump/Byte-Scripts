const cache = (getValueCb: Function, options: { timeToLive: number }) => {
    const key = '_';
    const map = cacheableMap((ctx: any, _: any, ...args: any) => {
        return getValueCb(ctx, ...args);
    }, options) as any;

    const getCachedValue = {
        get: (...args: any) => {
            return map.get(key, ...args);
        },
        reset: () => {
            map.reset(key);
        }
    }

    return getCachedValue;
}

const cacheableMap = (getValueCb: Function, options: { timeToLive: number }) => {
    const ttl = options.timeToLive || 60000;
    const cachedValues: any = {};

    async function ensureCachedValue(key: any, ...args: any) {
        let cachedValue = cachedValues[key];
        if (!cachedValue) {
            cachedValue = { value: null, lastUpdated: 0 };
            cachedValues[key] = cachedValue;
        }

        const now = Date.now();
        if (cachedValue.lastUpdated === 0 || now - cachedValue.lastUpdated > ttl) {
            const [shouldCache, value] = await getValueCb(cachedValue, key, ...args);
            if (shouldCache) {
                cachedValue.lastUpdated = now
                cachedValue.value = value
            }
            return value;
        }

        return cachedValue.value;
    }

    async function getCachedValue(key: any, ...args: any) {
        return await ensureCachedValue(key, ...args);
    }

    getCachedValue.reset = function (key: any) {
        const cachedValue = cachedValues[key];
        if (cachedValue) cachedValue.lastUpdated = 0;
    }

    return getCachedValue;
}

const waitForCondition = (condition: Function, timeout: number) => {
    return new Promise((resolve) => {
        const now = Date.now();

        const tick = setTick(() => {
            const timedOut = Date.now() - now > timeout;

            if (condition() || timedOut) {
                clearTick(tick);
                resolve(timedOut);
            }
        });
    })
}

const getMapRange = (p1: any, p2: any, p3: any) => {
    return p2[0] + (p3 - p1[0]) * (p2[1] - p2[0]) / (p1[1] - p1[0]);
}

const getDistance = ([pX1, pY1, pZ1]: number[], [pX2, pY2, pZ2]: number[]) => {
    const [x, y, z] = [pX1 - pX2, pY1 - pY2, pZ1 - pZ2];
    return Math.sqrt(x * x + y * y + z * z);
}

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(max ? Math.random() * (max - min) + min : Math.random() * min);
}

export default {
    cache: cache,
    cacheableMap: cacheableMap,
    waitForCondition: waitForCondition,
    getMapRange: getMapRange,
    getDistance: getDistance,
    getRandomNumber: getRandomNumber
}
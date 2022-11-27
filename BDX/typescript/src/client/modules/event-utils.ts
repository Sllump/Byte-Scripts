const encode = (payload: any) => {
    try {
        return JSON.stringify(payload);
    } catch (error: any) {
        console.error("Failed to encode payload");
    }
}

const decode = (payload: any) => {
    try {
        return JSON.parse(payload);
    } catch (error: any) {
        console.error("Failed to decode payload");
    }
}

export default {
    encode: encode,
    decode: decode
}
export let Delay = (ms:any) => new Promise(res => setTimeout(res, ms));

export async function loadAnimDict(dict: string) {
    while(!HasAnimDictLoaded(dict)) {
        RequestAnimDict(dict)
        await Delay(5)
    }
}
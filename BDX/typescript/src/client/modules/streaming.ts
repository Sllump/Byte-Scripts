import Utils from "./utils";

const loadModel = async (model: string | number) => {
    const hash = typeof model === "number" ? model : GetHashKey(model);
    if (HasModelLoaded(hash)) return true;

    RequestModel(hash);

    const hasLoaded = await Utils.waitForCondition(() => HasModelLoaded(hash), 30000);

    return !hasLoaded;
}

const loadAnim = (anim: string) => {
    if (HasAnimDictLoaded(anim)) return true;

    RequestAnimDict(anim);

    const hasLoaded = Utils.waitForCondition(() => HasAnimDictLoaded(anim), 30000);

    return !hasLoaded;
}

const loadClipSet = (clipset: string) => {
    if (HasClipSetLoaded(clipset)) return true;

    RequestClipSet(clipset);

    const hasLoaded = Utils.waitForCondition(() => HasClipSetLoaded(clipset), 30000);

    return !hasLoaded;
}

const loadTexture = (texture: string) => {
    if (HasStreamedTextureDictLoaded(texture)) return true;

    RequestStreamedTextureDict(texture, true);

    const hasLoaded = Utils.waitForCondition(() => HasStreamedTextureDictLoaded(texture), 30000);

    return !hasLoaded;
}

const loadWeaponAsset = (weapon: string | number, p1: number, p2: number) => {
    const hash = typeof weapon === "number" ? weapon : GetHashKey(weapon);
    if (HasWeaponAssetLoaded(hash)) return true;

    RequestWeaponAsset(hash, p1, p2);

    const hasLoaded = Utils.waitForCondition(() => HasWeaponAssetLoaded(hash), 30000);

    return !hasLoaded;
}

const loadNamedPtfxAsset = (asset: string) => {
    if (HasNamedPtfxAssetLoaded(asset)) return true;

    RequestNamedPtfxAsset(asset);

    const hasLoaded = Utils.waitForCondition(() => HasNamedPtfxAssetLoaded(asset), 30000);

    return !hasLoaded;
}

export default {
    loadModel: loadModel,
    loadTexture: loadTexture,
    loadAnim: loadAnim,
    loadClipSet: loadClipSet,
    loadWeaponAsset: loadWeaponAsset,
    loadNamedPtfxAsset: loadNamedPtfxAsset
}
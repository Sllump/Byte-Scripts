import { Delay, loadAnimDict, mathClass } from "../utils/tools";

let isSelecting: any = undefined;
let objInfo: any = undefined;
let isPlacing = false;
let obj: number = 0;
let heading = 0.0;
let currentCoords: any = undefined;
let result = undefined;

declare const RPC: any;

// async function PlaceAndSaveObject(model: any, metaData: any) {
//     result = undefined
//     console.log("PlaceAndSaveObject", model, metaData)
//     if (isSelecting !== undefined) return;

//     let playerPed = PlayerPedId();
//     isSelecting = model;
//     objInfo = metaData;

//     let playerCoords = GetEntityCoords(playerPed, false);

//     obj = CreateObject(GetHashKey(model), playerCoords[0], playerCoords[1], playerCoords[2], false, false, false);
//     SetEntityHeading(obj, 0)
//     SetEntityAlpha(obj, 100, false)
//     SetEntityCollision(obj, false, false)

//     setImmediate(async () => {
//         while (isSelecting !== undefined) {
//             await Delay(1)
//             DisableControlAction(0, 22, true)
//             if (!isPlacing) {
//                 getSelection()
//             }
//             if (currentCoords !== undefined) {
//                 let z = currentCoords[2];
//                 SetEntityCoords(obj, currentCoords[0], currentCoords[1], z, false, false, false, false)
//                 SetEntityHeading(obj, heading)
//             }
//             if (IsControlJustPressed(0, 38)) {
//                 placeObject(currentCoords, heading)
//                 result = true;
//             }
//             if (IsControlJustPressed(0, 177)) {
//                 stopSelecting()
//                 result = false;
//             }
//             // if (IsControlJustPressed(0, 174)) {
//             //     heading = heading + 15
//             //     if (heading > 360) heading = 360.0;
//             // }
//             // if (IsControlJustPressed(0, 175)) {
//             //     heading = heading - 15
//             //     if (heading < 0) heading = 0.0;
//             // }
//             if (IsControlJustPressed(0, 15)) {
//                 heading = heading + 15
//                 if (heading > 360) heading = 360.0;
//             }
//             if (IsControlJustPressed(0, 14)) {
//                 heading = heading - 15
//                 if (heading < 0) heading = 0.0;
//             }
//         }
//     })

//     while (result === undefined) {
//         await Delay(1)
//     }

//     return result
// }

const PlaceAndSaveObject = async (pModel: any, pMetadata = {}, pOptions: any, pCallback = () => true, pType = "objects", pExpiry?: number) => {
    const [success, message] = await PlaceObject(pModel, pOptions, pCallback);
    if (!success) return null;
    //return emitNet("voidrp-objects:prepareObject", pModel, message["coords"]["x"], message["coords"]["y"], message["coords"]["z"], message["rotation"], pMetadata)
    return await RPC.execute("voidrp-objects:SaveObject", pType, pModel, message["coords"], message["rotation"], pMetadata, pExpiry);
};

global.exports("PlaceAndSaveObject", PlaceAndSaveObject)

// async function PlaceObject(model: any, metaData: any) {
//     result = undefined
//     if (isSelecting !== undefined) return;

//     let playerPed = PlayerPedId();
//     isSelecting = model;
//     objInfo = metaData;

//     let playerCoords = GetEntityCoords(playerPed, false);

//     obj = CreateObject(GetHashKey(model), playerCoords[0], playerCoords[1], playerCoords[2], false, false, false);
//     SetEntityHeading(obj, 0)
//     SetEntityAlpha(obj, 100, false)

//     setImmediate(async () => {
//         while (isSelecting !== undefined) {
//             await Delay(1)
//             DisableControlAction(0, 22, true)
//             if (!isPlacing) {
//                 getSelection()
//             }
//             if (currentCoords !== undefined) {
//                 let z = currentCoords[2];
//                 SetEntityCoords(obj, currentCoords[0], currentCoords[1], z, false, false, false, false)
//                 SetEntityHeading(obj, heading)
//             }
//             if (IsControlJustPressed(0, 38)) {
//                 stopSelecting()
//                 result = true;
//             }
//             if (IsControlJustPressed(0, 177)) {
//                 stopSelecting()
//                 result = false;
//             }
//             if (IsControlJustPressed(0, 15)) {
//                 heading = heading + 15
//                 if (heading > 360) heading = 360.0;
//             }
//             if (IsControlJustPressed(0, 14)) {
//                 heading = heading - 15
//                 if (heading < 0) heading = 0.0;
//             }
//         }
//     })

//     while (result === undefined) {
//         await Delay(1)
//     }

//     return result
// }

let isPlacingObj = false;

const PlaceObject = async (pModel: string, pOptions: any, pCallback: any = () => true) => {
    var pGroundSnap, pZOffset, pAlignToSurface, pSurfaceOffset;
    if (isPlacingObj) return [false, null];
    const pFinalModel = typeof pModel === "string" ? pModel.trim() : pModel;
    if (!IsModelValid(pFinalModel)) return [false, null];
    isPlacingObj = true, await requestAndLoadModel(pFinalModel);
    const [v1, v2] = GetModelDimensions(pFinalModel), _0x44d183 = mathClass.fromArray(v1);
    const _0xa48969 = mathClass.fromArray(v2), pCoordObject = _0xa48969.sub(_0x44d183), pPedEnt = PlayerPedId();
    let pUseGroundSnap = (pGroundSnap = pOptions["groundSnap"]) !== null && pGroundSnap !== void 0 ? pGroundSnap : pOptions["forceGroundSnap"];
    let pPedHeading = GetEntityHeading(pPedEnt);
    let pUseModelOffset = pOptions["useModelOffset"];
    let isInPlacingMode = true;
    let _0x3db398 = true;
    let pUseCollision = true;
    let pUseZOffset = (pZOffset = pOptions["zOffset"]) !== null && pZOffset !== void 0 ? pZOffset : 0;
    let _0x283446 = false;
    const pUseAlignToSurface = (pAlignToSurface = pOptions["alignToSurface"]) !== null && pAlignToSurface !== void 0 ? pAlignToSurface : false;
    const pUseSurfaceOffset = (pSurfaceOffset = pOptions["surfaceOffset"]) !== null && pSurfaceOffset !== void 0 ? pSurfaceOffset : 0;
    const pCreatedObject = CreateObjectNoOffset(pFinalModel, 0, 0, 0, false, false, false);
    SetEntityAlpha(pCreatedObject, 200, false), SetEntityCollision(pCreatedObject, false, false), SetCanClimbOnEntity(pCreatedObject, false), SetEntityDrawOutlineColor(255, 0, 0, 128);
    const pTick = setTick(() => {
        var pDistance;
        const [pHandle, pHit, pEndCoords, pSurfaceNormal, pMaterialHash, pEntityHit] = getMaterialHash(19, pCreatedObject, (pDistance = pOptions["distance"]) !== null && pDistance !== void 0 ? pDistance : 10);
        if (pHit) {
            const _0x163669 = mathClass.fromArray(pEndCoords);
            if (!pUseGroundSnap && pUseModelOffset) {
                _0x163669['z'] += pCoordObject['z'] / 2;
            }
            let pCoordinates = [0, 0, 0];
            pUseAlignToSurface ? (pPedHeading = -Math.atan2(pSurfaceNormal[0], pSurfaceNormal[1]) * 57.2958 + 180, SetEntityHeading(pCreatedObject, pPedHeading), pCoordinates = GetEntityForwardVector(pCreatedObject).map(item => item * pUseSurfaceOffset)) : SetEntityHeading(pCreatedObject, pPedHeading);
            SetEntityCoords(pCreatedObject, _0x163669['x'] - pCoordinates[0], _0x163669['y'] - pCoordinates[1], _0x163669['z'] - pCoordinates[2], false, false, false, false);
            if (pUseGroundSnap) {
                PlaceObjectOnGroundProperly_2(pCreatedObject);
            }
            if (pUseZOffset !== 0) {
                const _0x56e705 = mathClass.fromArray(GetEntityCoords(pCreatedObject, false));
                _0x163669['z'] += pUseZOffset, SetEntityCoords(pCreatedObject, _0x56e705['x'], _0x56e705['y'], _0x56e705['z'] + pUseZOffset, false, false, false, false);
            }
            const pCoords = pUseGroundSnap ? mathClass.fromArray(GetEntityCoords(pCreatedObject, true)) : _0x163669;
            const pCollision = pOptions["collision"] ? !checkHitCollisions(pCreatedObject, pPedEnt, pCoordObject, pCoords, pOptions["colZOffset"]) : true;
            const isNotApartment = true; //!exports["voidrp-apartments"].getModule("func").getApartment();
            pUseCollision = pCollision && isNotApartment && pCallback(pCoords, pMaterialHash, pCreatedObject, pEntityHit);
            if (pUseCollision) SetEntityDrawOutline(pCreatedObject, false);
            else {
                SetEntityDrawOutline(pCreatedObject, true);
            }
        } else pUseCollision = false;
        if (pOptions["afterRender"]) {
            pOptions["afterRender"](pCreatedObject, !!pHit, pUseCollision);
        }
    }),
        pTick2 = setTick(() => {
            DisableControlAction(0, 44, true), DisableControlAction(0, 46, true), DisableControlAction(0, 140, true), DisableControlAction(0, 20, true), DisableControlAction(0, 16, true), DisableControlAction(0, 17, true), DisableControlAction(0, 36, true);
            const isPressed = IsDisabledControlPressed(0, 36);
            if (IsDisabledControlPressed(2, 17)) {
                if (_0x283446) {
                    pUseZOffset += isPressed ? 0.1 : 0.5;
                } else {
                    pPedHeading += isPressed ? 1 : 5;
                    if (!isPressed) pPedHeading = Math.round(pPedHeading);
                }
            } else {
                if (IsDisabledControlPressed(2, 16)) {
                    if (_0x283446) {
                        pUseZOffset -= isPressed ? 0.1 : 0.5;
                    } else {
                        pPedHeading -= isPressed ? 1 : 5;
                        if (!isPressed) pPedHeading = Math.round(pPedHeading);
                    }
                }
            }
            if (pPedHeading > 360) {
                pPedHeading -= 360;
            } else pPedHeading < 0 && (pPedHeading += 360);
            pOptions["groundSnap"] && !pOptions["forceGroundSnap"] && IsDisabledControlJustPressed(0, 44) && (pUseGroundSnap = !pUseGroundSnap);
            pOptions["useModelOffset"] && IsDisabledControlJustPressed(0, 140) && (pUseModelOffset = !pUseModelOffset);
            if (pOptions["adjustZ"] && IsDisabledControlJustPressed(0, 20)) {
                _0x283446 = !_0x283446, SetEntityAlpha(pCreatedObject, _0x283446 ? 255 : 200, false);
            }
            if (IsDisabledControlJustPressed(0, 200) || IsDisabledControlJustPressed(0, 177)) {
                isInPlacingMode = false;
            }
            if (pUseCollision && IsDisabledControlJustPressed(0, 46)) {
                _0x3db398 = false, isInPlacingMode = false;
            }
        });
    while (isInPlacingMode) {
        await Delay(1);
    }
    clearTick(pTick), clearTick(pTick2);
    const pCoordinates = mathClass.fromArray(GetEntityCoords(pCreatedObject, true)),
        pRotation = mathClass.fromArray(GetEntityRotation(pCreatedObject, 2)),
        entQuaternion = GetEntityQuaternion(pCreatedObject);
    deleteIfExist(pCreatedObject), isPlacingObj = false;
    if (_0x3db398) {
        return [false, null];
    }
    const pObj: any = {};
    return pObj["coords"] = pCoordinates, pObj["rotation"] = pRotation, pObj["quaternion"] = entQuaternion, [true, pObj];
};

global.exports("PlaceObject", PlaceObject)

// RegisterCommand("placeobject", () => {
//     let result = PlaceObject(
//         `vw_prop_casino_art_grenade_01d`,
//         { groundSnap: true, allowHousePlacement: false },
//         function(pCoords: any, pMaterial: any, pEntity: number) {
//             //console.log("Placed object", pCoords, pMaterial, pEntity);
//         }
//     )
// }, false)

function checkHitCollisions(pEntity: number, pPedEntity: number, pCoordObj: any, pCoords: any, pZOffset: number) {
    const _0x15c99a = mathClass.fromArray(GetEntityRotation(pEntity, 2));
    const pCoords2 = mathClass.fromObject(pCoordObj).multiplyScalar(0.75);
    const _0x36a561 = StartShapeTestBox(pCoords['x'], pCoords['y'], pCoords['z'] + (pZOffset !== null && pZOffset !== void 0 ? pZOffset : 0), pCoords2['x'], pCoords2['y'], pCoords2['z'], _0x15c99a['x'], _0x15c99a['y'], _0x15c99a['z'], 2, 83, pPedEntity, 4);
    const [pHandle, pHit] = GetShapeTestResultIncludingMaterial(_0x36a561);
    return pHit;
}

const getMaterialHash = (pDist: number, pEnt: number, pNum = 5) => {
    const gameplayCamCoord = GetGameplayCamCoord();
    const [v1, , v3] = GetGameplayCamRot(0).map(item => Math.PI / 180 * item);
    const _0x26174a = Math.abs(Math.cos(v1));
    const _0x9b0b82 = [-Math.sin(v3) * _0x26174a, Math.cos(v3) * _0x26174a, Math.sin(v1)];
    const _0x4799ea = _0x9b0b82.map((item, idx) => gameplayCamCoord[idx] + item);
    const _0x3a6a79 = mathClass.fromArray(GetEntityCoords(PlayerPedId(), false)).getDistanceFromArray(GetGameplayCamCoord());
    const _0x46d1b7 = _0x9b0b82.map((_0x2ea159, _0x21a9ad) => gameplayCamCoord[_0x21a9ad] + _0x2ea159 * (pNum + _0x3a6a79));
    const _0x582c85 = StartShapeTestSweptSphere(_0x4799ea[0], _0x4799ea[1], _0x4799ea[2], _0x46d1b7[0], _0x46d1b7[1], _0x46d1b7[2], 0.2, pDist, pEnt, 7);
    return GetShapeTestResultIncludingMaterial(_0x582c85);
};

const deleteIfExist = (pEntity: number) => {
    DoesEntityExist(pEntity) && DeleteObject(pEntity);
};

async function requestAndLoadModel(pModel: string) {
    if (IsModelValid(pModel)) {
        RequestModel(pModel);
        let hasLoaded = false;
        setTimeout(() => hasLoaded = true, 3000);
        while (!HasModelLoaded(pModel) && !hasLoaded) {
            await Delay(10);
        }
        return !hasLoaded;
    }
    return false;
}

function placeObject(selection: any, heading: number) {
    if (currentCoords === undefined) return stopSelecting();

    let coordinates = {
        x: selection[0],
        y: selection[1],
        z: selection[2]
    }

    let playerCoords = GetEntityCoords(PlayerPedId(), false);
    let dist = GetDistanceBetweenCoords(playerCoords[0], playerCoords[1], playerCoords[2], coordinates.x, coordinates.y, coordinates.z, true);
    if (Number(dist) > 50) {
        emit("DoLongHudText", "You cannot place the object this far away", 2)
        return
    }

    isPlacing = true

    spawnObj(coordinates)
}

function spawnObj(coordinates: any) {
    emitNet("voidrp-objects:prepareObject", isSelecting, coordinates.x, coordinates.y, coordinates.z, heading, objInfo)
    stopSelecting()
}

function stopSelecting() {
    if (obj !== 0) {
        DeleteObject(obj)
    }
    heading = 0.0;
    isSelecting = undefined;
    currentCoords = undefined;
    isPlacing = false;
}

function cameraToWorld(flags: number, ignore: number) {
    let coord = GetGameplayCamCoord();
    let rot = GetGameplayCamRot(0);
    let rx = Math.PI / 180 * rot[0];
    let rz = Math.PI / 180 * rot[2];
    let cosRx = Math.abs(Math.cos(rx));

    let xDir = -Math.sin(rz) * cosRx
    let yDir = Math.cos(rz) * cosRx
    let zDir = Math.sin(rx)

    let direction = {
        x: xDir,
        y: yDir,
        z: zDir
    }
    let sphereCast = StartShapeTestSweptSphere(
        coord[0] + direction.x,
        coord[1] + direction.y,
        coord[2] + direction.z,
        coord[0] + direction.x * 200,
        coord[1] + direction.y * 200,
        coord[2] + direction.z * 200,
        0.2,
        flags,
        ignore,
        7
    );

    return GetShapeTestResult(sphereCast)
}

function getSelection() {
    const [retval, hit, endCoords, _, entityHit] = cameraToWorld(1, obj);
    if (Number(hit) === 1) {
        currentCoords = endCoords;
    }
}

on("onResourceStop", (resource: string) => {
    if (resource !== "voidrp-objects") return;
    if (obj !== 0) {
        DeleteObject(obj)
    }
})
export let Delay = (ms:any) => new Promise(res => setTimeout(res, ms));

export async function loadAnimDict(dict: string) {
    while(!HasAnimDictLoaded(dict)) {
        RequestAnimDict(dict)
        await Delay(5)
    }
}

export class mathClass {
    x: any;
    y: any;
    z: any;
    constructor(coordX = 0, coordY = 0, coordZ = 0) {
        this['x'] = coordX, this['y'] = coordY, this['z'] = coordZ;
    } ['setFromArray'](_0x174f1d: any) {
        return this['x'] = _0x174f1d[0], this['y'] = _0x174f1d[0x1], this['z'] = _0x174f1d[0x2], this;
    } ['getArray']() {
        return [this['x'], this['y'], this['z']];
    } ['add'](_0x1ee4b5: any) {
        return this['x'] += _0x1ee4b5['x'], this['y'] += _0x1ee4b5['y'], this['z'] += _0x1ee4b5['z'], this;
    } ['addScalar'](_0x4bd08e: any) {
        return this['x'] += _0x4bd08e, this['y'] += _0x4bd08e, this['z'] += _0x4bd08e, this;
    } ['sub'](_0x5f12db: any) {
        return this['x'] -= _0x5f12db['x'], this['y'] -= _0x5f12db['y'], this['z'] -= _0x5f12db['z'], this;
    } ['equals'](_0x438c1a: any) {
        return this['x'] === _0x438c1a['x'] && this['y'] === _0x438c1a['y'] && this['z'] === _0x438c1a['z'];
    } ['subScalar'](_0x327c9f: any) {
        return this['x'] -= _0x327c9f, this['y'] -= _0x327c9f, this['z'] -= _0x327c9f, this;
    } ['multiply'](_0x35270c: any) {
        return this['x'] *= _0x35270c['x'], this['y'] *= _0x35270c['y'], this['z'] *= _0x35270c['z'], this;
    } ['multiplyScalar'](_0x2959b4: any) {
        return this['x'] *= _0x2959b4, this['y'] *= _0x2959b4, this['z'] *= _0x2959b4, this;
    } ['round']() {
        return this['x'] = Math.round(this['x']), this['y'] = Math.round(this['y']), this['z'] = Math.round(this['z']), this;
    } ['floor']() {
        return this['x'] = Math.floor(this['x']), this['y'] = Math.floor(this['y']), this['z'] = Math.floor(this['z']), this;
    } ['ceil']() {
        return this['x'] = Math.ceil(this['x']), this['y'] = Math.ceil(this['y']), this['z'] = Math.ceil(this['z']), this;
    } ['magnitude']() {
        return Math.sqrt(this['x'] * this['x'] + this['y'] * this['y'] + this['z'] * this['z']);
    } ['normalize']() {
        let pMagnitude: any = this['magnitude'];
        if (isNaN(pMagnitude)) pMagnitude = 0;
        return this['multiplyScalar'](1 / pMagnitude);
    } ['forward']() {
        const _0x527c6d = mathClass.fromObject(this)['multiplyScalar'](Math['PI'] / 180);
        return new mathClass(-Math.sin(_0x527c6d['z']) * Math.abs(Math.cos(_0x527c6d['x'])), Math.cos(_0x527c6d['z']) * Math.abs(Math.cos(_0x527c6d['x'])), Math.sin(_0x527c6d['x']));
    } ['getDistance'](_0x4245eb: any) {
        const [_0x10a8ac, _0x550d66, _0x63e54c] = [this['x'] - _0x4245eb['x'], this['y'] - _0x4245eb['y'], this['z'] - _0x4245eb['z']];
        return Math.sqrt(_0x10a8ac * _0x10a8ac + _0x550d66 * _0x550d66 + _0x63e54c * _0x63e54c);
    } ['getDistanceFromArray'](_0x11e135: any) {
        const [_0x27a475, _0x59a0d9, _0x57f7ef] = [this['x'] - _0x11e135[0], this['y'] - _0x11e135[1], this['z'] - _0x11e135[2]];
        return Math.sqrt(_0x27a475 * _0x27a475 + _0x59a0d9 * _0x59a0d9 + _0x57f7ef * _0x57f7ef);
    }
    static ['fromArray'](_0x1ace9a: any) {
        return new mathClass(_0x1ace9a[0], _0x1ace9a[1], _0x1ace9a[2]);
    }
    static ['fromObject'](_0xe1c7c2: any) {
        return new mathClass(_0xe1c7c2['x'], _0xe1c7c2['y'], _0xe1c7c2['z']);
    }
}
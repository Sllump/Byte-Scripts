import { atom } from "recoil";

export const activeState = atom({
    key: 'activeState',
    default: 'personal',
})
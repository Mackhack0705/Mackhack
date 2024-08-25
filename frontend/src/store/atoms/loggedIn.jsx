import { atom } from 'recoil';

export const loggedInAtom = atom({
    key: "loggedInAtom",
    default: !window.localStorage.getItem('token')
})
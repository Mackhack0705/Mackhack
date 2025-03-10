import { atom } from 'recoil';

export interface Lesson {

}

export const lessonAtom = atom({
    key: "lessonAtom",
    default: [] as Lesson[]
})
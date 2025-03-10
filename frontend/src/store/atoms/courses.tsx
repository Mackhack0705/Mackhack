import { atom } from 'recoil';

export interface Course {
    id: string,
    
}

export const courseAtom = atom({
    key: "courseAtom",
    default: [] as Course[]
})
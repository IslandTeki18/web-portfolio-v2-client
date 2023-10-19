import { atom } from "recoil";

export const projectListState = atom({
    key: "ProjectList",
    default: []
})

export const projectLimitedState = atom({
    key: "ProjectLimited",
    default: []
})

export const projectDetailsState = atom({
    key: "ProjectDetails",
    default: {} as any
})
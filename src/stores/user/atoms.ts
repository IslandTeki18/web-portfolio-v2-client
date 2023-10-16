import { atom } from "recoil";

export const userRoleState = atom({
    key: 'userRole',
    default: 'user',
  });

export const userObjState = atom({
    key: "userObj",
    default: {}
})
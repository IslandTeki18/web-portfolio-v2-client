import { atom } from "recoil";

export const userRoleState = atom({
    key: 'userRole',
    default: localStorage.getItem("userRoleState") || 'user',
  });

export const userObjState = atom({
    key: "userObj",
    default: {}
})
export const storage = {
    getUserInfo: () => {
      return JSON.parse(window.localStorage.getItem("userInfo") as string);
    },
    clearUserInfo: () => window.localStorage.removeItem("userInfo"),
  };
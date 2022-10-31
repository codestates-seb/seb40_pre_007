import { atom } from "recoil";

export const isLoginState = atom({
  key: "isLogin",
  default: false,
});

export const accessTokenState = atom({
  key: "accessToken",
  default: localStorage.getItem("accessToken") || "",
});

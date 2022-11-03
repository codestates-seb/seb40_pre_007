import { atom } from "recoil";

export const isLoginState = atom({
  key: "isLogin",
  default: localStorage.getItem("accessToken") ? true : false,
});

export const accessTokenState = atom({
  key: "accessToken",
  default: localStorage.getItem("accessToken") || "",
});

export const userNameState = atom({
  key: "userName",
  default: localStorage.getItem("userName") || "",
});

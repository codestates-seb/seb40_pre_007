import axios from "axios";
const accessToken = localStorage.getItem("accessToken") || "";

export const client = axios.create({
  baseURL: "http://ec2-3-34-19-99.ap-northeast-2.compute.amazonaws.com:8080",
  headers: {
    withCredentials: true,
    Authorization: `${accessToken}`,
    "Content-Type": `application/json`,
  },
});

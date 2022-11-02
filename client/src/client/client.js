import axios from "axios";

const accessToken = localStorage.getItem("accessToken") || "";

export const client = axios.create({
  headers: {
    withCredentials: true,
    Authorization: `${accessToken}`,
    "Content-Type": `application/json`,
  },
});

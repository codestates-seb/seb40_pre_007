import axios from "axios";

const accessToken = localStorage.getItem("accessToken") || "";

export const client = axios.create({
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": `application/json`,
  },
});

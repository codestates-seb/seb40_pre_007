import axios from "axios";

const accessToken = localStorage.getItem("accessToken") || "";

export const client = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${accessToken}`,
  },
});

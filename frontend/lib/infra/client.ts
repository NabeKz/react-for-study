import axios from "axios";

const client = axios.create({
  baseURL: process.env.BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60 * 1000,
});

export { client };

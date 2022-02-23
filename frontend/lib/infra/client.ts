import axios from "axios";

const client = axios.create({
  baseURL: process.env.BASE_URL || "",
  timeout: 60 * 1000,
});

export { client };

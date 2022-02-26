import axios from "axios";
import { paths } from "./schemas";

const client = axios.create({
  baseURL: process.env.BASE_URL || "",
  timeout: 60 * 1000,
});

const endpoints = (path: keyof paths) => path

export { client, endpoints };

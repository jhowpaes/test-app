import axios from "axios";
import { CHATGPT_API_KEY } from "@env";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1/engines/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CHATGPT_API_KEY}`,
  },
});

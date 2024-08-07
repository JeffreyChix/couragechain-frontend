import axios from "axios";

import { CONFIG } from "@/config";

const BASE_URL = `${CONFIG.API_URL}/api/v1/secure`;

const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export { client, BASE_URL };

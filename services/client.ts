import axios from "axios";

import { CONFIG } from "@/config";

const client = axios.create({
  baseURL: `${CONFIG.API_URL}/api/v1/secure`,
  withCredentials: true,
});

export { client };

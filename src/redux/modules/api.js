import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const jsonServerAPI = axios.create({
  baseURL: "http://localhost/3000",
});

const authServerAPI = axios.create({
  baseURL: BASE_URL,
});

// jsonServerAPI.interceptors.request.use(async function (config) {
//   const response = await authServerAPI.get("/user");
//   return config;
// });
jsonServerAPI.interceptors.request.use(async function (config, headers) {
  const response = await authServerAPI.get("/user", {
    headers: headers,
  });
  return response;
});

export { jsonServerAPI, authServerAPI };

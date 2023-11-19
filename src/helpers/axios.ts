import axios from "axios";

//apply base url for axios
const API_URL = "https://650af6bedfd73d1fab094cf7.mockapi.io/";

const axiosApi = axios.create({
  baseURL: API_URL,
});


// axiosApi.defaults.headers.common.Authorization =
//   "Bearer " + localStorage.getItem("token") ||
//   sessionStorage.getItem("token") ||
//   "";

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export function get(url: string, config = {}) {
  return axiosApi.get(url, { ...config });
}

export function post(url: string, data: object, config = {}) {
  return axiosApi.post(url, data, { ...config });
}

export function put(url: string, data: object, config = {}) {
  return axiosApi.put(url, data, { ...config });
}

export function patch(url: string, data: object, config = {}) {
  return axiosApi.patch(url, data, { ...config });
}

export function del(url: string, config = {}) {
  return axiosApi.delete(url, { ...config });
}

import axios from "axios";

class Api {
  api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  constructor() {
    this.api.interceptors.request.use(); // todo: 필요 시 interceptor 추가
    this.api.interceptors.response.use(); // todo: 필요 시 interceptor 추가
  }

  get<T>(url: string, params?: unknown) {
    return this.api.get<T>(url, { params });
  }

  post<T>(url: string, data?: unknown) {
    return this.api.post<T>(url, data);
  }

  put<T>(url: string, data?: unknown) {
    return this.api.put<T>(url, data);
  }

  delete<T>(url: string) {
    return this.api.delete<T>(url);
  }
}

export default Api;

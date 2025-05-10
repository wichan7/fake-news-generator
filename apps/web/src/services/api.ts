import axios, { type AxiosInstance } from "axios";

class Api {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });

    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error),
    );
  }

  get<Response>(url: string, params?: object) {
    return this.api.get<Response>(url, { params });
  }

  post<Request, Response>(url: string, data?: Request) {
    return this.api.post<Response>(url, data);
  }

  put<Request, Response>(url: string, data?: Request) {
    return this.api.put<Response>(url, data);
  }

  delete<Response = void>(url: string) {
    return this.api.delete<Response>(url);
  }
}

export default Api;

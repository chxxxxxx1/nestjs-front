import type { Axios, AxiosRequestConfig } from 'axios';
import axios from 'axios';

class Http {
  private axios: Axios;
  constructor(axios: Axios) {
    this.axios = axios;
  }
  public async get<T>(url: string, opt?: AxiosRequestConfig) {
    return await this.axios.get<T>(url, opt);
  }

  public async post<T>(url: string, { data, ...opt }: AxiosRequestConfig) {
    return await this.axios.post<T>(url, data, opt);
  }
}

export const http = new Http(axios);

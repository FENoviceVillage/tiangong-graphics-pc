import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { message } from 'antd'
import type { CustomConfig } from './type'

class Request {
  private axios: AxiosInstance

  constructor(params: CreateAxiosDefaults) {
    this.axios = axios.create(params)

    this.axios.interceptors.request.use((config) => {
      nprogress.start()
      return config
    }, (error) => {
      nprogress.done()
      return Promise.reject(error)
    })

    this.axios.interceptors.response.use((response) => {
      nprogress.done()
      return response
    }, (error) => {
      nprogress.done()
      return Promise.reject(error)
    })
  }

  private request(params: AxiosRequestConfig) {
    return this.axios.request(params)
  }

  public async post<T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }): Promise<AxiosResponse<K>> {
    try {
      const res = await this.request({
        method: 'POST',
        data,
        ...requestConfig,
      })
      return res.data
    }
    catch (error: any) {
      customConfig.showMsg && message.error(error.message)
      return Promise.reject(error)
    }
  }

  public async get<T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }): Promise<AxiosResponse<K>> {
    try {
      const res = await this.request({
        method: 'GET',
        params: data,
        ...requestConfig,
      })
      return res.data
    }
    catch (error: any) {
      customConfig.showMsg && message.error(error.message)
      return Promise.reject(error)
    }
  }
}
const request = new Request({
  baseURL: 'https://www.tuocad.com/tuo-cms',
})
window.$ = {
  post: <T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }) => request.post<T, K>(data, requestConfig, customConfig),
  get: <T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }) => request.get<T, K>(data, requestConfig, customConfig),
}

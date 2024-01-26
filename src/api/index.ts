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

  public post<T extends Record<string, any>, K extends Record<string, any>>(data: T, customConfig: CustomConfig, requestConfig: AxiosRequestConfig) {
    return this.request({
      method: 'POST',
      data,
      ...requestConfig,
    }).then((res: AxiosResponse<K>) => {
      return res.data
    }).catch((error: AxiosError) => {
      customConfig.showMsg && message.error(error.message)
      return Promise.reject(error)
    })
  }

  public get<T extends Record<string, any>, K extends Record<string, any>>(data: T, customConfig: CustomConfig, requestConfig: AxiosRequestConfig) {
    return this.request({
      method: 'GET',
      params: data,
      ...requestConfig,
    }).then((res: AxiosResponse<K>) => {
      return res.data
    }).catch((error) => {
      customConfig.showMsg && message.error(error.message)
      return Promise.reject(error)
    })
  }
}

window.$ = {
  post: <T extends Record<string, any>, K extends Record<string, any>>(data: T, customConfig: CustomConfig, requestConfig: AxiosRequestConfig) => new Request({}).post<T, K>(data, customConfig, requestConfig),
  get: <T extends Record<string, any>, K extends Record<string, any>>(data: T, customConfig: CustomConfig, requestConfig: AxiosRequestConfig) => new Request({}).get<T, K>(data, customConfig, requestConfig),
}

declare global {
  interface Window {
    $: {
      post: <T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }) => Promise<AxiosResponse<K>>
      get: <T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }) => Promise<AxiosResponse<K>>
    }
  }

  declare const $ = {
    post: <T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }) => Promise<AxiosResponse<K>>,
    get: <T extends Record<string, any>, K extends Record<string, any>>(data: T, requestConfig: Omit<AxiosRequestConfig, 'method'>, customConfig: CustomConfig = { showMsg: false }) => Promise<AxiosResponse<K>>,
  }
}

export interface CustomConfig {
  showMsg?: boolean
}

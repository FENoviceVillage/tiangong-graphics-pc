declare global {
  interface Window {
    $: {
      post: <T extends Record<string, any>, K extends Record<string, any>>(data: T, customConfig: CustomConfig, requestConfig: AxiosRequestConfig) => Promise<K>
      get: <T extends Record<string, any>, K extends Record<string, any>>(data: T, customConfig: CustomConfig, requestConfig: AxiosRequestConfig) => Promise<K>
    }
  }
}

export interface CustomConfig extends AxiosRequestConfig {
  showMsg?: boolean
}

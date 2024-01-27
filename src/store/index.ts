import { create } from 'zustand'

interface State {
  products: ProductResponse['data']
  videos: VideoResponse['data']
  news: NewsResponse['data']
}

interface Action {
  getProductsInfo: () => void
  getVideosInfo: () => void
  getNewsInfo: () => void
}

export const useAppStore = create<State & Action>(set => ({
  products: [],
  videos: [],
  news: [],
  getProductsInfo: async () => {
    const res: any = await $.get<object, ProductResponse>({}, {
      url: '/api/products',
    })

    return set(state => ({
      ...state,
      products: res.data,
    }))
  },
  getVideosInfo: async () => {
    const res: any = await $.get<object, VideoResponse>({}, {
      url: '/api/videos',
    })
    return set(state => ({
      ...state,
      videos: res.data,
    }))
  },
  getNewsInfo: async () => {
    const res: any = await $.get<object, NewsResponse>({}, {
      url: '/api/news',
    })
    return set(state => ({
      ...state,
      news: res.data,
    }))
  },
}))

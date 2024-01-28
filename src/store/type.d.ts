interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface Meta {
  pagination: Pagination
}

interface RequestParams {
  'pagination[page]'?: number
  'pagination[pageSize]'?: number
  'pagination[withCount]'?: number
}

interface ProductResponse {
  data: ProductItem[]
  meta: Meta
}

interface ProductItem {
  id: number
  attributes: ProductInfo
}

interface ProductInfo {
  title: string
  description: string
  image: string
  video: string
  shortdescription: string
  functiondescription: string
  featuredescription: string
  version: string
  manual?: any
  smallimage: string
  midimage: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface VideoResponse {
  data: VideoItem[]
  meta: Meta
}

interface VideoItem {
  id: number
  attributes: VideoInfo
}

interface VideoInfo {
  title: string
  description: string
  url: string
  image: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface NewsResponse {
  data: NewsItem[]
  meta: Meta
}

interface NewsItem {
  id: number
  attributes: NewsInfo
}

interface NewsInfo {
  title: string
  content: string
  image: string
  brief: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

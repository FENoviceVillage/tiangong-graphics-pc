/**
 * 获取产品信息
 */
export function getProductsInfo(params: any) {
  return $.get(params, {
    url: '/api/products',
  })
}

/**
 * 获取视频信息
 */
export function getVideosInfo(params: any) {
  return $.get(params, {
    url: '/api/videos',
  })
}

/**
 * 获取新闻信息
 */
export function getNewsInfo(params: any) {
  return $.get(params, {
    url: '/api/news',
  })
}

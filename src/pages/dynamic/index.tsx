import dayjs from 'dayjs'
import DynamicCategory from './components/category'
import DynamicTable from './components/table/index'
import styles from './index.module.scss'
import ContactUs from '@/components/contactUs/index'

function Dynamic() {
  const getVideosInfo = async (params: RequestParams) => {
    const res = await window.$.get<VideoResponse, RequestParams>(params, { url: '/api/videos' })
    return {
      data: res.data.map(item => ({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.description,
        time: dayjs(item.attributes.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
        img: item.attributes.image,
        video: item.attributes.url,
      })),
      pagination: res.meta.pagination,
    }
  }

  const getNewsInfo = async (params: RequestParams) => {
    const res = await window.$.get<NewsResponse, RequestParams>(params, { url: '/api/news' })
    return {
      data: res.data.map(item => ({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.content,
        time: dayjs(item.attributes.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
        img: item.attributes.image,

      })),
      pagination: res.meta.pagination,
    }
  }

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>天工图学系列产品动态</div>
        <div className={styles.bannerDesc}>3D模型解析平台、智能制造报价系统、工程笔记本产品动态，产品更新， 产品教程， 使用案例等新闻资讯，帮助您了解天工图学产品的最新信息，掌握行业动态</div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyMain}>
          <DynamicTable title="相关视频" service={getVideosInfo} href="#video"></DynamicTable>
          <DynamicTable title="新闻资讯" service={getNewsInfo} href="#news"></DynamicTable>
        </div>
        <div className={styles.bodyAside}>
          <DynamicCategory></DynamicCategory>
          <ContactUs></ContactUs>
        </div>
      </div>
    </>
  )
}

export default Dynamic

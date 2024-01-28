import styles from './index.module.scss'
import VideoWithImg from '@/pages/home/components/VideoWithImg'
import TimeIcon from '@/assets/img/dynamic/tiangong-time-icon.png'

export interface TableItem {
  id: number
  title: string
  desc: string
  time: string
  img: string
  video?: string
}

interface Props {

  data: TableItem
}

function DynamicTableItem(props: Props) {
  const { data } = props

  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <div className={styles.itemContentTitle}>{data.title}</div>
        <div className={styles.itemContentArticle}>
          {data.desc}
        </div>
        <div className={styles.itemContentTime}>

          <img src={TimeIcon} className={styles.itemContentTimeIcon} />
          <div className={styles.itemContentTimeDesc}>{data.time}</div>
        </div>
      </div>
      {
       data.video
         ? (
           <div className={styles.itemImg}>
             <VideoWithImg imgSrc={data.img} videoSrc={data.video} hasControl />
           </div>
           )
         : <img src={data.img} className={styles.itemImg} />
      }
    </div>
  )
}

export default DynamicTableItem

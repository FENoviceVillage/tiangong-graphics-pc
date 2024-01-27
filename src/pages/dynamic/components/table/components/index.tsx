import styles from './index.module.scss'
import TimeIcon from '@/assets/img/dynamic/tiangong-time-icon.png'

export interface TableItem {
  id: number
  title: string
  desc: string
  time: string | number
  img: string
  url?: string
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
      <img src={data.img} className={styles.itemImg} />
    </div>
  )
}

export default DynamicTableItem

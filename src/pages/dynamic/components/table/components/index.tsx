import React from 'react'
import styles from './index.module.scss'
import DynamicItem from '@/assets/img/dynamic/tiangong-dynamic-item.png'
import TimeIcon from '@/assets/img/dynamic/tiangong-time-icon.png'

interface Props {}

function DynamicTableItem(props: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <div className={styles.itemContentTitle}>工业3D模型的格式被巨头垄断，格式文档保密，市面上很难实现在网页上...</div>
        <div className={styles.itemContentArticle}>
          工业3D模型的格式被巨头垄断，格式文档保密，市面上很难实现在网页上直 接浏览，进行模型的尺寸测量。市面上常用的把工业3D模型转工业3D模型的格式被巨头垄断，格式文档保密，市面上很难实现在网页上直 接浏览，进行模型的尺寸测量。市面上常用的把工业3D模型转
        </div>
        <div className={styles.itemContentTime}>
          <img src={TimeIcon} className={styles.itemContentTimeIcon} />
          <div className={styles.itemContentTimeDesc}>2023-12-18   16:25:44.077</div>
        </div>
      </div>
      <img src={DynamicItem} className={styles.itemImg} />
    </div>
  )
}

export default DynamicTableItem

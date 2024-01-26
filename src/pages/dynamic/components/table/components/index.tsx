import React from 'react'
import styles from './index.module.scss'
import DynamicItem from '@/assets/img/dynamic/tiangong-dynamic-item.png'
import TimeIcon from '@/assets/img/dynamic/tiangong-time-icon.png'

interface Props {}

function DynamicTableItem(props: Props) {
  return (
    <div className={styles.Item}>
      <div className={styles.ItemContent}>
        <div className={styles.ItemContentTitle}>工业3D模型的格式被巨头垄断，格式文档保密，市面上很难实现在网页上...</div>
        <div className={styles.ItemContentArticle}>工业3D模型的格式被巨头垄断，格式文档保密，市面上很难实现在网页上直 接浏览，进行模型的尺寸测量。市面上常用的把工业3D模型转</div>
        <div className={styles.ItemContentTime}>
          <img src={TimeIcon} className={styles.ItemContentTimeIcon} />
          <div className={styles.ItemContentTimeDesc}>2023-12-18   16:25:44.077</div>
        </div>
      </div>
      <img src={DynamicItem} className={styles.ItemImg} />
    </div>
  )
}

export default DynamicTableItem

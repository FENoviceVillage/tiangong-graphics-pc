import React from 'react'
import { Pagination } from 'antd'
import styles from './index.module.scss'

interface Props {
  title: string
}
function DynamicTable(props: Props) {
  const { title } = props
  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderTitle}>{title}</div>
        <div className={styles.tableHeaderDecoration}></div>
      </div>
      <div className={styles.tableBody}>
        <div className={styles.tableBodyContent}>

        </div>
        <div className={styles.tableBodyPagination}>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  )
}

export default DynamicTable

import React from 'react'
import Pagination from 'rc-pagination'
import styles from './index.module.scss'
import DynamicTableItem from './components/index'
import './rc-pagination.css'

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
          <DynamicTableItem></DynamicTableItem>
          <DynamicTableItem></DynamicTableItem>
          <DynamicTableItem></DynamicTableItem>
          <DynamicTableItem></DynamicTableItem>
        </div>
        <div className={styles.tableBodyPagination}>
          <Pagination total={1000} />
        </div>
      </div>
    </div>
  )
}

export default DynamicTable

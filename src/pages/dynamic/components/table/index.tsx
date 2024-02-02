import Pagination from 'rc-pagination'
import { useEffect, useState } from 'react'
import type { TableItem } from './components/item/index'
import DynamicTableItem from './components/item/index'
import styles from './index.module.scss'
import './rc-pagination.css'

interface TableData {
  data: TableItem[]
  pagination: Pagination
}

interface Props {
  title: string
  service: (params: RequestParams) => Promise<TableData>
  href?: string
}

function DynamicTable(props: Props) {
  const { title, service, href } = props
  const [pagination, setPagination] = useState<Pagination>({
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0,
  })

  const [TableData, setTableData] = useState<TableItem[]>([])

  const onPageChange = async (currentPage: number) => {
    const res = await service({
      'pagination[page]': currentPage,
      'pagination[pageSize]': 5,
    })
    setPagination(res.pagination)
    setTableData(res.data)
  }

  const scrollToHerf = () => {
    const hash = window.location.hash
    if (!hash)
      return
    const elm = document.getElementById(hash)
    if (!elm)
      return
    elm.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    onPageChange(1)
    window.scrollTo(0, 0)
    setTimeout(() => {
      scrollToHerf()
    }, 200)
  }, [])

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderTitle} id={href || ''}>{title}</div>
        <div className={styles.tableHeaderDecoration}></div>
      </div>
      <div className={styles.tableBody}>
        <div className={styles.tableBodyContent}>
          {
            TableData.map(item => <DynamicTableItem key={item.id} data={item} />)
          }
        </div>
        <div className={styles.tableBodyPagination}>
          <Pagination total={pagination.total} onChange={onPageChange} />
        </div>
      </div>
    </div>
  )
}

export default DynamicTable

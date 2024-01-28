import VedioWithImg from '../../../VedioWithImg'
import styles from './index.module.scss'

interface Props {
  isVedioleft?: boolean
  data: Record<string, any> | any
}

function Index(props: Props) {
  const { isVedioleft = true, data = {} } = props

  return (
    <>
      <div className={styles.product} style={{ flexDirection: isVedioleft ? 'row' : 'row-reverse' }}>
        <div className={styles.large}>
          <VedioWithImg vedioSrc={data?.video} imgSrc={data?.image} />
        </div>
        <div className={styles.small}>
          <div className={styles.smallItem}>
            <div className={styles.title}>
              {data?.title}
            </div>
            <div className={styles.itemText}>
              {data?.description}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

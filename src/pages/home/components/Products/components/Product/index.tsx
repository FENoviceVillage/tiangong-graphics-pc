import VideoWithImg from '../../../VideoWithImg'
import styles from './index.module.scss'

interface Props {
  isVideoleft?: boolean
  data: Record<string, any> | any
}

function Index(props: Props) {
  const { isVideoleft = true, data = {} } = props

  return (
    <>
      <div className={styles.product} style={{ flexDirection: isVideoleft ? 'row' : 'row-reverse' }}>
        <div className={styles.large}>
          <VideoWithImg videoSrc={data?.video} imgSrc={data?.image} isClickImgShowVideo />
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

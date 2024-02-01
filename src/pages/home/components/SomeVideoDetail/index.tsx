import VideoWithImg from '../../../../components/VideoWithImg'
import styles from './index.module.scss'

export default function Index(props: { data: any }) {
  const { data } = props
  const { title, image, url } = data
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <VideoWithImg imgSrc={image} videoSrc={url} hasControl isClickImgShowVideo isSmallVideo />
      </div>
      <div className={styles.bottom}>{title}</div>
    </div>
  )
}

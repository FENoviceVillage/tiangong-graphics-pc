import VedioWithImg from '../VedioWithImg'
import styles from './index.module.scss'

export default function Index(props: { data: any }) {
  const { data } = props
  const { title, image, url } = data
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <VedioWithImg imgSrc={image} vedioSrc={url} hasControl />
      </div>
      <div className={styles.bottom}>{title}</div>
    </div>
  )
}

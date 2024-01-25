import styles from './index.module.scss'

export default function Index(props: { value: string }) {
  const { value } = props
  return (
    <div className={styles.box}>
      <div className={styles.top}></div>
      <div className={styles.bottom}>{ value}</div>
    </div>
  )
}

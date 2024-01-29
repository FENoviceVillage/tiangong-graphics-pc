import classNames from 'classnames'
import pic from '../../../../assets/img/home/方向箭头.png'
import pic2 from '../../../../assets/img/home/方向箭头_white.png'
import styles from './index.module.scss'

export default function Index(props: { data: any, index: number }) {
  const { data, index } = props
  const { title, brief, image } = data
  return (
    <div className={index === 1 ? classNames(styles.box, styles.transform) : styles.box}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      {/* @ts-expect-error */}
      <div className={styles.textBox} style={index === 1 ? { backgroundColor: '#95BBCA', color: '#ffffff', boxShadow: '0px 6px 5px 0px rgba(149, 187, 202, 1)' } : null}>
        <div className={styles.time}>
          {title}
        </div>
        <div className={styles.text}>
          {brief}
        </div>
        <button className={styles.detail}>
          <div className={styles.flexbox}>
            <span>探索更多</span>
            <img src={index === 1 ? pic2 : pic} alt="" />
          </div>
        </button>
      </div>
    </div>
  )
}

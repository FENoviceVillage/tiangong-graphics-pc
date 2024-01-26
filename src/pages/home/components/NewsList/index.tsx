import pic from '../../../../assets/img/home/方向箭头.png'
import styles from './index.module.scss'

export default function Index(props: { style?: any }) {
  const { style } = props
  return (
    <div className={styles.box} style={style}>
      <div className={styles.img}></div>

      <div className={styles.textBox}>
        <div className={styles.time}>
          2023-12-19
        </div>
        <div className={styles.text}>
          从基于 occ内核会对一些模型无法测量准确的情况， 如何提高测量精度、压缩可视化文件大小?
        </div>
        <button className={styles.detail}>
          <div className={styles.flexbox}>
            <span>探索更多</span>
            <img src={pic} alt="" />
          </div>
        </button>
      </div>
    </div>
  )
}

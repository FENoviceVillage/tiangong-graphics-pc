import styles from './index.module.scss'

function Product(props: any) {
  const { title, description, version, video, shortdescription } = props?.Data

  return (
    <div className={styles.product}>
      <div className={styles.title}>{title}</div>
      <div>{shortdescription}</div>
      <div>标签</div>
      <div className={styles.nodes}>
        <div className={styles.node}>
          <div>
            开发商：
          </div>
        </div>
        <div className={styles.node}>
          <div>
            当前版本：
            {version}
          </div>
        </div>
        <div className={styles.node}>
          <div>
            产品类型：
          </div>
        </div>
        <div className={styles.node}>
          <div>
            产品功能：
          </div>
        </div>
        <div className={styles.explain}>
          本产品的分类与介绍仅供参考，具体以商家网站介绍为准，如有疑问请来电 010-00000000 资讯
        </div>
      </div>
    </div>
  )
}

export default Product

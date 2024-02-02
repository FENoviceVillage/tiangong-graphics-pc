import styles from './index.module.scss'

function Product(props: any) {
  const { title, featuredescription, version, functiondescription, shortdescription } = props?.Data

  return (
    <div className={styles.product}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={styles.title}>{title}</div>
        <div style={{ paddingRight: 90, color: '#0CAEDF', cursor: 'pointer', fontSize: 10, textDecoration: 'underline', height: 11 }}>查看详情</div>
      </div>
      <div className={styles.smallTitle}>{shortdescription}</div>
      <div>标签</div>
      <div className={styles.nodes}>
        <div className={styles.node}>
          <div>
            当前版本：
            {version}
          </div>
        </div>
        <div className={styles.node}>
          <div>
            产品特性：
            {functiondescription}
          </div>
        </div>
        <div className={styles.node}>
          <div>
            产品功能：
            {featuredescription}
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

import React from 'react'
import styles from './index.module.scss'

interface Props { }

function Product(props: Props) {
  return (
    <div className={styles.product}>
      <div className={styles.title}>工业3D模型解析平台</div>
      <div>更快、更准确的CAD数据转换工具包,3D数据格式转换首选解决方案。</div>
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

import React from 'react'
import styles from './index.module.scss'

export const Top: React.FC = () => {
  return (
    <div className={styles.top}>
      <div className={styles.h1}>
        工业3D模型解析平台
      </div>
      <div className={styles.h2}>
        更快、更准确的CAD数据转换SDK
      </div>
    </div>
  )
}
export default Top

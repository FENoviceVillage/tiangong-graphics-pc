import React from 'react'
import styles from './index.module.scss'

function Dynamic() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerTitle}>天工图学系列产品动态</div>
        <div className={styles.bannerDesc}>3D模型解析平台、智能制造报价系统、工程笔记本产品动态，产品更新， 产品教程， 使用案例等新闻资讯，帮助您了解天工图学产品的最新信息，掌握行业动态</div>
      </div>
      <div className={styles.body}></div>
    </>
  )
}

export default Dynamic

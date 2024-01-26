import React from 'react'
import Product from '../product'
import styles from './index.module.scss'
import product from '@//assets/img/quote/product.png'

// 导入下载图标
import downloadIcon from '@//assets/img/quote/download.png'

// 导入收藏图标
import collectIcon from '@//assets/img/quote/collect.png'

// 导入放大镜图标
import magnifierIcon from '@//assets/img/quote/magnifier.png'

// 导入申请试用图标
import trialIcon from '@//assets/img/quote/apply.png'

function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src={product} alt="产品图片" />
        <div style={{ padding: '0 12px' }}>
          <div className={styles.download}>
            <div className={styles.icon}>
              <img src={downloadIcon} alt="下载图标" />
              <span className={styles.text}>下载</span>
            </div>
            <div className={styles.icon}>
              <img src={collectIcon} alt="收藏图标" />
              <span className={styles.text}>收藏</span>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.btn1}>
              <img src={magnifierIcon} alt="放大镜图标" />
              <div className={styles.text}>查看价格</div>
            </div>
            <div className={styles.btn2}>
              <img src={trialIcon} alt="申请试用图标" />
              <div className={styles.text}>申请试用</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <Product />
      </div>
    </div>
  )
}

export default Header

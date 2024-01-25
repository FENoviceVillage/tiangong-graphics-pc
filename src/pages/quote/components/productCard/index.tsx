import React from 'react'
import styles from './index.module.scss'
import product from '@//assets/imgs/quote/product.png'
// 导入放大镜图标
import magnifierIcon from '@//assets/imgs/quote/放大镜图标.png';
// 导入申请试用图标
import trialIcon from '@//assets/imgs/quote/申请试用图标.png';
import Product from '../product';
interface Props { }

function ProductCard(props: Props) {
  return (
    <div className={styles.card}>
      <aside>
        <div className={styles.left}>
          <img src={product} alt="产品图片" />
          <div style={{ padding: '0 12px' }}>

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
      </aside>
      <main>
        <Product />
      </main>
    </div>
  )
}

export default ProductCard

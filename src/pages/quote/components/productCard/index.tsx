import React from 'react'
import Product from '../product'
import styles from './index.module.scss'
import product from '@/assets/img/quote/product.png'

// 导入放大镜图标
import magnifierIcon from '@/assets/img/quote/magnifier.png'

// 导入申请试用图标
import trialIcon from '@/assets/img/quote/apply.png'
import VideoWithImg from '@/components/VideoWithImg'

function ProductCard(props: any) {
  const productData = props?.Product?.attributes
  return (
    <div className={styles.card}>
      <aside>
        <div className={styles.left}>
          <div className={styles.video}>
            <img src={productData.smallimage} alt="" />
            {/* <VideoWithImg imgSrc={productData.smallimage} videoSrc={productData.video} hasControl /> */}
          </div>
          <div style={{ padding: '0 12px', width: '100%' }}>
            <div className={styles.price}>
              {/* <div className={styles.btn1}>
                <img src={magnifierIcon} alt="放大镜图标" />
                <div className={styles.text}>查看价格</div>
              </div> */}
              <div className={styles.btn2}>
                <img src={trialIcon} alt="申请试用图标" />
                <div className={styles.text}>申请试用</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main>
        <Product Data={productData} />
      </main>
    </div>
  )
}

export default ProductCard

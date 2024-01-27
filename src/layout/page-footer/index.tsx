import React from 'react'
import styles from './index.module.scss'
import PublicAccount from '@/assets/img/contactUs/tiangong-public-account.png'

function PageFooter() {
  return (
    <footer>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <div className={styles.bodyLeft}>
          <div className={styles.bodyLeftTitle}>联系我们</div>
          <div className={styles.bodyLeftDesc}>18574652970</div>
        </div>
        <div className={styles.bodyCenter}>
          <div className={styles.bodyCenterBox}>邮箱: tiangongtuxue123@sina.com</div>
          <div className={styles.bodyCenterBox}>地址: xxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
        </div>
        <div className={styles.bodyRight}>
          <img src={PublicAccount} className={styles.bodyRightImg} />
        </div>
      </div>
      <div className={styles.footer}></div>
    </footer>
  )
}

export default PageFooter

import React from 'react'
import styles from './index.module.scss'
import RelationsImg from '@/assets/img/footer/tiangong-relations.png'
import SymbolImg from '@/assets/img/footer/tiangong-symbol.png'

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
          <img src={RelationsImg} className={styles.bodyRightImg} />
        </div>
      </div>
      <div className={styles.footer}>
        <div>厦门点射科技有限公司</div>
        <img src={SymbolImg} className={styles.footerImg} />
        <div>Copyright 2020-2023</div>
      </div>
    </footer>
  )
}

export default PageFooter

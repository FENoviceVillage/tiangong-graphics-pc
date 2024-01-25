import React from 'react'
import styles from './index.module.scss'

function PageFooter() {
  return (
    <footer>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <div className={styles.bodyLeft}></div>
        <div className={styles.bodyCenter}></div>
        <div className={styles.bodyRight}></div>
      </div>
      <div className={styles.footer}>
        <div>厦门点射科技有限公司</div>
        <img src=""></img>
        <div>Copyright 2020-2023</div>
      </div>
    </footer>
  )
}

export default PageFooter

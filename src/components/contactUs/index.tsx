import React from 'react'
import styles from './index.module.scss'
import PublicAccount from '@/assets/img/contactUs/tiangong-public-account.png'
import ServiceAccount from '@/assets/img/contactUs/tiangong-service-account.png'

function ContactUs() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactTitle}>联系我们</div>
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoEmail}>
          <div className={styles.contactInfoEmailDesc}>邮 箱: </div>
          <div className={styles.contactInfoEmailValue}>tiangongtuxue123@sina.com</div>
        </div>
        <div>电 话: 18574652970</div>
      </div>
      <div className={styles.contactCode}>
        <div className={styles.contactCodeItem}>
          <div className={styles.contactCodeItemWrapper}>
            <img src={PublicAccount} className={styles.contactCodeItemWrapperImg} />
          </div>
          <div className={styles.contactCodeItemDesc}>天工图学公众号</div>
        </div>
        <div className={styles.contactCodeItem}>
          <div className={styles.contactCodeItemWrapper}>
            <img src={ServiceAccount} className={styles.contactCodeItemWrapperImg} />
          </div>
          <div className={styles.contactCodeItemDesc}>售前售后服务号</div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

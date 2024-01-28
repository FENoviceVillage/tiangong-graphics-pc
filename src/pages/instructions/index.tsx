import React from 'react'
import RelatedProducts from '../quote/components/relatedProducts'
import ContactUs from '../../components/contactUs/index'
import styles from './index.module.scss'
import Instruction from './components/instruction'
import logoIcon from '@//assets/img/Instructions/logo.png'
import myIcon from '@//assets/img/Instructions/symbol.png'
import { useAppStore } from '@/store'

function Instructions() {
  const appStore = useAppStore()

  return (
    <div className={styles.main}>
      <div className={styles.layout}>
        <div className={styles.bg}>
          <main>
            <header>
              <img src={logoIcon} alt="" />
              <article>产品说明</article>
              <img src={myIcon} alt="" />
            </header>

            <article>
              {
                appStore.products.map((item, index) =>
                  <Instruction key={index} Data={item} />,
                )
              }
            </article>
          </main>
        </div>
        <aside className={styles.aside}>
          <RelatedProducts products={['工业3D模型解析平台', '智能制造报价系统', '工程师笔记本']} />
          <ContactUs containerClassName={styles.contact}></ContactUs>
        </aside>
      </div>
    </div>
  )
}

export default Instructions

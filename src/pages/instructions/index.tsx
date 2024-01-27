import React from 'react'
import RelatedProducts from '../quote/components/relatedProducts'
import ContactUs from '../../components/contactUs/index'
import styles from './index.module.scss'
import Instruction from './components/instruction'
import logoIcon from '@//assets/img/Instructions/logo.png'
import myIcon from '@//assets/img/Instructions/symbol.png'

interface Props {}

function Instructions(props: Props) {
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
              <Instruction></Instruction>
              <Instruction></Instruction>
              <Instruction></Instruction>
              <Instruction></Instruction>
              <Instruction></Instruction>
              <Instruction></Instruction>
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

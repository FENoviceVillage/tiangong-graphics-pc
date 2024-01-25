import React from 'react'
import styles from './index.module.scss'
import logoIcon from '@//assets/imgs/Instructions/图形logo.png'
import myIcon from '@//assets/imgs/Instructions/符号.png'
import Instruction from './components/instruction'
interface Props {}

function Instructions(props: Props) {
  return (
    <div className={styles.main}>
      <main>
        <header>
          <img src={logoIcon} alt="" />
          <article>产品说明</article>
          <img src={myIcon} alt="" />
        </header>

        <article>
          <Instruction></Instruction>
        </article>
      </main>
    </div>
  )
}

export default Instructions

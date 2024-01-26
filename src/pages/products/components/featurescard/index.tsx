import React from 'react'
import Lightning from '../../../../assets/img/products/lightning.png'
import style from './index.module.scss'

function FeaturesCard() {
  return (
    <div className={style.card}>
      <img src={Lightning} alt="" className={style.cardImg} />
      <h3>快速反应</h3>
      <p>模型解析速度行业领先</p>
    </div>
  )
}
export default FeaturesCard

import React from 'react'
import Lightning from '../../../../assets/img/products/lightning.png'
import style from './index.module.scss'

function FeaturesCard() {
  return (
    <div className={style.card}>
      <img src={Lightning} alt="" className={style.cardImg} />
      <h3>快速反应</h3>
      <span>模型解析速度行业领先</span>
    </div>
  )
}
export default FeaturesCard

// import React from 'react'

// import Lightning from '../../../../assets/img/products/lightning.png'
import Title from 'antd/es/typography/Title'
import { useEffect, useState } from 'react'
import Pushpins from '../../../../assets/img/products/Pushpins.png'
import style from './index.module.scss'

interface props {
  Featuresimg?: string
  title?: string
  subtitle?: string
  type?: number
}
function FeaturesCard(props: props) {
  const { title, Featuresimg, subtitle, type } = props
  const [CardType, setCardType] = useState<boolean>(false)
  if (type)
    setCardType(true)

  return (
    <div className={style.card}>
      <img src={Pushpins} alt="" className={style.cardPushpins} />
      <img src={Featuresimg} alt="特点" className={style.cardImg} />
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  )
}
export default FeaturesCard

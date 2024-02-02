import { useEffect, useState } from 'react'
import Pushpins from '../../../../assets/img/products/Pushpins.png'
import style from './index.module.scss'

interface Props {
  abilityTitle?: string
  abilitySubtitle: string | undefined
}

function AbilityCard(props: Props) {
  const { abilityTitle, abilitySubtitle } = props
  const regex = /(\S+)\s+(.+)/

  const matches = abilityTitle?.match(regex)
  const Title = () => {
    if (matches)
      return [matches[1], matches[2]]
    else
      return [abilityTitle]
  }
  return (
    <div className={style.card}>
      <img src={Pushpins} alt="" className={style.cardPushpins} />
      <div className={abilitySubtitle ? '' : style.cardBottom}>
        {
        Title().map((item, index) =>
          <h3 key={index}>{item}</h3>,
        )
      }
      </div>
      {
        abilitySubtitle && <span>{abilitySubtitle}</span>
      }
    </div>
  )
}
export default AbilityCard

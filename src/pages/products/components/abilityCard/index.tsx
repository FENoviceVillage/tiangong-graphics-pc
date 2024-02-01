import Pushpins from '../../../../assets/img/products/Pushpins.png'
import style from './index.module.scss'

interface Props {
  abilityTitle?: string
  abilitySubtitle?: string
}

function AbilityCard(props: Props) {
  const { abilityTitle, abilitySubtitle } = props
  return (
    <div className={style.card}>
      <img src={Pushpins} alt="" className={style.cardPushpins} />
      <h3>{abilityTitle}</h3>
      {
        abilitySubtitle && <span>{abilitySubtitle}</span>
      }
    </div>
  )
}
export default AbilityCard

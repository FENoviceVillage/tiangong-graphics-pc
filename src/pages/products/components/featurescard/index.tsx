import style from './index.module.scss'

interface props {
  Featuresimg?: string
  title?: string
  subtitle?: string

}
function FeaturesCard(props: props) {
  const { title, Featuresimg, subtitle } = props

  return (
    <div className={style.card}>
      <img src={Featuresimg} alt="特点" className={style.cardImg} />
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  )
}
export default FeaturesCard

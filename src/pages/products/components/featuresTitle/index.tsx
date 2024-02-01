import Shading from '../../../../assets/img/products/RShading.png'
import Symbol from '../../../../assets/img/products/symbol.png'
import style from './index.module.scss'

interface props {
  title?: string
}
function FeaturesTitle(props: props) {
  const { title } = props
  return (
    <div className={style.features}>
      <img src={Shading} alt="标志" className={style.featuresShading} />
      <h2>{title}</h2>
      {/* <img src={Symbol} alt="符号" className={style.featuresSymbol} /> */}
    </div>
  )
}
export default FeaturesTitle

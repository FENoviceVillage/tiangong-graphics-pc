import React from 'react'
import Shading from '../../../../assets/img/products/Shading.png'
import Symbol from '../../../../assets/img/products/symbol.png'
import style from './index.module.scss'

function FeaturesTitle() {
  return (
    <div className={style.features}>
      <img src={Shading} alt="标志" className={style.featuresShading} />
      {/* <div className={style.featuresTitle}> */}
      <h2>产品特点</h2>
      <img src={Symbol} alt="符号" className={style.featuresSymbol} />
      {/* </div> */}
    </div>
  )
}
export default FeaturesTitle

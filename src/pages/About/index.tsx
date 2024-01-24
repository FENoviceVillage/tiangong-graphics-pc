import React from 'react'
import style from './index.module.scss'

function About() {
  return (
    <div className={style.content}>
      <h3>天宫图学技术综合平台</h3>
      <div className={style.subheading}>
        <p>
          天工图学提供 3D模型解析平台、智能制造报价系统、工程笔记本等产品，
        </p>
        <p>试用，购买，技术支持</p>
        <p> 为构建工业3d应用程序提供优选解决方案。</p>
      </div>
    </div>
  )
}

export default About

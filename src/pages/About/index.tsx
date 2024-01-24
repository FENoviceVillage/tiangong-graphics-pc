import React from 'react'
import style from './index.module.scss'

function About() {
  return (
    <div className={style.content}>
      <div className={style.index}>
        <h3>天宫图学技术综合平台</h3>
        <div className={style.subheading}>
          <p>
            天工图学提供 3D模型解析平台、智能制造报价系统、工程笔记本等产品，
          </p>
          <p>试用，购买，技术支持</p>
          <p> 为构建工业3d应用程序提供优选解决方案。</p>
        </div>
      </div>
      <div className={style.body}>
        <div>
          <h1>
            工业3D模型解析平台 / 智能制造接单系统 / 工程笔记软件
          </h1>
          <div>
            <p>工业3d模型进行解析平台</p>
            <p>
              通过对工业3d模型进行解析，转化成tuo-visual格式数据和模型整体缩略图。客户调用平台提供的API接口，可以在客户端网页上直接浏览3d模型，提供
              模型尺寸测量、3D标注、特征识别、制造成本分析等功能
            </p>
            <p>
              智能制造接单系统开发成本分析、快速报价、实现在线交易
            </p>
            <p>
              它集合了尺寸测量、3D标注、特征识别、制造成本分析等核心功能，帮助客户快速准确的获取工业品的制造成本，为交易的双方完成直观而准确的信息
              交流、产生标注数据和报价清单数据，实现在线交易。
            </p>
            <p>
              工程师笔记本
            </p>
            <p>
              程师笔记本是一个工程模型管理系统。它帮助每一个工程师建立工程知识与3d模型的关联，结构设计与实际工程的关联。提供直观快速的交互体验帮助
              工程师建立自己的专属工程师知识库。

            </p>

          </div>
        </div>
        <div className={style.contact}>
          <h3>联系我们，获取天工图学技术免费试用和中文技术支持。</h3>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About

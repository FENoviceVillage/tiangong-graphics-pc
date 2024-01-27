import React from 'react'
import style from './index.module.scss'

function About() {
  return (
    <div className={style.content}>
      <div className={style.index}>
        <div className={style.subheading}>
          <h3>天宫图学技术综合平台</h3>
          <p>
            天工图学提供 3D模型解析平台、智能制造报价系统、工程笔记本等产品，
          </p>
          <p>试用，购买，技术支持</p>
          <p> 为构建工业3d应用程序提供优选解决方案。</p>
        </div>
      </div>
      <div className={style.body}>
        <div className={style.products}>
          <h1>
            工业3D模型解析平台 / 智能制造接单系统 / 工程笔记软件
          </h1>
          <div className={style.productsDetails}>
            <p>工业3d模型进行解析平台</p>
            <p>
              通过对工业3d模型进行解析，转化成tuo-visual格式数据和模型整体缩略图。客户调用平台提供的API接口，可以在客户端网页上直接浏览3d模型，提
              供模型尺寸测量、3D标注、特征识别、制造成本分析等功能
            </p>
            <p>
              智能制造接单系统开发成本分析、快速报价、实现在线交易
            </p>
            <p>
              它集合了尺寸测量、3D标注、特征识别、制造成本分析等核心功能，帮助客户快速准确的获取工业品的制造成本，为交易的双方完成直观而准确的信

              息交流、产生标注数据和报价清单数据，实现在线交易。
            </p>
            <p>
              工程师笔记本
            </p>
            <p>
              程师笔记本是一个工程模型管理系统。它帮助每一个工程师建立工程知识与3d模型的关联，结构设计与实际工程的关联。提供直观快速的交互体验帮

              助工程师建立自己的专属工程师知识库。
            </p>

          </div>
        </div>
        <div className={style.about}>
          <h1>关于本网站</h1>
          <p>
            致力于为通用机械、建筑、电子、汽车、航天及中大型企业等行业客户提供3d应用程序的解决方案。目前拥有的专利：（1）tuo_visual数据格式、

            （2）基于方向的参数曲面三角化方法、装置、设备及存储介质、（3）物体的变形动画的3d特效展示方法。使得应用数据更具有安全性、高精度

            （曲面测量数据达到1微米）等特点。天工图学产品拥有行业领先的3d技术，包括1、工业模型解析平台；2、企业智能制造报价系统开发；3、工

            程师笔记本等产品。
          </p>
          <p>天工图学是被证明了具有高性能和高可靠性的商业开发平台，在工程设计、可视化、制造成本分析和仿真等领域提供技术支持、软件开发和维护。</p>
        </div>
        <div className={style.contact}>
          <h1>联系我们，获取天工图学技术免费试用和中文技术支持。</h1>
          <div className={style.contactForm}>
            <div className={style.contactFormTrHeader}>电话</div>
            <div className={style.contactFormTrBody}>18574652970</div>

            <div className={style.contactFormTrHeader}>询价</div>
            <div className={style.contactFormTrBody}><a href="">获取产品报价</a></div>

            <div className={style.contactFormTrHeader}>
              免费试用
            </div>
            <div className={style.contactFormTrBody}><a href="">申请试用</a></div>

            <div className={style.contactFormTrHeader}>技术解答</div>
            <div className={style.contactFormTrBody}><a href="">获取技术支持</a></div>

            <div className={style.contactFormTrHeader}>邮箱</div>
            <div className={style.contactFormTrBody}>tiangongtuxue123@sina.com</div>

            <div className={style.contactFormTrHeader}>公众号</div>
            <div className={style.contactFormTrBody}>微信公众号“天工图学”，获取入门教程、产品资讯。</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

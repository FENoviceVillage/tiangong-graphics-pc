import React from 'react'
import style from './index.module.scss'
import FeaturesCard from './components/featurescard'
import FeaturesTitle from './components/featuresTitle'
import ExpericeForm from './components/experienceForm'

function Products() {
  return (
    <div className={style.content}>
      <div className={style.topShow}>
        <h2>工业3d模型解析平台</h2>
        <span>网页上直接浏览3d模型，尺寸测量、3D标注、特征识别、制造成本分析</span>
        <div className={style.interactButton}>
          <button>申请试用</button>
          <button>联系报价</button>
        </div>
        <div className={style.video}>
          <video src=""></video>
        </div>
        <div className={style.videoDetail}>
          <p>
            搭建高性能
            <span>web端3D可视化平台</span>
            ，提供更快、更准确的CAD
          </p>
          <p>
            数据解析
            <span>API</span>
            接口，为构建工业3D应用程序提供优选解决方案
          </p>
        </div>
        <div className={style.topLine}>
          <p>在线预览多种格式文件效果</p>
          <a href="">tuo visual</a>
          <a href="">SolidWorks</a>
          <a href="">STP</a>
          <a href="">CATIA</a>
          <a href="">查看格式清单</a>
        </div>
      </div>
      <div>
        <FeaturesTitle />
        <p>工业3D模型解析平台提供了API接口，实现客户快速的在线浏览3d模型、测量、3D标注、特征识别、制造成本分析等功能</p>
        <FeaturesCard />
      </div>
      <div>
        <FeaturesTitle />
        <p>工业3D模型解析平台提供了API接口，实现客户快速的在线浏览3d模型、测量、3D标注、特征识别、制造成本分析等功能</p>
        <FeaturesCard />
      </div>
      <hr />
      <div className={style.parse}>
        <h1>工业3d模型解析平台</h1>
        <p>
          通过对工业3d模型进行解析，转化成
          <a>tuo-visual</a>
          格式数据和模型整体缩略图。

        </p>
        <p>
          企业可以调用平台提供的
          <span>API接口</span>
          ，实现在客户端网页上直接浏览3d模型，提供
        </p>
        <p>
          模型尺寸测量、3D标注、特征识别、制造成本分析等功能
        </p>
      </div>
      <div className={style.palyFree}>
        <div className={style.paidContent}>
          <div className={style.interact}>
            <div className={style.crowd}>
              <h3>我是企业</h3>
              <p>
                免费试用10次，按需选配
                按次计费，买多省多
              </p>
              <div>
                <button>申请试用</button>
                <button>申请购买</button>
              </div>
            </div>
            <div className={style.crowd}>
              <h3>我是个人</h3>
              <p>
                免费试用10次，按需选配
                按次计费，买多省多
              </p>
              <div>
                <button>申请试用</button>
                <button>申请购买</button>
              </div>
            </div>
          </div>
          <div className={style.PaidForms}>
            1212
          </div>
        </div>
      </div>
      <div className={style.TrialForms}>
        <ExpericeForm />
      </div>
    </div>
  )
}

export default Products

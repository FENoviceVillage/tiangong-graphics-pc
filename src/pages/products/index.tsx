import React from 'react'
import style from './index.module.scss'
import FeaturesCard from './components/featurescard'
import FeaturesTitle from './components/featuresTitle'

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
      <div className={style.feature}>
        <FeaturesTitle />
        <p>工业3D模型解析平台提供了API接口，实现客户快速的在线浏览3d模型、测量、3D标注、特征识别、制造成本分析等功能</p>
        <div className={style.featureCard}>
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
        </div>
        <FeaturesTitle />
        <p>工业3D模型解析平台提供了API接口，实现客户快速的在线浏览3d模型、测量、3D标注、特征识别、制造成本分析等功能</p>
        <FeaturesCard />
      </div>
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
              </p>
              <p>按次计费，买多省多</p>
              <div className={style.crowdRequest}>
                <button>申请试用</button>
                <button>申请购买</button>
              </div>
            </div>
            <div className={style.crowd}>
              <h3>我是个人</h3>
              <p>
                免费试用10次，按需选配
              </p>
              <p>按次计费，买多省多</p>
              <div className={style.crowdRequest}>
                <button>申请试用</button>
                <button>申请购买</button>
              </div>
            </div>
          </div>
          <div className={style.PaidForms}>
            <div className={style.tab}>
              <div className={`${style.tabEnterprise} ${style.tabUsually}`}>企业版</div>
              <div className={`${style.tabPersonal} ${style.tabUsually}`}>个人版</div>
            </div>
            <div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  格式支持
                </div>
                <div className={style.attributeBody}>
                  <div>
                    主流3D格式
                  </div>
                  <div>
                    solidworks、NX、CATIA V5/V6、 Rhino、 Inventor、proE/Creo、 3DXML、JT、
                    parasolid、 step、iges
                  </div>
                  <div>
                    2D格式支持
                  </div>
                  <div>
                    dwg、dxf
                  </div>
                  <div>
                    主流开源格式支持
                  </div>
                  <div>
                    gltf、obj、 stl、fbx、dae、3mf、brep、gcode
                  </div>
                </div>
              </div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  3D 功能
                </div>
                <div className={style.attributeBody}>
                  <div>
                    3D界面交互(平移/缩放/旋转/默认视图切换)
                  </div>
                  <div>
                    3结构树
                  </div>
                  <div>
                    尺寸测量
                  </div>
                  <div>
                    剖切、爆炸、相框视图
                  </div>
                  <div>
                    缩略图生成
                  </div>
                  <div>
                    3D标注
                  </div>
                  <div>
                    投影模式切换（正交/透视）
                  </div>
                </div>
              </div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  2D 功能
                </div>
                <div className={style.attributeBody}>
                  <div>
                    2D界面交互（平移/缩放）
                  </div>
                  <div>
                    图层功能
                  </div>
                  <div>
                    layout
                  </div>
                </div>
              </div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  数据功能
                </div>
                <div className={style.attributeBody}>
                  <div>
                    3D文件测量参数自动输出
                  </div>
                </div>
              </div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  个人版功能
                </div>
                <div className={style.attributeBody}>
                </div>
              </div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  技术支持
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

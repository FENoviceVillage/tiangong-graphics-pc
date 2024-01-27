import { useParams } from 'react-router-dom'
import FeaturesTitle from './components/featuresTitle'
import FeaturesCard from './components/featurescard'
import style from './index.module.scss'

function Products() {
  const { category } = useParams()
  console.log(category)
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
                  格式支持1212
                </div>
                <div className={style.attributeBody}>
                  <div>
                    主流3D格式
                  </div>
                  <div>
                    主流3D格式
                  </div>
                  <div>
                    主流3D格式
                  </div>
                </div>
              </div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  格式支持1212
                </div>
                <div className={style.attributeBody}>
                  <div>
                    主流3D格式
                  </div>
                  <div>
                    主流3D格式
                  </div>
                  <div>
                    主流3D格式
                  </div>
                </div>
              </div>
              <div className={style.attribute}>
                <div className={style.attributeTitle}>
                  格式支持1212
                </div>
                <div className={style.attributeBody}>
                  <div>
                    主流3D格式
                  </div>
                  <div>
                    主流3D格式
                  </div>
                  <div>
                    主流3D格式
                  </div>
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

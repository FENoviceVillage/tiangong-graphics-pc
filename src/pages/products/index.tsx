import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import VideoWithImg from '../home/components/VideoWithImg'
import FeaturesTitle from './components/featuresTitle'
import FeaturesCard from './components/featurescard'
import style from './index.module.scss'
import AbilityCard from './components/abilityCard'
import { useAppStore } from '@/store'
import Cloud from '@/assets/img/products/Cloud.png'
import Gear from '@/assets/img/products/gear.png'
import Lightning from '@/assets/img/products/lightning.png'
import Ruler from '@/assets/img/products/ruler.png'

function Products() {
  const { category } = useParams()
  const appStore = useAppStore()
  const Data = appStore.products
  /* 数据定义 */
  const FeaturesData = [
    {
      midimage: Cloud,
      featuresTitle: '轻量化应用',
      subtitle: '可视化数据90%的压缩率',
    },
    {
      midimage: Gear,
      featuresTitle: '高性能',
      subtitle: '大模型的渲染性能高 (专注于Web端工程图形渲染)',
    },
    {
      midimage: Lightning,
      featuresTitle: '快速反应',
      subtitle: '自动识别，快捷高效',
    },
    {
      midimage: Ruler,
      featuresTitle: '测量功能丰富用',
      subtitle: '数据具有安全性、高精度 （曲面测量数据达到1微米）',
    },
  ]
  const ability = [
    {
      abilityTitle: '3D标注',
      abilitySubtitle: '直观 精准多维定义',
    },
    {
      abilityTitle: '特征识别',
      abilitySubtitle: '自动识别，快捷高效',
    },
    {
      abilityTitle: '制造成本 分析',
    },
  ]
  const { title, video, shortdescription, smallimage } = Data[Number(category) - 1]?.attributes || {}
  /* 滚动效果 */
  const myRef = useRef<any>(0)
  const ScrollRef = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className={style.content}>
      <div className={style.topShow}>
        <h2>{title}</h2>
        <span>{shortdescription}</span>
        <div className={style.interactButton}>
          <button>申请试用</button>
          <button>联系报价</button>
        </div>
        <div className={style.video}>
          <VideoWithImg imgSrc={smallimage} videoSrc={video} hasControl isClickImgShowVideo />
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
          <a onClick={ScrollRef}>查看格式清单</a>
        </div>
      </div>
      <div className={style.feature}>
        <FeaturesTitle title="产品特点" />
        <p>工业3D模型解析平台提供了API接口，实现客户快速的在线浏览3d模型、测量、3D标注、特征识别、制造成本分析等功能</p>
        <div className={style.featureCard}>
          {
            FeaturesData.map((item, index) => <FeaturesCard key={index} Featuresimg={item.midimage} title={item.featuresTitle} subtitle={item.subtitle} />)
          }
        </div>
        <FeaturesTitle title="高级功能" />
        <p>工业3D模型解析平台提供了API接口，实现客户快速的在线浏览3d模型、测量、3D标注、特征识别、制造成本分析等功能</p>
        <div className={style.featureCardN}>
          {
          ability.map((item, index) => <AbilityCard key={index} abilityTitle={item.abilityTitle} abilitySubtitle={item.abilitySubtitle} />)
        }
        </div>

      </div>
      <div className={style.parse}>
        <h1>工业3d模型解析平台</h1>
        <div>
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
      </div>
      <div className={style.palyFree} ref={myRef}>
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

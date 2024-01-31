import rightBottom from '../../assets/img/home/home_pic_logo.png'
import leftTop from '../../assets/img/home/home_pic_logo2.png'
import Carousel from './components/Carousel'
import NewsList from './components/NewsList'
import Products from './components/Products'
import SomeVideoDetail from './components/SomeVideoDetail'
import styles from './index.module.scss'
import { useAppStore } from '@/store'
import { useNavigate } from 'react-router-dom'
function Index() {
  const videos = useAppStore(state => state.videos)
  const news = useAppStore(state => state.news)
  const nav = useNavigate()
  const onClick = () => {
    nav("/quote")
  }
  return (
    <div className={styles.box}>
      <Carousel />
      <div className={styles.productBox}>
        <div className={styles.header}>
        </div>
        <div className={styles.headerText}>核心产品</div>
        <div className={styles.line}></div>
        <Products />
        <div style={{ textAlign: 'center', cursor: "pointer" }} onClick={onClick}>
          <div className={styles.more}>查阅更多</div>
          <div className={styles.moreShawdow}></div>
        </div>
      </div>
      <div className={styles.detail}>
        <img src={leftTop} alt="" className={styles.leftTop} />
        <img src={rightBottom} alt="" className={styles.rightBottom} />
        <div className={styles.title}>为构建工业3d应用程序提供优选解决方案</div>
        <div className={styles.content}>
          <div>
            天工图学--致力于为通用机械、建筑、电子、汽车、航天及中大型企业等行业客
            户提供3d应用程序的解决方案。
          </div>
          <div>
            目前拥有三大专利:&nbsp;&nbsp;&nbsp;(1)&nbsp;<a>tuo_visual数据格式</a>&nbsp;&nbsp;&nbsp;(2)&nbsp;<a>基于方向的参数曲面三角化
              方法、装置、设备及存储介质</a>&nbsp;&nbsp;&nbsp;(3)&nbsp;<a>物体的变形动画的3d特效展展示方法</a>
          </div>
          <div>
            天工图学产品拥有<span style={{ color: "#5C5C5C", fontWeight: 600 }}>行业领先的3d技术</span>——<span style={{ color: "#054B72", fontWeight: 600 }}>工业模型解析平台/企业智能制造报价系统开发/工程师笔记本等产品。</span>
          </div>
          <div>
            天工图学是被证明了具有高性能和高可靠性的商业开发平台台,在工程设计、可视化
            制造成本分析和仿真等领域提供技术支持、软件开发和维护
          </div>
        </div>
      </div>
      <div className={styles.someVideo}>
        <div className={styles.title}>相关视频</div>
        <div className={styles.VideoBox}>
          {
            videos.map((item) => {
              return <SomeVideoDetail key={item?.id} data={item?.attributes} />
            })
          }
          {
            videos.map((item) => {
              return <SomeVideoDetail key={item?.id} data={item?.attributes} />
            })
          }
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.title}>
          新闻资讯
        </div>
        <div className={styles.newBox}>
          {
            news?.map((item, index) => {
              // if (index === 1)
              return <NewsList index={index} key={item?.id} data={item?.attributes} />
              // return <NewsList key={item?.id} data={item?.attributes} />
            })
          }
        </div>
        <button>查看更多</button>
      </div>
      {/* <div className={styles.footer}>
        <div className={styles.title}>申请试用</div>
        <div className={styles.titleBar}>
          <div className={styles.bar}></div>
        </div>
        <div className={styles['form-container']}>
          <input type="text" placeholder="姓名" />
          <input type="text" placeholder="联系电话" />
          <input type="text" placeholder="公司名称" />
          <input type="email" placeholder="Email地址" />
          <textarea className={styles['full-row']} placeholder="内容描述：3D类产品使用经验、业务场景、面临的挑战、业务商业价值等"></textarea>
          <div className={styles.footerText}>若您需要帮助的话请告诉我们，让我们更好的去做到最好而不是做得更好010-00000000. 感谢！</div>
          <button>提交</button>
        </div>
      </div> */}
    </div>
  )
}

export default Index

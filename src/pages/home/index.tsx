import rightBottom from '../../assets/img/home/home_pic_logo.png'
import leftTop from '../../assets/img/home/home_pic_logo2.png'
import play from '../../assets/img/home/播放键.png'
import unplay from '../../assets/img/home/暂停建.png'
import NewsList from './components/NewsList'
import SomeVedioDetail from './components/SomeVedioDetail'
import styles from './index.module.scss'

function Index() {
  return (
    <div className={styles.box}>
      <div className={styles.homeTop}>
        <div className={styles.text}>
          <div>自研究高性能几何与图形算法</div>
          <div>为构建工业3D应用程序</div>
          <div>提供优选解决方案</div>
        </div>
        <div className={styles.btnBox}>
          <button className={styles.btn}>申请试用</button>
          <button className={styles.btn}>了解更多</button>
        </div>
        <div className={styles.slideBox}>
          <div className={styles.slide}></div>
          <div className={styles.vedioPlay}></div>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
        </div>
      </div>
      <div className={styles.productBox}>
        <div className={styles.header}>
        </div>
        <div className={styles.headerText}>核心产品</div>
        <div className={styles.line}></div>
        <div className={styles.product}>
          <div className={styles.large}>
            <div className={styles.largeItem}>
              <img src={unplay} className={styles.unplay} />
            </div>
          </div>
          <div className={styles.small}>
            <div className={styles.smallItem}>
              <div className={styles.itemText}>
                通过对工业3d模型进行解析，转化成tuo-visual
                格式数据和模型整体缩略图。客户调用平台提供
                的API接口，可以在客户端网页上直接浏览3d模
                型，提供模型尺寸测量、3D标注、特征识别、
                制造成本分析等功能
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product} style={{ marginTop: 30 }}>
          <div className={styles.small}>
            <div className={styles.smallItem}>
              <div className={styles.itemText}>
                通过对工业3d模型进行解析，转化成tuo-visual
                格式数据和模型整体缩略图。客户调用平台提供
                的API接口，可以在客户端网页上直接浏览3d模
                型，提供模型尺寸测量、3D标注、特征识别、
                制造成本分析等功能
              </div>
            </div>
          </div>
          <div className={styles.large}>
            <div className={styles.largeItem}>
              <img src={play} className={styles.unplay} />
            </div>
          </div>
        </div>
        <div className={styles.footerVedio}>
          <img src={play} className={styles.play} />
        </div>
        <div className={styles.more}>查阅更多</div>
        <div className={styles.moreShawdow}></div>
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
            目前拥有三大专利:&nbsp;&nbsp;&nbsp;(1)&nbsp;tuo_visual数据格式&nbsp;&nbsp;&nbsp;(2)&nbsp;基于方向的参数曲面三角化
            方法、装置、设备及存储介质&nbsp;&nbsp;&nbsp;(3)&nbsp;物体的变形动画的3d特效展展示方法
            天工图学产品拥有行业领先的3d技术--工业模型解析平台/企业智能制造报价系
            统开发/工程师笔记本等产品。
          </div>
          <div>
            天工图学是被证明了具有高性能和高可靠性的商业开发平台台,在工程设计、可视化
            制造成本分析和仿真等领域提供技术支持、软件开发和维护
          </div>
        </div>
      </div>
      <div className={styles.someVedio}>
        <div className={styles.title}>相关视频</div>
        <div className={styles.vedioBox}>
          {
            ['自研究高性能几何与图形算法，为构建工业3d 应用程序提供优选解决方案', '高性能web端3d可视化平台，提供更快、更准确 的cad数据解析API接口', '智能制造接单系统开发成本分析、快速报价、实现在 线交易', '从基于 occ内核会对一些模型无法测量准确的情况， 如何提高测量精度、压缩可视化文件大小', '调用平台提供的API接口，实现在客户端网页上直接 浏览3d模型', '调用平台提供的API接口，实现在客户端网页上直接 浏览3d模型'].map((item) => {
              return <SomeVedioDetail key={item} value={item} />
            })
          }
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.title}>
          新闻资讯
        </div>
        <div className={styles.newBox}>
          <NewsList />
          <NewsList style={{ transform: 'translateY(-46px)' }} />
          <NewsList />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.title}>申请试用</div>
        <div className={styles.titleBar}>
          <div className={styles.bar}></div>
        </div>
        <div className={styles['form-container']}>
          <input type="text" placeholder="姓名" />
          <input type="text" placeholder="联系电话" />
          <input type="text" placeholder="公司名称" />
          <input type="email" placeholder="Email地址" />
          {/* <input type="text"  placeholder="" /> */}
          <textarea className={styles['full-row']} placeholder="内容描述：3D类产品使用经验、业务场景、面临的挑战、业务商业价值等"></textarea>
          <div className={styles.footerText}>若您需要帮助的话请告诉我们，让我们更好的去做到最好而不是做得更好010-00000000. 感谢！</div>
          <button>提交</button>
        </div>
      </div>
    </div>
  )
}

export default Index

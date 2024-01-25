import React from 'react'
import styles from './index.module.scss'
import logo from '@//assets/imgs/quote/白色LOGO.png'
import SuccessIcon from './successIcon'
interface Props { }

function Main(props: Props) {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <img src={logo} alt="" />
        <div className={styles.h1}>
          工业3D模型解析平台
        </div>
        <div className={styles.h2}>
          更快、更准确的CAD数据转换SDK
        </div>
      </div>
      <div className={styles.footer}>

      </div>
      <div className={styles.content}>
        <div className={styles.border}>
          <SuccessIcon text={'工业级3D数据格式转换'} />
          <section>
            通过单个界面即可读取和写入30多种CAD文件
            格式，无需依赖任何CAD系统；
          </section>
          <section>
            运用多线程加载处理技术，加载时间平均比其
            他领先的SDK快8倍；
          </section>
          <section>
            高质量低内存存储，保存颜色、光效果等信
            息、支持查阅BREP、PMI、模型树、几何图形
            等信息。
          </section>
        </div>
        <div className={styles.border}>
          <SuccessIcon text={'世界级内核支持国产化'} />
          <section>
            享誉全球的内核型产品，助力客户获得 商业成功；
          </section>
          <section>
            借助经验丰富的专家团队，利用多年积累的知 识库进行开发，助您形成具有自主知识产权的 商业产品。
          </section>

        </div>


        <div className={styles.noBorder}>
          <SuccessIcon text={'国际标准格式 安全有保障'} />
          <article>
            符合 ISO 14739-1标准，导出包括 IGES、 STEP、 JT等
            标准格式，独立于其他第三方技术和外部库，中间格式
            规避风险。
          </article>

        </div>
        <div className={styles.noBorder}>
          <SuccessIcon text={'工业级3D数据格式转换'} />
          <article>
            天空图学独家提供专业的技术支持、定制开发等服务
            助您打造卓越应用。
          </article>
        </div>
        <footer>
          <div>
            搭建高性能web端3d可视化平台，提供更快、更准确的cad数据解析API接口，为构建工业3d应用程序提供优选
            解决方案！
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Main

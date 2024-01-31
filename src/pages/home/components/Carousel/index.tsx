import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd'
import styles from './index.module.scss'

export default function Index() {
  const [pic, setPic] = useState([] as any)
  const homePic = "https://res.tuocad.com/image/CAX%E5%A4%A9%E5%B7%A5%E5%9B%BE%E5%AD%A6/%E7%BD%91%E9%A1%B5%E5%A4%B4%E5%9B%BE/%E9%A6%96%E9%A1%B5-%E5%A4%A7%E6%A8%AA%E5%9B%BE%E9%95%BF%E6%9D%A1.jpg"
  useEffect(() => {
    const newPic = [{ img: homePic, text: '自研究高性能几何与图形算法为构建工业3D应用程序提供优选解决方案' }, { img: homePic, text: '自研究高性能几何与图形算法为构建工业3D应用程序提供优选解决方案' }, { img: homePic, text: '自研究高性能几何与图形算法为构建工业3D应用程序提供优选解决方案' }]
    setPic(newPic)
  }, [])

  return (
    <div className={styles.box}>
      <Carousel autoplay draggable>
        {pic.map((item: { img: string | undefined, text: string }, index: React.Key | null | undefined) => {
          return (
            <div className={styles.textBox} key={index}>
              <img src={item?.img} />
              <div className={styles.text}>{item.text}</div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

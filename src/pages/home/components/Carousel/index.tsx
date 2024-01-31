import React, { useEffect, useState } from 'react';
import homePic from '../../../../assets/img/home/home_nav_pic_map.png'
import styles from './index.module.scss'
import { Carousel } from 'antd';
export default function Index() {
    const [pic, setPic] = useState([] as any)

    useEffect(() => {
        const newPic = [{ img: homePic, text: "自研究高性能几何与图形算法为构建工业3D应用程序提供优选解决方案" }, { img: homePic, text: "自研究高性能几何与图形算法为构建工业3D应用程序提供优选解决方案" }, { img: homePic, text: "自研究高性能几何与图形算法为构建工业3D应用程序提供优选解决方案" }]
        setPic(newPic)
    }, [])

    return (
        <div className={styles.box}>
            <Carousel autoplay draggable >
            {pic.map((item: { img: string | undefined, text: string; }, index: React.Key | null | undefined) => {
                return (
                    <div className={styles.textBox} key={index}>
                        <img src={item?.img} />
                        <div className={styles.text}>{item.text}</div>
                    </div>
                );
            })}
            </Carousel>
        </div>
    );
}

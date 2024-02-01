import { useEffect, useRef, useState } from 'react'
import img from '@/assets/img/home/播放键.png'

export default function Index(props: { videoSrc: string, imgSrc: string, hasControl?: boolean, isClickImgShowVideo?: boolean, isSmallVideo?: boolean, btnStyle?: any }) {
  const { videoSrc, imgSrc, hasControl = true, isClickImgShowVideo = false, isSmallVideo = false, btnStyle = {}, ...resets } = props
  const controls = hasControl ? true : undefined
  const ref = useRef<HTMLVideoElement>(null)
  const [state, setState] = useState(isClickImgShowVideo)
  const [isPlay, setIsPlay] = useState(false)
  const handelImgClick = () => {
    setState(!state)
    setIsPlay(!isPlay)
    setTimeout(() => {
      ref?.current?.play()
    }, 0)
  }

  const style = isSmallVideo ? { width: 31, height: 31 } : { width: 75, height: 75 }
  useEffect(() => {
    if (isClickImgShowVideo !== state)
      setState(isClickImgShowVideo)
  }, [isClickImgShowVideo])

  return (
    <>
      {
      state
        ? (
          <div style={{ position: 'relative', height: '100%', cursor: 'pointer' }}>
            <img onClick={handelImgClick} src={imgSrc} style={{ width: '100%', height: '100%' }} />
            <img onClick={handelImgClick} src={img} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)', ...style, ...btnStyle }} />
          </div>
          )
        : (
          <video ref={ref} style={{ width: '100%', height: '100%', objectFit: 'cover' }} controls={controls} poster={imgSrc} preload="auto" {...resets}>
            <source src={videoSrc} type="video/mp4" />
            你的浏览器不支持HTML5视频。
          </video>
          )
    }
    </>
  )
}

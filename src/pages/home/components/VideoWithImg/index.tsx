import { useEffect, useRef, useState } from 'react'

export default function Index(props: { videoSrc: string, imgSrc: string, hasControl?: boolean, isClickImgShowVideo?: boolean }) {
  const { videoSrc, imgSrc, hasControl = true, isClickImgShowVideo = false, ...resets } = props
  const controls = hasControl ? true : undefined
  const ref = useRef<HTMLVideoElement>(null)
  const [state, setState] = useState(isClickImgShowVideo)
  const handelImgClick = () => {
    setState(!state)
    setTimeout(() => {
      ref?.current?.play()
    }, 0)
  }

  useEffect(() => {
    if (isClickImgShowVideo !== state)
      setState(isClickImgShowVideo)
  }, [isClickImgShowVideo])

  return (
    <>
      {
      state
        ? <img onClick={handelImgClick} src={imgSrc} style={{ width: '100%', height: '100%', cursor: 'pointer' }} />
        : (
          <video ref={ref} width="100%" height="100%" controls={controls} poster={imgSrc} preload="auto" {...resets}>
            <source src={videoSrc} type="video/mp4" />
            你的浏览器不支持HTML5视频。
          </video>
          )
    }
    </>
  )
}

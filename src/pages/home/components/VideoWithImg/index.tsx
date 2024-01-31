import { useEffect, useRef, useState } from "react"

export default function Index(props: { videoSrc: string, imgSrc: string, hasControl?: boolean, isClickImgShowVedio?: boolean }) {
  const { videoSrc, imgSrc, hasControl = true, isClickImgShowVedio = false, ...resets } = props
  const controls = hasControl ? true : undefined
  const ref = useRef<HTMLVideoElement>(null)
  const [state, setState] = useState(isClickImgShowVedio)
  const handelImgClick = () => {
    setState(!state)
    setTimeout(() => {
      ref?.current?.play()
    }, 0);
  }

  useEffect(() => {
    if (isClickImgShowVedio !== state) setState(isClickImgShowVedio)
  }, [isClickImgShowVedio])
  return <>
    {
      state ? <img onClick={handelImgClick} src={imgSrc} /> : <video ref={ref} width="100%" height="100%" controls={controls} poster={imgSrc} preload="auto" {...resets}>
        <source src={videoSrc} type="video/mp4" />
        你的浏览器不支持HTML5视频。
      </video>
    }</>
}

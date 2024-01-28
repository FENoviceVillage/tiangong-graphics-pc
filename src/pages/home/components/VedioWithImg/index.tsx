export default function Index(props: { vedioSrc: string, imgSrc: string, hasControl?: boolean }) {
  const { vedioSrc, imgSrc, hasControl = true, ...resets } = props
  const controls = hasControl ? true : undefined
  return (
    <video width="100%" height="100%" controls={controls} poster={imgSrc} preload="auto" {...resets}>
      <source src={vedioSrc} type="video/mp4" />
      你的浏览器不支持HTML5视频。
    </video>
  )
}

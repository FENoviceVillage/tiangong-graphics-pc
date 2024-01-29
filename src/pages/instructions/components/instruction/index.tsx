import styles from './index.module.scss'
import VideoWithImg from '@/pages/home/components/VideoWithImg'

interface Props {
  isFirst?: boolean
  Data?: any
}

function Instruction(props: Props) {
  const { description, title, video, smallimage } = props?.Data?.attributes

  return (
    <div className={styles.main}>
      {
        props.isFirst && (
          <div className={styles.fixed}>
            <div>文字说明</div>
            <footer></footer>
          </div>
        )
      }

      <aside>
        <VideoWithImg imgSrc={smallimage} videoSrc={video} hasControl />
      </aside>
      <div className={styles.context}>
        <div className={styles.header}>{title}</div>
        <article>
          <section>{description}</section>
        </article>
      </div>
    </div>
  )
}

export default Instruction

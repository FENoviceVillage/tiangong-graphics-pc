import styles from './index.module.scss'

interface Props {
  isFirst?: boolean
  Data?: any
}

function Instruction(props: Props) {
  const { description, title, video } = props?.Data?.attributes

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
        <video src={video}></video>
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

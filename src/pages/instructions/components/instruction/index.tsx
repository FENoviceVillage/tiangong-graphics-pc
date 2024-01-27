import styles from './index.module.scss'

interface Props {
  isFirst?: boolean
}

function Instruction(props: Props) {
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
        <video src=""></video>
      </aside>
      <div className={styles.context}>
        <div className={styles.header}>天工图学使用说明</div>
        <article>
          <section>通过单个界面即可读取和写入30多种CAD文件 格式，无需依赖任何CAD系统；</section>
          <section>通过单个界面即可读取和写入30多种CAD文件 格式，无需依赖任何CAD系统；</section>
          <section>通过单个界面即可读取和写入30多种CAD文件 格式，无需依赖任何CAD系统；</section>
        </article>
      </div>
    </div>
  )
}

export default Instruction

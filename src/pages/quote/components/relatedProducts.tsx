import styles from '../index.module.scss'
import triangleIcon from '@//assets/imgs/quote/三角形指示箭头.png';

interface Props {
  products: string[]
}

function RelatedProducts(props: Props) {
  return (
    <div className={styles.relatedProducts}>
      <header>
        <aside></aside>
        <article>相关产品</article>
      </header>
      <main>
        {
          props.products.map((value) => (
            <section>
              <img src={triangleIcon} alt="" />
              <div>{value}</div>
            </section>
          ))
        }
      </main>
    </div>
  )
}

export default RelatedProducts

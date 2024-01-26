import styles from '../index.module.scss'
import triangleIcon from '@//assets/img/quote/triangle.png'

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
      <main className={styles.productItem}>
        {
          props.products.map(value => (
            <section key={value}>
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

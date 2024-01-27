import classNames from 'classnames'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.scss'
import { useAppStore } from '@/store'

function ProductPopup() {
  const appStore = useAppStore()

  const navigate = useNavigate()

  const { category } = useParams()

  const onClick = (id: string) => {
    navigate({
      pathname: `/products/${id}`,
    })
  }

  return (
    <div className={styles.popup}>
      {
        appStore.products.map(item => (
          <div
            className={classNames({
              [styles.popupActive]: String(item.id) === category,
            })}
            key={item.id}
            onClick={() => onClick(String(item.id))}
          >
            {item.attributes.title}
          </div>
        ))
      }
    </div>
  )
}

export default ProductPopup

import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import styles from './index.module.scss'
import ProductPopup from './popup/popup'
import { useAppStore } from '@/store'
import Logo from '@/assets/img/header/tiangong-logo.png'

function PageHeader() {
  const appStore = useAppStore()
  const { category } = useParams()
  const [productPopupVisible, setProductVisible] = useState(false)

  const onProductMouseEnter = () => {
    setProductVisible(true)
  }
  const onProductMouseLeave = () => {
    setTimeout(() => {
      setProductVisible(false)
    }, 200)
  }

  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={Logo} />
      <div className={styles.headerTab}>
        <NavLink to="/home" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>首页</NavLink>
        <div className={styles.headerProduct} onMouseEnter={onProductMouseEnter} onMouseLeave={onProductMouseLeave}>
          <NavLink to={`/products/${appStore.products[0]?.id}`} className={() => category ? styles.headerTabActive : ''}>产品</NavLink>
          {
            productPopupVisible && <ProductPopup />
          }
        </div>
        <NavLink to="/quote" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>报价</NavLink>
        <NavLink to="/instructions" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>使用说明</NavLink>
        <NavLink to="/dynamic" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>动态</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>加入我们</NavLink>
      </div>
    </header>
  )
}

export default PageHeader

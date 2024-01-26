import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import Logo from '@/assets/img/header/tiangong-logo.png'

function PageHeader() {
  return (
    <header className={styles.header}>
      <img className={styles.headerLogo} src={Logo} />
      <div className={styles.headerTab}>
        <NavLink to="/home" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>  首页 </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>产品</NavLink>
        <NavLink to="/api" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>API</NavLink>
        <NavLink to="/quote" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>报价</NavLink>
        <NavLink to="/instructions" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>使用说明</NavLink>
        <NavLink to="/dynamic" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>动态</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.headerTabActive : ''}>加入我们</NavLink>
      </div>
    </header>
  )
}

export default PageHeader

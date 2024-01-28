import styles from './index.module.scss'
import CompanyDynamic from '@/assets/img/dynamic/tiangong-company-dynamic.png'
import ImplementationCase from '@/assets/img/dynamic/tiangong-implementation-case.png'
import ProductForge from '@/assets/img/dynamic/tiangong-product-forge.png'
import ProductUpdate from '@/assets/img/dynamic/tiangong-product-update.png'

function DynamicCategory() {
  return (
    <div className={styles.category}>
      <div className={styles.categoryTitle}>动态分类</div>
      <div className={styles.categoryContent}>
        <div className={styles.categoryContentItem}>
          <img src={CompanyDynamic} className={styles.categoryContentItemIcon} />
          <div className={styles.categoryContentItemText}>公司动态</div>
        </div>
        <div className={styles.categoryContentItem}>
          <img src={ImplementationCase} className={styles.categoryContentItemIcon} />
          <div className={styles.categoryContentItemText}>实施案例</div>
        </div>
        <div className={styles.categoryContentItem}>
          <img src={ProductUpdate} className={styles.categoryContentItemIcon} />
          <div className={styles.categoryContentItemText}>产品更新</div>
        </div>
        <div className={styles.categoryContentItem}>
          <img src={ProductForge} className={styles.categoryContentItemIcon} />
          <div className={styles.categoryContentItemText}>产品教程</div>
        </div>
      </div>
    </div>
  )
}

export default DynamicCategory

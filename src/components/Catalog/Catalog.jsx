import Card from "./Card"
import Aside from './Aside'

import styles from './Catalog.module.css'

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <Aside />

      <div className={styles.list}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Catalog

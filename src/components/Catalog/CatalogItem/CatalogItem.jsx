import classNames from 'classnames'

import styles from '../Catalog.module.css'

const CatalogItem = ({ product, inCart, addToCart }) => {
  const {
    name, image_url,
    abv, ibu, target_fg,
    target_og, ebc, srm,
  } = product

  const clickHandler = () => {
    addToCart(product)
  }

  return (
    <div className={classNames(styles.card, 'paper')}>
      <img className={styles.itemImage} src={image_url} alt='' draggable='false' />

      <div className={styles.itemProps}>
        <h3 className={styles.itemName}>{name}</h3>

        <p>ABV: {abv}%</p>
        <p>IBU: {ibu} IBU</p>
        <p>FG: {target_fg}</p>
        <p>OG: {target_og}</p>
        <p>SRM/EBC: {srm}/{ebc}</p>

        <button className={classNames(styles.toCart, 'btn', 'primary')} onClick={clickHandler} disabled={inCart}>
          {inCart ? 'In the Cart' : 'Add to Cart'}
        </button>
      </div>

    </div>
  )
}

export default CatalogItem

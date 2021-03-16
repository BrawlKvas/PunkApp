import classNames from 'classnames'

import styles from '../Cart.module.css'

const CartItem = ({ id, image_url, name, removeFromCart }) => {
  return (
    <div className={classNames(styles.item, 'paper')}>
      <img src={image_url} className={styles.itemImg} alt='' />
      <h3 className={styles.itemName}>{name}</h3>
      <button
        className={styles.itemBtn + ' btn secondary'}
        onClick={() => removeFromCart(id)}
      >
        Remove from Cart
      </button>
    </div>
  )
}

export default CartItem

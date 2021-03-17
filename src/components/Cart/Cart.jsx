import { connect } from 'react-redux'
import CartItem from './CartItem/CartItem'
import { removeFromCart } from '../../redux/actions'

import styles from './Cart.module.css'

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className={styles.cart}>
      <h1>Cart</h1>

      <div className={styles.list}>
        {
          cart.map(item => (
            <CartItem
              {...item}
              removeFromCart={removeFromCart}
              key={item.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default connect((state) => ({
  cart: state.cart
}), { removeFromCart })(Cart)

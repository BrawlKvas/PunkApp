import classNames from 'classnames'
import { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setQuery } from '../../redux/actions'
import SignUpModal from './SignUpModal/SignUpModal'

import styles from './Header.module.css'

const Header = ({ cartCounter, query, setQuery }) => {
  const [open, setOpen] = useState(false)

  const changeHandler = ({ target }) => {
    if (target.value !== ' ')
      setQuery(target.value)
  }

  return (
    <header className={styles.header}>
      <div className={classNames(styles.container, 'container')}>
        <input
          className={styles.inputSearch}
          type='text'
          placeholder='Search'
          value={query}
          onChange={changeHandler}
        />
        <nav className={styles.nav}>
          <button className={classNames(styles.navItem, 'btn')} onClick={() => setOpen(true)}>Sign Up</button>

          <NavLink to='/catalog' className={classNames(styles.navItem, 'btn')}>
            Catalog
          </NavLink>

          <NavLink to='/cart' className={classNames(styles.navItem, 'btn')}>
            Cart <span className={styles.cartCounter}>{cartCounter}</span>
          </NavLink>
        </nav>
      </div>

      {open && <SignUpModal onClose={() => setOpen(false)} />}

    </header>
  )
}

export default connect((state) => ({
  cartCounter: state.cart.length,
  query: state.query
}), { setQuery })(Header)

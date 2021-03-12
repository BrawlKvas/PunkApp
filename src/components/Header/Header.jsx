import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container + ' container'}>
        <form className={styles.formSearch}>
          <input className={styles.inputSearch} type="text" placeholder="Search" />
        </form>

        <nav className={styles.nav}>
          <button className='btn'>Sign Up</button>
          <button className='btn'>Cart</button>
        </nav>
      </div>
    </header>
  )
}

export default Header

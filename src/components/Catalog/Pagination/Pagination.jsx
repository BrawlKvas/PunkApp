import classNames from 'classnames'
import { connect } from 'react-redux'
import { setCurrentPage } from '../../../redux/actions'
import { getPages } from './utils'

import styles from './Pagination.module.css'

const Pagination = ({ currentPage, countPage, setCurrentPage }) => {

  const pages = getPages(countPage, currentPage)

  return (
    <div className={styles.pagination}>
      <button
        className='btn'
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>

      {
        pages.map((item, i) => (
          <button
            className={classNames('btn', { 'primary': currentPage === item })}
            key={i}
            onClick={() => setCurrentPage(item)}
            disabled={item === -1}
          >
            {item !== -1 ? item : '...'}
          </button>
        ))
      }

      <button
        className='btn'
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === countPage}
      >
        {'>'}
      </button>
    </div>
  )
}

export default connect((state) => ({
  currentPage: state.currentPage,
  countPage: Math.ceil(state.catalog.length / state.pageSize)
}), { setCurrentPage })(Pagination)

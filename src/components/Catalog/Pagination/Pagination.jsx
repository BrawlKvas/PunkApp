import classNames from 'classnames'
import { connect } from 'react-redux'
import { setCurrentPage } from '../../../redux/rootReducer'

import styles from './Pagination.module.css'

const Pagination = ({ currentPage, countPage, setCurrentPage }) => {

  let arr = []

  // -1 = '...'
  if (countPage < 6) {
    for (let i = 1; i < countPage + 1; i++)
      arr.push(i)
  } else if (currentPage < 5) {
    arr = [1, 2, 3, 4, 5, -1, countPage]
  } else if (currentPage > countPage - 4) {
    arr = [1, -1, countPage - 4, countPage - 3, countPage - 2, countPage - 1, countPage]
  } else {
    arr = [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, countPage]
  }

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
        arr.map((item, i) => (
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

import { useEffect } from 'react'
import { connect } from 'react-redux'
import Catalog from './Catalog'
import { getBeer, addToCart, setCurrentPage } from '../../redux/rootReducer'

const CatalogContainer = ({ getBeer, query, setCurrentPage, ...props }) => {

  useEffect(() => {
    setCurrentPage(1)
    getBeer(query)
  }, [query, getBeer, setCurrentPage])

  return <Catalog {...props} />
}

export default connect((state) => ({
  catalog: state.catalog,
  query: state.query,
  cart: state.cart,
  pageSize: state.pageSize,
  currentPage: state.currentPage
}), { getBeer, addToCart, setCurrentPage })(CatalogContainer)

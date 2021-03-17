import createAction from './createAction'
import { requestBeer } from '../api'

import * as C from './constants'

export const setCatalog = createAction(C.SET_CATALOG)
export const setCurrentPage = createAction(C.SET_CURRENT_PAGE)
export const addToCart = createAction(C.ADD_TO_CART)
export const removeFromCart = createAction(C.REMOVE_FROM_CARD)
export const setQuery = createAction(C.SET_QUERY)

export const getBeer = (beerName) => (dispatch) => {
  requestBeer(beerName)
    .then(data => dispatch(setCatalog(data)))
}

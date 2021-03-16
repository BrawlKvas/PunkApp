import { PunkAPI } from '../api'
import createAction from './createAction'

const SET_CATALOG = 'root/SET_CATALOG'
const SET_CURRENT_PAGE = 'root/SET_CURRENT_PAGE'
const ADD_TO_CART = 'root/ADD_TO_CART'
const REMOVE_FROM_CARD = 'root/REMOVE_FROM_CARD'
const SET_QUERY = 'root/SET_QUERY'

const initialState = {
  catalog: [],
  query: '',

  cart: [],

  pageSize: 8,
  currentPage: 1
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CATALOG:
      return {
        ...state,
        catalog: payload
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload
      }

    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          payload
        ]
      }

    case REMOVE_FROM_CARD:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      }

    case SET_QUERY:
      return {
        ...state,
        query: payload
      }

    default:
      return state
  }
}

export default rootReducer

//AC
export const setCatalog = createAction(SET_CATALOG)
export const setCurrentPage = createAction(SET_CURRENT_PAGE)
export const addToCart = createAction(ADD_TO_CART)
export const removeFromCart = createAction(REMOVE_FROM_CARD)
export const setQuery = createAction(SET_QUERY)

//THUNK
export const getBeer = (beerName) => (dispatch) => {
  PunkAPI.getBeer(beerName)
    .then(data => dispatch(setCatalog(data)))
}

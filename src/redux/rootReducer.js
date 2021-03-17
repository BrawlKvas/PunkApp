import * as C from './constants'

const initialState = {
  catalog: [],
  query: '',

  cart: [],

  pageSize: 8,
  currentPage: 1
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case C.SET_CATALOG:
      return {
        ...state,
        catalog: payload
      }

    case C.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload
      }

    case C.ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          payload
        ]
      }

    case C.REMOVE_FROM_CARD:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      }

    case C.SET_QUERY:
      return {
        ...state,
        query: payload
      }

    default:
      return state
  }
}

export default rootReducer

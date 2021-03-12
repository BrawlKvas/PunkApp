const SET_LIST = 'catalog/SET_LIST'
const ADD_TO_CART = 'catalog/ADD_TO_CART'
const REMOVE_FROM_CARD = 'catalog/REMOVE_FROM_CARD'
const SET_CURRENT_PAGE = 'catalog/SET_CURRENT_PAGE'

const initialState = {
  list: [],

  cart: [],

  pageSize: 20,
  countPage: null,
  currentPage: 1
}

const catalogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LIST:
      return {
        ...state,
        list: payload
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
        cart: state.cart.filter(item => item !== payload)
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload
      }

    default:
      return state
  }
}

export default catalogReducer

//AC
export const setList = (payload) => ({ type: SET_LIST, payload })
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload })
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CARD, payload })
export const setCurrentPage = (payload) => ({ type: SET_CURRENT_PAGE, payload })

//THUNK
export const getList = (page, sizePage) => (dispatch) => {
  
}
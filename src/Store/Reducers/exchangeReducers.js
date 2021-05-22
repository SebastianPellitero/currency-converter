import {GET_DEFAULT_EXCHANGE, FETCH_DEFAULT_EXCHANGE, FETCH_EXCHANGE} from '../Actions/actionTypes'

export default function exchangeReducer(state = 0, action) {
  switch (action.type) {
    case FETCH_DEFAULT_EXCHANGE:
      return state
    case GET_DEFAULT_EXCHANGE:
      return {...state, ...action.exchange.payload}
    case FETCH_EXCHANGE:
      return state
    default:
      return state
  }
}
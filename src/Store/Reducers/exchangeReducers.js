import { GET_CURRENCY, FETCH_DEFAULT_CURRENCY, PENDING_CURRENCY } from '../Actions/actionTypes'

const initialState = {
  status: 'Inicial',
  base: 'EUR',
  date: 0,
  rates: []
}

const currencyInfo = (state, payload) => {
  const { base, date, rates } = payload;
  return {...state, ...{base, date, rates, status:'Complete'} }
}

export default function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEFAULT_CURRENCY:
      return state
    case PENDING_CURRENCY:
      return { ...state, status:'Pending'}
    case GET_CURRENCY:
      return currencyInfo(state,action.exchange.payload)
      //return {...state, status: 'completed', ...action.exchange.payload}
    default:
      return state
  }
}
import { GET_CURRENCY, FETCH_CURRENCY, PENDING_CURRENCY, SET_TARGET_CURRENCY, TOGGLE_CHART } from '../Actions/actionTypes'

const initialState = {
  status: 'Inicial',
  base: 'EUR',
  date: 0,
  rates: [],
  toCurrency: '',
  showChart: false
}

const currencyInfo = (state, payload) => {
  const { base, date, rates } = payload;
  return {...state, ...{base, date, rates, status:'Complete'} }
}

export default function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CURRENCY:
      return state
    case PENDING_CURRENCY:
      return { ...state, status:'Pending'}
    case SET_TARGET_CURRENCY: 
      return { ...state, toCurrency: action.targetCurrency }
    case GET_CURRENCY:
      return currencyInfo(state,action.exchange.payload)
    case TOGGLE_CHART:
      return { ...state, showChart: action.toggle}
    default:
      return state
  }
}
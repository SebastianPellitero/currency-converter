import {GET_CURRENCY, FETCH_DEFAULT_CURRENCY, PENDING_CURRENCY} from './actionTypes'

export const fetchDefault = () => ({
      type: FETCH_DEFAULT_CURRENCY
});

export const pendingCurrency = () => ({
      type: PENDING_CURRENCY
});

export const getCurrencyData = (exchange) => ({
      type: GET_CURRENCY,
      exchange
});

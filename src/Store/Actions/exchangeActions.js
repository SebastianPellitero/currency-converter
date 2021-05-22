import {GET_DEFAULT_EXCHANGE, FETCH_DEFAULT_EXCHANGE, FETCH_EXCHANGE} from './actionTypes'

export const fetchDefault = () => ({
      type: FETCH_DEFAULT_EXCHANGE
});

export const getDefaultData = (exchange) => ({
      type: GET_DEFAULT_EXCHANGE,
      exchange
});

export const fetchNewExchange = () => ({
      type: FETCH_EXCHANGE,
});


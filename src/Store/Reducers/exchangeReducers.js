import {
    GET_CURRENCY,
    PENDING_CURRENCY,
    SET_TARGET_CURRENCY,
    TOGGLE_CHART
} from '../Actions/actionTypes';

const initialState = {
    isLoading: false,
    base: 'EUR',
    date: 0,
    rates: [],
    toCurrency: '',
    showChart: false
};

const currencyInfo = (state, payload) => {
    const { base, date, rates } = payload;
    return { ...state, ...{ base, date, rates, isLoading: false } };
};

export default function exchangeReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING_CURRENCY:
            return { ...state, isLoading: true };
        case SET_TARGET_CURRENCY:
            return { ...state, toCurrency: action.targetCurrency };
        case GET_CURRENCY:
            return currencyInfo(state, action.exchange.payload);
        case TOGGLE_CHART:
            return { ...state, showChart: action.toggle };
        default:
            return state;
    }
}

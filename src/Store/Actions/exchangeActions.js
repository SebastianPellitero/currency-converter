import {
    GET_CURRENCY,
    FETCH_CURRENCY,
    PENDING_CURRENCY,
    FETCH_TIMESERIES,
    PENDING_TIMESERIES,
    GET_TIMESERIES,
    SET_TARGET_CURRENCY,
    TOGGLE_CHART,
    SET_DATE_TIMESERIES
} from './actionTypes';

export const fetchCurrency = currencySelected => ({
    type: FETCH_CURRENCY,
    currencySelected
});

export const pendingCurrency = () => ({
    type: PENDING_CURRENCY
});

export const getCurrencyData = exchange => ({
    type: GET_CURRENCY,
    exchange
});

export const asignTargetCurrency = targetCurrency => ({
    type: SET_TARGET_CURRENCY,
    targetCurrency
});

export const fetchChartData = (
    starDate,
    endDate,
    currencySelected,
    currencyTarget
) => ({
    type: FETCH_TIMESERIES,
    starDate,
    endDate,
    currencySelected,
    currencyTarget
});

export const pendingChartData = () => ({
    type: PENDING_TIMESERIES
});

export const getTimeSeries = timeSeries => ({
    type: GET_TIMESERIES,
    timeSeries
});

export const toggleChart = toggle => ({
    type: TOGGLE_CHART,
    toggle
});

export const setChartTime = startTime => ({
    type: SET_DATE_TIMESERIES,
    startTime
});

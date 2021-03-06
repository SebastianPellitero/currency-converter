import axios from 'axios';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { DEFAULT_CURRENCY_VALUE, DEFAULT_TARGET_VALUE } from '../../constants';

import {
    getCurrencyData,
    pendingCurrency,
    pendingChartData,
    getTimeSeries
} from '../Actions/exchangeActions';
import { FETCH_CURRENCY, FETCH_TIMESERIES } from '../Actions/actionTypes';

const getCurrency = (currencySelected = DEFAULT_CURRENCY_VALUE) =>
    axios.get('https://api.exchangerate.host/latest', {
        params: { base: currencySelected }
    });

const getChartData = (
    fromDate,
    toDate,
    currencySelected,
    currencyTarget = DEFAULT_TARGET_VALUE
) =>
    axios.get('https://api.exchangerate.host/timeseries', {
        params: {
            base: currencySelected,
            symbols: currencyTarget,
            start_date: fromDate,
            end_date: toDate
        }
    });

const showChart = state => state.exchange.showChart;

function* fetchExchangeData(action) {
    try {
        const { currencySelected } = action;
        yield put(pendingCurrency());
        const response = yield call(() => getCurrency(currencySelected));
        yield put(
            getCurrencyData({
                payload: response.data
            })
        );
        const isChartVisible = yield select(showChart);
        if (isChartVisible) yield put({ type: FETCH_TIMESERIES });
    } catch (e) {
        console.log(e);
    }
}

const handleEndDate = () => {
    let todayDate = new Date();
    return todayDate.toJSON().slice(0, 10);
};

const getStartingDate = state => state.chartData.startingDate;
const getToCurrency = state => state.exchange.toCurrency;
const getFromCurrency = state => state.exchange.base;

function* fetchChartData(action) {
    try {
        const { starDate } = action;
        yield put(pendingChartData());
        const toCurrency = yield select(getToCurrency);
        const currencySelected = yield select(getFromCurrency);
        const storeStartingDate = yield select(getStartingDate);
        const response = yield call(() =>
            getChartData(
                starDate || storeStartingDate,
                handleEndDate(),
                currencySelected,
                toCurrency
            )
        );
        yield put(
            getTimeSeries({
                payload: response.data
            })
        );
    } catch (e) {
        console.log(e);
    }
}

function* mergerSaga() {
    yield all([
        takeLatest(FETCH_CURRENCY, fetchExchangeData),
        takeLatest(FETCH_TIMESERIES, fetchChartData)
    ]);
}

export default mergerSaga;

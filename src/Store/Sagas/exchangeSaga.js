import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { getCurrencyData, pendingCurrency } from '../Actions/exchangeActions'
import { FETCH_DEFAULT_CURRENCY } from '../Actions/actionTypes'

const getCurrency = () => axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=fb306a821e75fd43538ed3f6396a61e5', {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Csrf-Token': 'nocheck',
});

function* fetchExchangeData() {
  try {
    const response = yield call(getCurrency);
    yield put(pendingCurrency());
    // console.log(response.data)
    yield put(
      getCurrencyData({
        payload: response.data
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* mergerSaga() {
  yield all([takeLatest(FETCH_DEFAULT_CURRENCY, fetchExchangeData)]);
}

export default mergerSaga;

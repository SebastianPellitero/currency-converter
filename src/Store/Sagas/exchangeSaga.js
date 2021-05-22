import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {getDefaultData, fetchNewExchange } from '../Actions/exchangeActions'
import { FETCH_DEFAULT_EXCHANGE, FETCH_EXCHANGE } from '../Actions/actionTypes'

const getExchange = () => axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=fb306a821e75fd43538ed3f6396a61e5', {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	'Csrf-Token': 'nocheck',
});

function* fetchExchangeData() {
  try {
    const response = yield call(getExchange);
    console.log(response.data)
    yield put(
      getDefaultData({
        payload: response.data
      })
    );
  } catch (e) {
    console.log(e);
  }
}

function* mergerSaga() {
  yield all([takeLatest(FETCH_DEFAULT_EXCHANGE, fetchExchangeData)]);
}

export default mergerSaga;

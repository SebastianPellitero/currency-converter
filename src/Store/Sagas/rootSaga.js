import { all, fork } from "redux-saga/effects";

import mergerSaga from "./exchangeSaga";

export function* rootSaga() {
  yield all([fork(mergerSaga)]);
}
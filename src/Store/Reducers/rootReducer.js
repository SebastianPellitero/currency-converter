import { combineReducers } from "redux";

import exchangeReducer from "./exchangeReducers";

const rootReducer = combineReducers({
  exchange: exchangeReducer,
});

export default rootReducer;
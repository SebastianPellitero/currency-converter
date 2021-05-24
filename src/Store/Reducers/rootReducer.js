import { combineReducers } from "redux";

import exchangeReducer from "./exchangeReducers";
import currencyChartReducer from "./currencyChartReducer";

const rootReducer = combineReducers({
  exchange: exchangeReducer,
  chartData: currencyChartReducer
});

export default rootReducer;
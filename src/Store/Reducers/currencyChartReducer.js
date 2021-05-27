import {
    PENDING_TIMESERIES,
    GET_TIMESERIES,
    SET_DATE_TIMESERIES
} from '../Actions/actionTypes';
import { DEFAULT_STARTING_DATE } from '../../constants';

const initialState = {
    isLoading: false,
    base: 'EUR',
    timeSeries: [],
    startingDate: DEFAULT_STARTING_DATE
};

const timeSerieNormalization = (state, action) => {
    const { timeSeries } = action;
    const { rates } = timeSeries.payload;
    let timeSerieRates = [];
    Object.entries(rates).forEach(([key, value]) =>
        timeSerieRates.push({ x: new Date(key), y: Object.values(value)[0] })
    );
    return { ...state, timeSeries: timeSerieRates, isLoading: false };
};

export default function currencyChartReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING_TIMESERIES:
            return { ...state, isLoading: true };
        case GET_TIMESERIES:
            return timeSerieNormalization(state, action);
        case SET_DATE_TIMESERIES:
            return { ...state, startingDate: action.startTime };
        default:
            return state;
    }
}

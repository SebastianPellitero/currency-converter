import { PENDING_TIMESERIES, GET_TIMESERIES } from '../Actions/actionTypes';

const initialState = {
    isLoading: false,
    base: 'EUR',
    timeSeries: []
};

const timeSerieNormalization = (state, action) => {
    const { timeSeries } = action;
    const { rates } = timeSeries.payload;
    let chobi = [];
    Object.entries(rates).forEach(([key, value]) =>
        chobi.push({ x: new Date(key), y: Object.values(value)[0] })
    );
    return { ...state, timeSeries: chobi, isLoading: false };
};

export default function exchangeReducer(state = initialState, action) {
    switch (action.type) {
        case PENDING_TIMESERIES:
            return { ...state, isLoading: true };
        case GET_TIMESERIES:
            return timeSerieNormalization(state, action);
        default:
            return state;
    }
}

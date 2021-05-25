import {
    FETCH_TIMESERIES,
    PENDING_TIMESERIES,
    GET_TIMESERIES
} from '../Actions/actionTypes';

const initialState = {
    status: 'Inicial',
    base: 'EUR'
};

const timeSerieNormalization = (state, action) => {
    const { timeSeries } = action;
    const { rates } = timeSeries.payload;
    let chobi = [];
    Object.entries(rates).forEach(([key, value]) =>
        chobi.push({ x: new Date(key), y: Object.values(value)[0] })
    );
    return { ...state, timeSeries: chobi, status: 'Complete' };
};

export default function exchangeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TIMESERIES:
            return state;
        case PENDING_TIMESERIES:
            return { ...state, status: 'Pending' };
        case GET_TIMESERIES:
            return timeSerieNormalization(state, action);
        default:
            return state;
    }
}

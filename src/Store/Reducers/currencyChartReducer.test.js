import { PENDING_TIMESERIES, GET_TIMESERIES } from '../Actions/actionTypes';
import currencyChartReducer, { initialState } from './currencyChartReducer';
import { DEFAULT_STARTING_DATE } from '../../constants';

const mockTimeSeries = {
    payload: {
        rates: {
            '2021-03-03': { ANG: 2 },
            '2021-03-10': { ANG: 5 }
        }
    }
};

const mockProcessedTimeSeries = [
    { x: new Date('2021-03-03'), y: 2 },
    { x: new Date('2021-03-10'), y: 5 }
];

describe('Currency Chart Reducer', () => {
    it('should return the initial state', () => {
        expect(currencyChartReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle PENDING_TIMESERIES', () => {
        expect(
            currencyChartReducer(undefined, {
                type: PENDING_TIMESERIES,
                isLoading: true
            })
        ).toEqual({
            isLoading: true,
            base: 'EUR',
            timeSeries: [],
            startingDate: DEFAULT_STARTING_DATE
        });
    });

    it('should handle GET_TIMESERIES', () => {
        expect(
            currencyChartReducer(undefined, {
                type: GET_TIMESERIES,
                timeSeries: mockTimeSeries
            })
        ).toEqual({
            isLoading: false,
            base: 'EUR',
            timeSeries: mockProcessedTimeSeries,
            startingDate: DEFAULT_STARTING_DATE
        });
    });
});

import {
    FETCH_TIMESERIES,
    PENDING_TIMESERIES,
    GET_TIMESERIES
} from '../Actions/actionTypes';
import exchangeReducer from './exchangeReducers';

describe('Currency Chart Reducer', () => {
    it('should return the initial state', () => {
        expect(exchangeReducer(undefined, {})).toEqual([
            {
                isLoading: false,
                base: 'EUR',
                timeSeries: []
            }
        ]);
    });

    it('should handle ADD_TODO', () => {
        expect(
            exchangeReducer([], {
                type: FETCH_TIMESERIES,
                text: 'Run the tests'
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }
        ]);

        expect(
            exchangeReducer(
                [
                    {
                        text: 'Use Redux',
                        completed: false,
                        id: 0
                    }
                ],
                {
                    type: GET_TIMESERIES,
                    text: 'Run the tests'
                }
            )
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 1
            },
            {
                text: 'Use Redux',
                completed: false,
                id: 0
            }
        ]);
    });
});

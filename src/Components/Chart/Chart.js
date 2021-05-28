import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryLine, VictoryLabel } from 'victory';
import { StyledDatePicker, StyledChart } from './ChartStyle';
import ReactLoading from 'react-loading';
import {
    WHITE_GRAY_COLOR,
    SPINNER_TYPE_SPOKES,
    DEFAULT_STARTING_DATE
} from '../../constants';
import { FormattedMessage, injectIntl } from 'react-intl';

const Chart = props => {
    const { fetchTimeSerie, setChartTime } = props;
    const { formatMessage } = props.intl;

    const [startingDate, setStartingDate] = useState(DEFAULT_STARTING_DATE);

    useEffect(() => {
        fetchTimeSerie();
    }, [fetchTimeSerie]);

    const ChartView = () => {
        const {
            chartData: { timeSeries, isLoading }
        } = props;

        return (
            <StyledChart>
                {isLoading ? (
                    <ReactLoading
                        type={SPINNER_TYPE_SPOKES}
                        color={WHITE_GRAY_COLOR}
                    />
                ) : (
                    <VictoryChart height={250} width={500} scale={{ x: 'time' }}>
                        <VictoryLabel
                            text={formatMessage({
                                id: 'chart.title'
                            })}
                            x={225}
                            y={30}
                            textAnchor='middle'
                        />
                        <VictoryLine data={timeSeries} />
                    </VictoryChart>
                )}
            </StyledChart>
        );
    };

    return (
        <>
            <StyledDatePicker>
                <FormattedMessage id='chart.datePickerText' />
                <input
                    value={startingDate}
                    type='date'
                    aria-label='chart-date-input'
                    onChange={e => {
                        setStartingDate(e.target.value);
                        fetchTimeSerie(e.target.value);
                        setChartTime(e.target.value);
                    }}
                />
            </StyledDatePicker>
            <ChartView />
        </>
    );
};

export default injectIntl(Chart);

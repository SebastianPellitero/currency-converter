import React, { useEffect } from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import { StyledDatePicker, StyledChartContainer } from './ChartStyle';
import ReactLoading from 'react-loading';
import { WHITE_GRAY_COLOR, SPINNER_TYPE_SPOKES } from '../../constants';
import { FormattedMessage } from 'react-intl';

const Chart = props => {
    const { fetchTimeSerie, chartData } = props;

    useEffect(() => {
        fetchTimeSerie();
    }, [fetchTimeSerie]);

    const ChartView = () => {
        const { timeSeries, isLoading } = chartData;
        return (
            <StyledChartContainer>
                {isLoading ? (
                    <ReactLoading
                        type={SPINNER_TYPE_SPOKES}
                        color={WHITE_GRAY_COLOR}
                    />
                ) : (
                    <VictoryChart height={250} width={500} scale={{ x: 'time' }}>
                        <VictoryLine data={timeSeries} />
                    </VictoryChart>
                )}
            </StyledChartContainer>
        );
    };

    return (
        <>
            <StyledDatePicker>
                <FormattedMessage id='chart.datePickerText' />
                <input
                    type='date'
                    onChange={e => {
                        fetchTimeSerie(e.target.value);
                    }}
                />
            </StyledDatePicker>
            <ChartView className='chart' />
        </>
    );
};

export default Chart;

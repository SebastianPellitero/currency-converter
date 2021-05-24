import React, { useEffect } from 'react'
import { VictoryChart, VictoryLine } from "victory";

const Chart = props => {
    const { fetchTimeSerie, chartData } = props;
    const { timeSeries, status } = chartData;

    useEffect(() => {
        fetchTimeSerie();
    },
    [fetchTimeSerie]);

    const ChartView = () => {
        return (status === 'Complete') ?    
        <VictoryChart scale={{ x: "time" }}>
            <VictoryLine 
                data={timeSeries} 
            />
        </VictoryChart>
        :
        <></>
    }

    return (
        <>
            <input type="date" onChange={e => {fetchTimeSerie(e.target.value)}} /> 
            <ChartView />
        </>
    )    
}

 export default Chart;
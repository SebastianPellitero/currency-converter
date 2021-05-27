import { connect } from 'react-redux';
import { fetchChartData, setChartTime } from '../../Store/Actions/exchangeActions';
import Chart from './Chart';

const mapStateToProps = state => {
    return {
        chartData: state.chartData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTimeSerie: starDate => dispatch(fetchChartData(starDate)),
        setChartTime: starDate => dispatch(setChartTime(starDate))
    };
};

const ChartContainer = connect(mapStateToProps, mapDispatchToProps)(Chart);

export default ChartContainer;

import { connect } from 'react-redux';
import { fetchChartData } from '../../Store/Actions/exchangeActions'
import Chart from './Chart';

const mapStateToProps = state => {
  return {
    chartData: state.chartData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTimeSerie: (starDate) => dispatch(fetchChartData(starDate)),
  }
}

const ChartContainer = connect(mapStateToProps, mapDispatchToProps)(Chart);

export default ChartContainer;
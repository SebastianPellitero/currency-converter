import { connect } from 'react-redux';
import { fetchCurrency, fetchChartData } from '../../Store/Actions/exchangeActions'
import Card from './Card';

const mapStateToProps = state => {
  return {
    showChart: state.exchange.showChart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrency: (currencySelected) => dispatch(fetchCurrency(currencySelected)),
    fetchTimeSerie: (starDate, endDate, currencySelected, currencyTarget) => dispatch(fetchChartData(starDate,endDate, currencySelected, currencyTarget)),
  }
}

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
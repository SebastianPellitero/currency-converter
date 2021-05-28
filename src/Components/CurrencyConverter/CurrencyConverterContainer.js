import { connect } from 'react-redux';
import {
    fetchCurrency,
    asignTargetCurrency,
    fetchChartData,
    toggleChart
} from '../../Store/Actions/exchangeActions';
import CurrencyConverter from './CurrencyConverter';

const mapStateToProps = state => {
    return {
        currency: state.exchange
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCurrency: currencySelected => dispatch(fetchCurrency(currencySelected)),
        asignTargetCurrency: toCurrency => dispatch(asignTargetCurrency(toCurrency)),
        fetchTimeSerie: starDate => dispatch(fetchChartData(starDate)),
        toggleChart: () => dispatch(toggleChart())
    };
};

const CurrencyConverterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyConverter);

export default CurrencyConverterContainer;

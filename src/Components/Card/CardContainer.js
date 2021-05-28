import { connect } from 'react-redux';
import Card from './Card';

const mapStateToProps = state => {
    return {
        showChart: state.exchange.showChart
    };
};

const CardContainer = connect(mapStateToProps)(Card);

export default CardContainer;

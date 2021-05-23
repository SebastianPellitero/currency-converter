import { connect } from 'react-redux';
import { fetchDefault } from '../Store/Actions/exchangeActions'
import Card from './Card';

const mapStateToProps = state => {
  return {
    currency: state.exchange
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDefault: () => dispatch(fetchDefault()),
  }
}

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  value: state.valueData.value
});

const mapDispatchToProps = (dispatch) => ({
  onIncrease: () => dispatch(actions.increase()),
  onDecrease: () => dispatch(actions.decrease())
});

const CounterContainer = connect(
  mapStateToProps, mapDispatchToProps
)(Counter);

export default CounterContainer;

import NameForm from '../components/NameForm';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  name: state.nameData.name
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name) => dispatch(actions.change(name)),
  onInsert: () => dispatch(actions.insert()),
  onSubmit: () => dispatch(actions.submit())
});

const NameFormContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NameForm);

export default NameFormContainer;

import NameList from '../components/NameList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  nameList: state.nameData.nameList
});

const NameListContainer = connect(
  mapStateToProps, null
)(NameList);

export default NameListContainer;

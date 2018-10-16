import * as types from '../actions/ActionTypes';

const initialState = {
  name: '',//of NameForm.js
  nameList: ['긴냥이', '이기백']//of App.js
}

function name(state=initialState, action) {
  switch (action.type) {
    case types.CHANGE:
      return {
        name: action.name,
        nameList: state.nameList
      };
    case types.INSERT:
      return {
        name: state.name,
        nameList: state.nameList.concat(state.name)//name을 어떻게 사용하지?
      };
    case types.SUBMIT:
      return {
        name: '',//초기화
        nameList: state.nameList
      };
    default:
      return state;
  }
}

export default name

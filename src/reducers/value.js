import * as types from '../actions/ActionTypes';

const initialState = {
  value: 1//of Counter.js
}

function value(state=initialState, action) {
  switch (action.type) {
    case types.INCREASE:
      return {
        value: state.value + 1
      };
    case types.DECREASE:
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
}

export default value

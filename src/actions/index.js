/* Declare action creators */

import * as types from './ActionTypes';

export const increase = () => ({
  type: types.INCREASE
});

export const decrease = () => ({
  type: types.DECREASE
});

export const change = (name) => ({//store의 action parameter(action.name)
  type: types.CHANGE,
  name: name
});

export const insert = () => ({
  type: types.INSERT
});

export const submit = () => ({
  type: types.SUBMIT
});

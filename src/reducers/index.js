import value from './value';
import name from './name';

import { combineReducers } from 'redux';

const reducers = combineReducers({
  valueData: value,
  nameData: name//export default name의 name이다. state.name 아니다
})

export default reducers

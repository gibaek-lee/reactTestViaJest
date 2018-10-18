import value from './value';
import * as valueActions from '../actions/index';

describe('value', () => {
  /* actions creator test */
  //지정 prarmeter -> action 객체 생성 확인
  describe('actions', () => {
    it('should create actions', () => {
      const expectedActions = [
        { type: 'INCREASE' },
        { type: 'DECREASE' }
      ];
      const actions = [
        valueActions.increase(),
        valueActions.decrease()
      ];
      expect(actions).toEqual(expectedActions);
    });
  });

  /* reducer test */
  describe('reducer', () => {
    //default function parameter allow parameter to be initialized if no value or undefined is passed.
    let state = value(undefined, {});
    //초기 state 설정 확인
    it('should return the initialState', () => {
      expect(state).toHaveProperty('value', 1);
    });
    //action dispatch 후 store state 변화 검증
    it('should increase', () => {
      state = value(state, valueActions.increase());
      expect(state).toHaveProperty('value', 2);
    });
    it('should decrease', () => {
      state = value(state, valueActions.decrease());
      expect(state).toHaveProperty('value', 1);
    });

  });
});

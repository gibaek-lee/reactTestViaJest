import name from './name';
import * as nameActions from '../actions/index';

describe('name', () => {
  /* action creator test */
  describe('actions', () => {
    it('should create actions', () => {
      const expectedActions = [
        { type: 'CHANGE' },
        { type: 'INSERT' },
        { type: 'SUBMIT' }
      ];
      const actions = [
        nameActions.change(),
        nameActions.insert(),
        nameActions.submit()
      ];
      expect(actions).toEqual(expectedActions);
    });
  });

  /* reducer test */
  describe('reducer', () => {
    let state = name(undefined, {});
    it('should return the initialState', () => {
      expect(state).toHaveProperty('name', '');
      expect(state).toHaveProperty('nameList', ['긴냥이', '이기백']);
    });
    it('should change', () => {
      state = name(state, nameActions.change('호랑이'));
      expect(state).toHaveProperty('name', '호랑이');
      expect(state).toHaveProperty('nameList', ['긴냥이', '이기백']);
    });
    it('should insert', () => {
      state = name(state, nameActions.insert());
      expect(state).toHaveProperty('name', '호랑이');
      expect(state).toHaveProperty('nameList', ['긴냥이', '이기백', '호랑이']);
    });
    it('should submit', () => {
      state = name(state, nameActions.submit());
      expect(state).toHaveProperty('name', '');
      expect(state).toHaveProperty('nameList', ['긴냥이', '이기백', '호랑이']);
    });
  });

});

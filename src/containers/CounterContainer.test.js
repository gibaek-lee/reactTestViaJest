import React from 'react';
import { mount } from 'enzyme';//enzyme full rendering
import CounterContainer from './CounterContainer';
import configureMockStore from 'redux-mock-store';
import * as valueActions from '../actions/index';

describe('CounterContainer', () => {
  let component = null;
  const mockStore = configureMockStore();

  let store = mockStore({
    valueData: {
      value: 1
    }
  });

  it('renders properly', () => {
    component = mount(<CounterContainer store={store}/>)
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('dispatches INCREASE action', () => {
    component.find('button').at(0).simulate('click');
    //store.getActions() 스토어에 dispatch된 action들의 목록
    expect(store.getActions()[0]).toEqual(valueActions.increase());
  });

  it('dispatches DECREASE action', () => {
    component.find('button').at(1).simulate('click');
    expect(store.getActions()[1]).toEqual(valueActions.decrease());
    //console.log(store.getActions());
  });
});

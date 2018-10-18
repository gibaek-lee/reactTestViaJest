import React from 'react';
import { mount } from 'enzyme';//enzyme full rendering
import NameFormContainer from './NameFormContainer';
import configureMockStore from 'redux-mock-store';
import * as nameActions from '../actions/index';

describe('NameFormContainer', () => {
  let component = null;
  const mockStore = configureMockStore();

  let store = mockStore({
    nameData: {
      name: '',
      nameList: []
    }
  });

  it('renders properly', () => {
    component = mount(<NameFormContainer store={store}/>)
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('dispatches CHANGE action', () => {
    const mockedEvent = {
      target: {
        value: undefined//change action creator의 name은 undefined이다.
      }
    };
    component.find('input').simulate('change',mockedEvent);
    expect(store.getActions()[0]).toEqual(nameActions.change());
  });

  it('dispatches INSERT/SUMBIT action', () => {
    const mockedEvent = {
      preventDefault: () => null
    }
    component.find('form').simulate('submit',mockedEvent);
    expect(store.getActions()[1]).toEqual(nameActions.insert());
    expect(store.getActions()[2]).toEqual(nameActions.submit());
    //console.log(store.getActions());
  });
});

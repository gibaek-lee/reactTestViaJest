import React from 'react';
import { mount } from 'enzyme';//enzyme full rendering
import NameListContainer from './NameListContainer';
import configureMockStore from 'redux-mock-store';

describe('NameListContainer', () => {
  let component = null;
  const mockStore = configureMockStore();

  let store = mockStore({
    nameData: {
      name: '',
      nameList: []
    }
  });

  it('renders properly', () => {
    component = mount(<NameListContainer store={store}/>)
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

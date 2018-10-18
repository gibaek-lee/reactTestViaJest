import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {//describe
  let component = null;
  //jest mock functions(https:jestjs.io/docs/en/mock-functions.html)
  const mockIncrease = jest.fn();
  const mockDecrease = jest.fn();

  /* component initial render test */
  it('renders correctly', () => {
    component = shallow(<Counter value={700} onIncrease={mockIncrease} onDecrease={mockDecrease}/>);
  });

  /* snapshot test */
  it('matches snapshot', () => {//initial rendering snapshot matching test
    expect(component).toMatchSnapshot();
  })

  /* redux + react: props.value 전달 가정한 rendering test*/
  it('is 700', () => {
    expect(component.find('h2').text()).toBe('700');
  });

  /* redux + react: props.increase() props.decrease() 전달 가정하고, 호출됐을 때 호출여부 test */
  it('calls functions', () => {
    const buttons = component.find('button');
    buttons.at(0).simulate('click');
    buttons.at(1).simulate('click');
    expect(mockIncrease.mock.calls.length).toBe(1);
    expect(mockDecrease.mock.calls.length).toBe(1);
  });

});

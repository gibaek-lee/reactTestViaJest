import React from 'react';
//react test renderer manual: https://reactjs.org/docs/test-renderer.html
import renderer from 'react-test-renderer';
import Counter from './Counter';

/*
Test code
- Manual about Jest Expect: https://jestjs.io/docs/en/expect.html#expectvalue
- Basic code structure

describe('Target',() => {
  describe('innerTarget1',() => {
    it('describe' ,() => {
      expect( function1-1() ).toBe('expectedVal1');
    });
    it('describe' ,() => {
      expect( function1-2() ).toBe('expectedVal2');
    });
  });
  describe('innerTarget2',() => {
    it('describe' ,() => {
      expect( function2-1() ).toBe('expectedVal1');
    });
    it('describe' ,() => {
      expect( function2-2() ).toBe('expectedVal2');
    });
  });
);

*/

describe('Counter', () => {//describe
  let component = null;

  /* component initial render test */
  it('renders correctly', () => {//initial rendering test
    component = renderer.create(<Counter />);
  });

  it('matches snapshot', () => {//initial rendering snapshot matching test
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  /* component functions test */
  it('increases correctly', () => {//increase fucntion test
    component.getInstance().onIncrease();
    expect(component.getInstance().state.value).toBe(2);

    const tree = component.toJSON();//re-render
    expect(tree).toMatchSnapshot();
  });

  it('decreases correctly', () => {//decrease function test
    component.getInstance().onDecrease();
    expect(component.getInstance().state.value).toBe(1);

    const tree = component.toJSON();//re-render
    expect(tree).toMatchSnapshot();
  });
});

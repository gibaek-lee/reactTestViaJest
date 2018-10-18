import React from 'react';
import { shallow } from 'enzyme';
import NameList from './NameList'

describe('NameList', () => {
  let component = null;

  /* component initial render test */
  it('renders correctly', () => {
    /* render에 영향을 미치는 부모컴포넌트로 부터 전달되는 변수(NameList)는
    초기값으로 예상되는 값 ['긴냥이', '이기백']을 직접 써준다. */
    component = shallow(<NameList nameList={['긴냥이', '이기백']} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  /* redux + react: props.nameList [] 전달 가정한 rendering test*/
  it('is 긴냥이, 이기백', () => {
    const list = component.find('li');
    expect(list.at(0).text()).toBe('긴냥이');
    expect(list.at(1).text()).toBe('이기백');
  });
})

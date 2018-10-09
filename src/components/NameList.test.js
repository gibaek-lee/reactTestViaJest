import React from 'react';
import renderer from 'react-test-renderer';
import NameList from './NameList'

describe('NameList', () => {
  let component = null;

  /* component initial render test */
  it('renders correctly', () => {
    /* render에 영향을 미치는 부모컴포넌트로 부터 전달되는 변수(NameList)는
    초기값으로 예상되는 값 ['긴냥이', '이기백']을 직접 써준다. */
    component = renderer.create(<NameList nameList={['긴냥이', '이기백']} />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})

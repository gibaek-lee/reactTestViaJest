import React from 'react';
import renderer from 'react-test-renderer';
import NameForm from './NameForm'

describe('NameForm', () => {
  let component = null;

  /* component initial render test */
  it('renders correctly', () => {
    /* render에 부모컴포넌트에서 전달되는 함수는 영향을 미치지 않으므로
    onInsert를 넣지 않아도 된다. */
    component = renderer.create(<NameForm />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  /* component function test */
  //how?
})

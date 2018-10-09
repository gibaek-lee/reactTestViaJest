import React from 'react';
//import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
/* enzyme : https://airbnb.io/enzyme/docs/api/
react-test-renderer에서 할 수 없는 테스트를 할 수 있다.
1. DOM 이벤트 시뮬레이트(ex.버튼클릭, 인풋수정, 폼 등록)
2. 특정 DOM에 특정 문자열이 있는지, 특정 props가 설정됐는지,
3. 모든 LifeCycle이 문제 없이 돌아가는지 확인
등등 많은 리액트 컴포넌트 테스팅 수행 가능하다.

테스트 렌더러 조합
1. 간단한 테스트, snapshot test: Jest + react-test-renderer
2. 세부적인 테스트(snapshot 포함): Jest + enzyme
*/
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;

  /* component initial render test */
  it('renders correctly', () => {
    /* render에 부모컴포넌트에서 전달되는 함수는 영향을 미치지 않으므로
    onInsert를 넣지 않아도 된다. */
    //component = renderer.create(<NameForm />);
    component = shallow(<NameForm />);
  });

  it('matches snapshot', () => {
    //const tree = component.toJSON();
    //expect(tree).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  })

  /* component function test */
  //how? enzyme!
  describe('insert new text', () => {
    it('has a form', () => {//form 존재여부 확인
      expect(component.find('form').exists()).toBe(true);
    })
    it('has an input', () => {//input 존재여부 확인
      expect(component.find('input').exists()).toBe(true);
    })
    it('simulates input change', () => {
      const mockedEvent = {
        target: {
          value: 'hello'
        }
      };
      component.find('input').simulate('change',mockedEvent);
      expect(component.state().name).toBe('hello');
    })
    it('simulates form submit', () => {
      const mockedEvent = {//onSubmit 하면 preventDefault 호출하므로 빈 함수로 테스트
        preventDefault: () => null
      }
      component.find('form').simulate('submit',mockedEvent);
      expect(component.state().name).toBe('');
    })
  })
})

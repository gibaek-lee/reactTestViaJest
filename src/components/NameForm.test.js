import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;
  const mockChange = jest.fn();
  const mockInsert = jest.fn();
  const mockSubmit = jest.fn();

  /* component initial render test */
  it('renders correctly', () => {
    component = shallow(<NameForm name={'고양이'} onChange={mockChange} onInsert={mockInsert} onSubmit={mockSubmit}/>);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  })

  /* redux + react: props.name 전달 가정한 render test */
  it('is 고양이', () => {
    expect(component.find('input').props().value).toBe('고양이');
  });

  /* redux + react: props.change() props.insert() props.submit() 전달 가정한 render test */
  describe('insert new text', () => {
    it('has a form', () => {//form 존재여부 확인
      expect(component.find('form').exists()).toBe(true);
    })
    it('has an input', () => {//input 존재여부 확인
      expect(component.find('input').exists()).toBe(true);
    })
    it('simulates input change', () => {
      const mockedEvent = {//event.target.value에서 event를 빼고 나머지를 mock test 객체로 만든다.
        target: {
          value: 'hello'
        }
      };
      component.find('input').simulate('change',mockedEvent);
      //local state가 없으므로 name값의 변화는 테스트할 수 없고 그 변화를 주는 onChange함수가 props로 넘어왔을 때 잘 불려지는지만 확인 가능
      expect(mockChange.mock.calls.length).toBe(1);
    })
    it('simulates form submit', () => {
      const mockedEvent = {//e.preventDefault 에서 e 빼고 나머지를 mock test 객체로
        preventDefault: () => null//onSubmit 하면 preventDefault 호출하므로 빈 함수로 테스트l
      }
      component.find('form').simulate('submit',mockedEvent);
      expect(mockInsert.mock.calls.length).toBe(1);
      expect(mockSubmit.mock.calls.length).toBe(1);
    })
  })
})

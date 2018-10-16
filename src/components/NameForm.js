import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onInsert: PropTypes.func,
    onSubmit: PropTypes.func
  }
  static defaultProps = {
    name: '',
    onChange: () => console.warn('onChange not defined'),
    onInsert: () => console.warn('onInsert not defined'),
    onSubmit: () => console.warn('onSubmit not defined')
  }
  render() {
    const { name, onChange, onInsert, onSubmit } = this.props;
    return (
      <form onSubmit={
        (e) => {
          e.preventDefault();
          onInsert();//nameList에 입력값 넣기
          onSubmit();//초기화
        }
      }>
        <label>Your name</label>
        <input type="text" value={name} onChange={
          (e) => {
            onChange(e.target.value);
          }
        } />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NameForm

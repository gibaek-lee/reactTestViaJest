import React, { Component } from 'react'

class NameForm extends Component {
  static defaultProps = {
    onInsert : () => console.warn('onSubmit not defined')
  }
  state = {
    name: ''
  }
  onSubmit = (e) => {
    const { name } = this.state;
    const { onInsert } = this.props;

    onInsert(name);
    this.setState({
      name: ''
    });

    e.preventDefault();//새로고침 방지
  }
  onChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  render() {
    const { onSubmit, onChange } = this;
    const { name } = this.state;
    return (
      <form onSubmit={onSubmit}>
        <label>Your name</label>
        <input type="text" value={name} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NameForm

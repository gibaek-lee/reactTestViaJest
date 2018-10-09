import React, { Component } from 'react';
import Counter from './components/Counter';
import NameForm from './components/NameForm';
import NameList from './components/NameList';

class App extends Component {
  state = {
    nameList : ['긴냥이', '이기백']
  }
  onInsert = (name) => {
    this.setState(
      ({nameList}) => ({ nameList: nameList.concat(name) })
    )
  }
  render() {
    const { nameList } = this.state;
    const { onInsert } = this;

    return (
      <div>
        <Counter />
        <hr />
        <h1>Name List</h1>
        <NameForm onInsert={onInsert} />
        <NameList nameList={nameList} />
      </div>
    );
  }
}

export default App;

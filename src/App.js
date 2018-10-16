import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer';
import NameFormContainer from './containers/NameFormContainer';
import NameListContainer from './containers/NameListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <hr />
        <h1>Name List</h1>
        <NameFormContainer />
        <NameListContainer />
      </div>
    );
  }
}

export default App;

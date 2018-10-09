import React, { Component } from 'react'

class NameList extends Component {
  static defaultProps = {
    nameList : []
  }
  render() {
    const { nameList } = this.props;
    const namesPackage = nameList.map(
      (name, i)=>(
        <li key={i}>{name}</li>
      )
    );
    return (
      <div>
        {namesPackage}
      </div>
    );
  }
}

export default NameList

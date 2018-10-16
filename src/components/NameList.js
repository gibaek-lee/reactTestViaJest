import React, { Component } from 'react'
import PropTypes from 'prop-types';

class NameList extends Component {
  static propTypes = {
    nameList: PropTypes.array
  }
  static defaultProps = {
    nameList: []
  }
  render() {
    const { nameList } = this.props
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

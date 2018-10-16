import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({value, onIncrease, onDecrease}) => {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};
Counter.propTypes = {
  value: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func
}
Counter.defaultProps = {
  value: 1,
  onIncrease: () => console.warn('onIncrease not defined'),
  onDecrease: () => console.warn('onDecrease not defined')
}

export default Counter;

import React, { useState } from "react";
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } // ye jo if condition he optional he kyu disabale lga rkha he
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button onClick={handleDecrement} disabled={count === 0}>
          -
        </button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;

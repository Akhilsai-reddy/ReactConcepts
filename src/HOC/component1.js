import React from "react";
import Hoc from "./Hoc";
const Component1 = (props) => {
  /*******************************************************/
  //using functional component
  const { count, setCount } = props;

  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  /**********************************************************/

  /******************************************************/
  //using class Component

  // const {count,increment,decrement}=props
  /******************************************************/
  return (
    <div>
      Component1 :-
      <br/>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Hoc(Component1);

import React from "react";
import Hoc from "./Hoc";

const Component2 = (props) => {
  /*******************************************************/
  //using functional component
  const { count, setCount } = props;

  const decrement=()=> {
    setCount(count - 2);
  }
  const increment=()=> {
    setCount(count + 2);
  }
  /**********************************************************/

  /******************************************************/
  //using class Component

  // const {count,increment,decrement}=props
  /******************************************************/
  return (
    <div>
      component2:-
      <br />
      <button onClick={()=>decrement()}>-2</button>
      {count}
      <button onClick={()=>increment()}>+2</button>
    </div>
  );
};

export default Hoc(Component2);

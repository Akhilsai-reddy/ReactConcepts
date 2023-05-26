
import React  from "react";
import Component1 from "./component1";
import Component2 from "./component2";

class App extends React.Component {

render(){

  return (
    <>
    <div style={{ justifyContent:'center',alignContent:'center', textAlign:'center'}}>
      <Component1 />
      <div>
        <Component2 />
      </div>
    </div>
    </>
  );
}
};

export default App;

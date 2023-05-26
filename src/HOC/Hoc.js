import React, { useState } from "react";

const Hoc = (WrappedComponent) => {
  //Using class Component......
  //    class Hoc extends React.Component{

  //     constructor(props){
  //         super(props)
  //         this.state={
  //             count:0,

  //         }
  //     }
  //     increment=()=>{
  //     this.setState(prevState=>{
  //         return{count:prevState.count+1}
  //     })
  //     }
  //     decrement=()=>{
  //         this.setState(prevState=>{
  //             return{count:prevState.count-1}
  //         })
  //         }
  //     render(){
  //         return(
  //             <WrappedComponent count={this.state.count} increment={this.increment} decrement={this.decrement}/>
  //         )
  //     }
  //    }

  /***********************************************/
  //Using functional componet
  return (
    function Hoc() {
    const [count, setCount] = useState(0);
    
    return <WrappedComponent count={count} setCount={setCount} />;
  }
  )
};

export default Hoc;

import React,{ useReducer }  from 'react'

const InitialState={
    count:0
}

const reducer=(state=InitialState,action)=>{
    switch(action.type){
       case 'increment':
         return {count:state.count+1};
       case 'decrement':
        return {count:state.count-1};
       case 'reset':
        return {count:0}
      default :
      return state
    }
}

const Counter = () => {

    const[state,dispatch]= useReducer(reducer,InitialState)
  return (
    <center>
     <h1>{state.count}<br/></h1>
     <button onClick={()=>dispatch({type:'decrement'})}>-</button>
     <button onClick={()=>dispatch({type:'increment'})}>+</button>
     <button onClick={()=>dispatch({type:'reset'})}>reset</button>

    </center>
  )
}

export default Counter
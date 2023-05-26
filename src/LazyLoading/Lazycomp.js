import React, { useReducer } from 'react'

const Lazycomp = () => {
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

    const[state,dispatch]= useReducer(reducer,InitialState)

    const Dec=()=>{
        dispatch({type:'decrement'})
    }
    const Inc=()=>{
        dispatch({type:'increment'})
    }
    const Res=()=>{
        dispatch({type:'reset'})
    }
    return (
      <main>
       <h1>{state.count}<br/></h1>
       <button onClick={()=>Dec()}>-</button>
       <button onClick={()=>Inc()}>+</button>
       <button onClick={()=>Res()}>reset</button>
      </main>
    )
}

export default Lazycomp
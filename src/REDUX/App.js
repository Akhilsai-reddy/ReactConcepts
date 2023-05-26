import React from 'react'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import Employee from './Employee';
import ACTIONS from './Actions';

const employee={
    salary:15000,
    bonus:0,
};

const{INCREMENT,DECREMENT,RESET,BONUS}=ACTIONS

 const reducer=(state=employee,action)=>{
    
   switch(action.type){
    
  case INCREMENT:
    return{ ...state, salary:state.salary+1000}
  case DECREMENT:
    return{ ...state ,salary:state.salary-1000}
  case RESET:
    return {...state,salary:15000}
    case BONUS:
        return{ ...state, bonus:state.salary/2}
  default:
    return state;  

   }
 }
const store=createStore(reducer)

const App = () => {
    
  return (
    <Provider store={store}>
     <Employee/>
    </Provider>
  )
}

export default App
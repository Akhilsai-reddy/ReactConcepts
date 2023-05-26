// import { Button } from 'bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './store'
const Employee = () => {
    const salary=useSelector((state)=>state.salary)
    const bonus=useSelector((state)=>state.bonus)
   
    
    const dispatch=useDispatch();
    return (
      <div align='center'>
          <h1>SALARY:{salary} <br/>
          BONUS:{bonus}
          <br/>
          TOTAL:{salary+bonus}
          </h1>
          <button variant="outlined" size="small" onClick={()=> dispatch(actions.Decrement())}>- </button>
          <button variant="outlined" size="small" onClick={()=> dispatch(actions.Increment())}>+</button>
          <button variant="outlined" size="small" onClick={()=> dispatch(actions.Bonus(salary/2))}>Give Bonus</button>
      </div>
    )
    }

export default Employee
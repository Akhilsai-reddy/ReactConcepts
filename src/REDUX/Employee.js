import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'

import { Button} from '@mui/material'



const Employee = () => {
  const salary=useSelector((state)=>state.salary)
  const bonus=useSelector((state)=>state.bonus)
 
  const dispatch=useDispatch();
  return (
    <div align='center'>
        <h1>SALARY:{salary} <br/>
        BONUS:{bonus}
        <br/>
        TOTAL:{salary+bonus}</h1>
        <Button variant="outlined" size="small" onClick={()=> dispatch({type:'DECREMENT',})}>- </Button>
        <Button variant="outlined" size="small" onClick={()=> dispatch({type:'INCREMENT'})}>+</Button>
        <Button variant="outlined" size="small" onClick={()=> dispatch({type:'BONUS'})}>Give Bonus</Button>
        <Button variant="outlined" size="small" onClick={()=> dispatch({type:'RESET'})}>reset</Button>
    </div>
  )
  }

export default (Employee)
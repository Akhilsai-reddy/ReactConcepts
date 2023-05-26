import React, { useState } from 'react'
// import School from './School'

const Student = () => {

    const[state,setState]=useState(true);
    const name='React'
    const Id=1
    const Class='2nd'
    const level='L1'

   
    return(                       
        <>
  {state?
  <>
   <ol>
    <li>{name}</li>
    <li>{Id}</li>
    <li>{Class}</li>
    <li>{level}</li>
   </ol>
   <button onClick={()=>setState(!state)}>{state?'hide':'show'}</button></>:
   <>
   <button onClick={()=>setState(!state)}>{state?'hide':'show'}</button>
   </>
  }
   {/* <School name={name} Id={Id} Class={Class} level={level} setState={setState}/> */}
  
  </>
    )
   
   
    
}

export default Student
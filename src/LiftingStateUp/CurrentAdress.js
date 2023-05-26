import React from 'react'

const CurrentAdress = (props) => {
    
        // const handleChangeHouse=(e)=>{
        //     props.handleHouse(e.target.value)
        // }
        // const handleChangeDist=(e)=>{
        //     props.handleDist(e.target.value)
        //     }
        
      return (
        <center>
    <h2>Enter your CurrentAddress</h2>
   <h4>House No:</h4>
    <input type='text' value={props.house} onChange={e=> props.handleHouse(e.target.value)}/> <br/>
   <h4>District</h4>
<input type='text' value={props.dist} onChange={e=>props.handleDist(e.target.value)}/> 
        </center>
      )
}

export default CurrentAdress
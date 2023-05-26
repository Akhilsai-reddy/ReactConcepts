import React from 'react'

const PermenentAddress = (props) => {

    const handleChangeHouse=(e)=>{
        props.handleHouse(e.target.value)
    }
    const handleChangeDist=(e)=>{
        props.handleDist(e.target.value)
        }

  return (
    <center>
<h2>Enter your PermenentAddress</h2>
<h4>House No:</h4>

<input type='text' value={props.house} onChange={handleChangeHouse}/> <br/>
<h4>District</h4>
<input type='text' value={props.dist} onChange={handleChangeDist} /> 
    </center>
  )
}

export default PermenentAddress
import React from 'react'

const School = (props) => {

    const {Id,name,Class,level,}=props
    const set=()=>{
        props.setState('from SChool')
    }
  return (
    <div>
    {Id}-{name}-{Class}-{level}
    {/* <input type='text'  onChange={(e)=>reciev(e.target.value)}/> */}
    <button onClick={()=>set()}>change</button>
    </div>
  )
}

export default School
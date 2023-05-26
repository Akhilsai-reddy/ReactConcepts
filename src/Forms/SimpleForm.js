import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import {AiOutlineEnter} from 'react-icons/ai'

const SimpleForm = () => {
  const nameRef=useRef(null);

  useEffect(()=>{
    nameRef.current.focus()
  },[])


    const [user,setUser]=useState({
        name:'',
        phn:'',
        email:'',
        location:'',
    })
    function handleChange(e){
        e.preventDefault()
    const newUser={...user}
    newUser[e.target.name]=e.target.value
    setUser(newUser)
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(user))
    }
  return (
    <div>
        <h1>simple Registration form</h1>
       <form onSubmit={(e)=>handleSubmit(e)}>
        <input type='text'   name='name' ref={nameRef}  placeholder='Enter your name here'    onChange={(e)=>handleChange(e)} autoFocus /><br/>
        <input type='number' name='phn'    placeholder='Enter your phn no here'  onChange={(e)=>handleChange(e)}   /><br/>
        <input type='email'  name='email'    placeholder='Enter your mail here'    onChange={(e)=>handleChange(e)}  /><br/>
        <input type='text'   name='location'  placeholder='Enter your location here'onChange={(e)=>handleChange(e)}  /><br/>
        <Button variant="outline-success" type="submit"><AiOutlineEnter/></Button>
       </form>
    </div>
  )
}

export default SimpleForm

import { useFormik } from 'formik';
import React from 'react'

const HandlingFormsUsingFormik = () => {

    const users=(user)=>{
        const errors={};
        if(!user.name){
       errors.name='Please enter the name!'
        }
        if(!user.phn){
            errors.phn='phone number is must'
        }
        if(!user.email){
            errors.email=' email is must'
        }
        return errors
    }
    const formik=useFormik({
        initialValues:{
            name:'',
            phn:'',
            email:'',
            location:'',
        },
       validate:users,

        onSubmit:(values) =>{
         alert(JSON.stringify(values))
        }
    });

  return (
    <div>
        <h1>Validating  form using useFormik</h1>
       <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'><b>NAME:</b></label>
        <input type='text'   name='name'  value={formik.values.name} onChange={formik.handleChange} placeholder='Enter your name here' autoFocus />
        {formik.touched.name&&formik.errors.name?<span style={{color:'red'}}>{formik.errors.name}</span>:''}
        <br/>
        <label htmlFor='name'><b>PHONE NO:</b></label>
        <input type='number' name='phn'   value={formik.values.phn} onChange={formik.handleChange} placeholder='Enter your phn no here' />
        {formik.touched.phn&&formik.errors.phn?<span style={{color:'red'}}>{formik.errors.phn}</span>:''}<br/>
        <label htmlFor='name'><b>EMAIL:</b></label>
        <input type='email'  name='email'   value={formik.values.email} onChange={formik.handleChange}  placeholder='Enter your mail here' />
        {formik.touched.email&&formik.errors.email?<span style={{color:'red'}}>{formik.errors.email}</span>:''}<br/>
        <label htmlFor='name'><b>LOCATIN:</b></label>
        <input type='text'   name='location'  value={formik.values.location}  onChange={formik.handleChange} placeholder='Enter your location here' /><br/>
        <button type='submit'>Submit</button>
       </form>
    </div>
  )
}

export default HandlingFormsUsingFormik
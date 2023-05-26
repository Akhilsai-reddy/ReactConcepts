import React from 'react';
import { useFormik } from 'formik';
const FormikForm = () => {
    
    const formik=useFormik({
        initialValues:{
            name:'',
            phn:'',
            email:'',
            location:'',
        },
        onSubmit:values =>{
         alert(JSON.stringify(values))
        }
    });

  return (
    <div>
        <h1>Registration form using useFormik</h1>
       <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'><b>NAME:</b></label>
        <input type='text'   name='name'  value={formik.values.name} onChange={formik.handleChange} placeholder='Enter your name here' autoFocus /><br/>
        <label htmlFor='name'><b>PHONE NO:</b></label>
        <input type='number' name='phn'   value={formik.values.phn} onChange={formik.handleChange} placeholder='Enter your phn no here' /><br/>
        <label htmlFor='name'><b>EMAIL:</b></label>
        <input type='email'  name='email'   value={formik.values.email} onChange={formik.handleChange}  placeholder='Enter your mail here' /><br/>
        <label htmlFor='name'><b>LOCATIN:</b></label>
        <input type='text'   name='location'  value={formik.values.location}  onChange={formik.handleChange} placeholder='Enter your location here' /><br/>
        <button type='submit'>Submit</button>
       </form>
    </div>
  )
}

export default FormikForm
import { useFormik } from 'formik';
import React,{useEffect,useRef} from 'react'
import * as yup from 'yup'


function UsingYup() {

    // const nameRef=useRef(null);

    // useEffect(()=>{
    //   nameRef.current.focus()
    // },[])

    const formik=useFormik({
        initialValues:{
            name:'',
            phn:'',
            email:'',
            location:'',
        },
        validationSchema:yup.object({
            name:yup.string().required('Name  is required'),
            phn:yup.number().required('number is required'),
            email: yup.string().email().required('email is required')
        })
        ,
        onSubmit:values =>{
         alert(JSON.stringify(values))
        }
    });

  return (
    <div>
        <h1>VALIDATING USING YUP</h1>
       <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'><b>NAME:</b></label>
        <input type='text'   name='name'  value={formik.values.name} onChange={formik.handleChange} placeholder='Enter your name here'  />
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

export default UsingYup
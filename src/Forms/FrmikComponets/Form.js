import React from 'react'
import { Formik,Field,ErrorMessage, Form } from 'formik'
import * as yup from 'yup'
import { Button } from 'react-bootstrap'

const Forms = () => {

  return (
    <>
    <h1>USING FORMIK INBUILTS</h1>
   <Formik 
   initialValues={{
    name:'',
    phn:'',
    email:'',
    designation:'',
    location:''
   }}
   validationSchema={yup.object().shape({
    name:yup.string().required('name required')
    ,phn:yup.number().required('number required'),
    email:yup.string().email('enter valide mail id').required('email required'),
    designation:yup.string().required('please select designation')
   })}

   onSubmit={
    (values)=>{
        alert(JSON.stringify(values))
    }
   }
   >

    {(props)=>(
        <div>
    <Form>
     <Field type='text' name='name' placeholder='type name here'/>
    <span style={{color:'red'}}><ErrorMessage name='name' /></span> 
     <br/>
     <Field type='number' name='phn' placeholder='enter number here'/>
     <span style={{color:'red'}}><ErrorMessage name='phn' /> </span><br/>
     <Field type='text' name='email' placeholder='enter mail here'/>
     <span style={{color:'red'}}><ErrorMessage name='email' /></span><br/>
     <Field as='select' name='designation'>
        <option></option>
        <option value='Project engineer'>Project engineer</option>
        <option value='senior project engineer'>senior project engineer</option>
        <option value='Team lead'>Team lead</option>
     </Field>
     <span style={{color:'red'}}><ErrorMessage name='designation' /></span><br/>
     <Field type='text' name='location' placeholder='type location here'/>
     <span style={{color:'red'}}><ErrorMessage name='location' /></span><br/>
     <Button variant='outline-success' type='submit' disabled={!props.isValid}>SUBMIT</Button>
    </Form>
    </div>
  )}
   </Formik>
   </>
  )
}

export default Forms
import React, { Suspense } from 'react'
import Forms from './FrmikComponets/Form'
import FormikAttributes from './FormikAttributes'
import SimpleForm from './SimpleForm'
// import FormikForm from './FormikForm'
import HandlingFormsUsingFormik from './HandlingFormsUsingFormik'
import UsingYup from './UsingYup'

// const Lazy=React.lazy(()=>import('./FrmikComponets/Form'))
// const FormikAttributes =React.lazy(()=>import('./FormikAttributes'))
// const SimpleForm = React.lazy(()=>import('./SimpleForm'))
const FormikForm= React.lazy(()=>import('./FormikForm'))
// const HandlingFormsUsingFormik= React.lazy(()=>import('./HandlingFormsUsingFormik'))
// const UsingYup= React.lazy(()=>import('./UsingYup'))
const App = () => {
  return (
    
    <center>
        <div style={{ border:'solid blue', width:'700px' ,margin:'30px',alignContent:'center'}}>
       
     <SimpleForm/><hr color='blue'/>
        <Forms/>
        <Suspense fallback={<h1 style={{color:'red'}}>Loading......</h1>}>
        <FormikForm/><hr color='blue'/>
        </Suspense>
        <HandlingFormsUsingFormik/><hr color='blue'/>
        <UsingYup/><hr color='blue'/>
        <FormikAttributes/><hr color='blue'/>
       
        </div>
    </center>
  
  )
}

export default App
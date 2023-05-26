import React, { useState } from 'react'
import NavBar from './useContext/NavBar';
import { ThemeContext } from './useContext/ThemeContext'
// import Counter from './useReducer/Counter';
import Increment from './Counter/Increment';


export default function App() {

 const [theme, setTheme]= useState(true);
const Dark={
  backgroundColor:'black',
  color:'white',
  textAlign:'right',
  height:'657px',
  width:'1366px'
 
}
const Light={
  backgroundColor:'white',
  color:'black',
  textAlign:'right',
  height:'657px',
  width:'1366px'
}
  return (
   <div>
   <ThemeContext.Provider value={{theme,setTheme}}>
  <NavBar/>
  <Increment/>
   </ThemeContext.Provider>
   </div>
  )
}


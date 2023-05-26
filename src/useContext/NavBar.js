import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const NavBar = () => {

    const {theme,setTheme}=useContext(ThemeContext)

    const handleTheme=()=>{
        setTheme(theme===true?false:true)      
    }
  
  return (
    
        <nav style={{backgroundColor:'rgba(156, 139, 139, 0.637)'}}>
         <button onClick={()=>handleTheme()}>{theme?'Dark':'Light'}</button>
        </nav>
  )
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css';
export default function Navbar() {
  return (
    <nav style={{
      display:'flex',
      flexDirection:'row',
      flexFlow:'wrap',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'black',
      color:'white',
      height:'3rem',

    }}>
        <Link to={'/createproject'} className='link-no-underline'>Add Project</Link>
        <br/>
        <Link to={'/projects'} className='link-no-underline'> projects</Link>
    </nav>
  )
}

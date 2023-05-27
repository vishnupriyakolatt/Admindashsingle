import React from 'react'
import { FaUserShield  } from 'react-icons/fa';

function AdminNavbar() {
  return (
    <div>
     <nav style={{ backgroundColor: 'black', color: 'white' ,width:"100%", height:"80px"}}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '5rem',marginTop:"20px",fontSize:"20px" ,padding:"2px" }}>    <FaUserShield style={{ marginRight: '10px',width:"25px" }}  />Welcome to Admin Dashboard</li>
    
      </ul>
    </nav>
    </div>
  )
}

export default AdminNavbar
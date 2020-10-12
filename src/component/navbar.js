import React from 'react'
import logo from '../logo.svg'
import '../style.css'
function Navbar(){
    const appName = "MCDM Website"
    return(
        
        <div className>
            
            <nav>
            <img src={logo} alt="" width="100" height="100"/>
                <h1>{appName}</h1>
                <ul className="nav-link">
                    <li >Home</li>
                    <li >About</li>
                    <li >Contact</li>
                </ul>
            </nav>
           
        </div>
    )
}

export default Navbar
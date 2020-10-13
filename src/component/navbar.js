import React from 'react'
import logo from '../logo.svg'
import '../style.css'
import {Link} from 'react-router-dom'
function Navbar(){
    const appName = "MCDM Website"
    const linkStyle = {
        color :'white',
        textDecoration : 'none'
    }
    return(
        
        <div >
            
            <nav>
            <img src={logo} alt="logo" width="100" height="100"/>
                <h1>{appName}</h1>
                <ul className="nav-link">
                    <Link to="/">
                    <li style={linkStyle}>Home</li>
                    </Link>
                    <Link to="/about">
                    <li style={linkStyle}>About</li>
                    </Link>
                    <Link to="/contact">
                    <li style={linkStyle}>Contact</li>
                    </Link>
                </ul>
            </nav>
           
        </div>
    )
}

export default Navbar
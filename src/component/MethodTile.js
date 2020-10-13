import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../logo.svg'
class MethodTile extends React.Component{
    constructor(){
        super()
        this.state = {
            isActive: true
        }
    }

    render(){
       const linkStyle={
           textDecoration : 'none'
       }
        return(
        <div className="method-card">
            <Link to={`${this.props.name}`} style={linkStyle}>
                <div>
            <img src={logo} alt="" width="100" height="100" />
            <div className="method-container">
            
            <h4 style={linkStyle}>{this.props.name}</h4>
            
            <ul>
                <li>{this.props.description}</li>
                <li>{this.props.description}</li>
            </ul>
            </div>
            </div>
            </Link>
        </div>
        )
    }
}

export default MethodTile
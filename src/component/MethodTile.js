import React from 'react'
import {Link} from 'react-router-dom'
class MethodTile extends React.Component{
    constructor(){
        super()
        this.state = {
            isActive: true
        }
    }

    render(){
      
        return(
        <div>
            <Link to={`${this.props.name}`}>
            <h4>{this.props.name}</h4>
            </Link>
        </div>
        )
    }
}

export default MethodTile
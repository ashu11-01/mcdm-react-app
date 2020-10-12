import React from 'react'

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
            <a href=""><h2>{this.props.name}</h2></a>
        </div>
        )
    }
}

export default MethodTile
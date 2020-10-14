import React from 'react'

class Alternative extends React.Component{
    constructor(){
        super()
        this.state={
            name : ""
        }
        this.handleChane = this.handleChane.bind(this)
    }
    handleChane(event){
        const {name,value} = event
        this.setState({
            name : value
        })
    }
    render(){
        return(
            <div>
                <input name={this.props.name} type="text" placeholder="Name" onChange={this.handleChane}/>
            </div>
        )
    }
}

export default Alternative
import React from 'react'

class Alternative extends React.Component{
   
    render(){
        return(
            <div>
                <input name={this.props.name} type="text" placeholder="Name" onChange={this.props.onChange()}/>
            </div>
        )
    }
}

export default Alternative
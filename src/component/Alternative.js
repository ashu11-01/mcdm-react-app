import React from 'react'

class Alternative extends React.Component{
   constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event){
        const text = event.target.value
        this.props.onChange(this.props.id,text)
   }
    render(){
        // console.log(this.props.onChange)
        return(
            <div>
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default Alternative
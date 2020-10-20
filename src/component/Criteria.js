import React from 'react'

class Criteria extends React.Component{
   constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
   }

   handleChange(event){
       this.props.onChange(this.props.id, event.target.id,event.target.value)
   }
   handleCheckbox(event){
    this.props.onChange(this.props.id, event.target.id,event.target.checked)
   }
    render(){
        // console.log(this.props.onChange)
        return(
            <div>
                <input type="text" id="name" placeholder="Name"  onChange={this.handleChange}/>
                <input type="number" min="0" max="1" id="weight" placeholder="Weight"  onChange={this.handleChange}/>
                Is Negative?<input type="checkbox" id="isNegative"  onChange={this.handleCheckbox}/>
            </div>
        )
    }
}

export default Criteria
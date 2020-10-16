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
                <input type="text" id="0" placeholder="Name"  onChange={this.handleChange}/>
                <input type="text" id="1" placeholder="Weight"  onChange={this.handleChange}/>
                <input type="checkbox" id="2"  onChange={this.handleCheckbox}/>
            </div>
        )
    }
}

export default Criteria
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
            <tr>
                <td>
                    {this.props.id + 1}
                </td>
                <td>
                <input type="text" id="name" placeholder="Name"  onChange={this.handleChange}/>
                </td>
                <td>
                    <input type="number" min="0" max="1" style={{width : "100px"}} id="weight" placeholder="Weight"  onChange={this.handleChange}/>
                </td>
                <td>Is Negative?<input type="checkbox" id="isNegative"  onChange={this.handleCheckbox}/></td>
            </tr>
        )
    }
}

export default Criteria
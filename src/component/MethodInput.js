import React from 'react'
import Alternative from './Alternative'
class MethodInput extends React.Component{
    constructor(){
        super()
        this.state={
            alternatives: [],
            alternativeList : []
        }
        this.addNewAlternative = this.addNewAlternative.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
    }
    
    handleFieldChange(fieldId, value){
        const array = this.state.alternatives
        for (let index = 0; index < this.state.alternativeList.length; index++) {
            if(index===fieldId){
                array[index] = value
            }            
        }
        this.setState({alternatives : array})
    }

    addNewAlternative(){
        const index = this.state.alternativeList.length || 0
        this.setState(prevState =>{
            return ({
            alternativeList : prevState.alternativeList.concat(<Alternative key={index} id={index} onChange={this.handleFieldChange} value={this.state.alternatives[index]}/>)
        })
        })
    }
    render(){
        return(
            
        <div className="container">
           <h1>{this.props.match.params.method}</h1>
             <br/>
            <button onClick={this.addNewAlternative}>Add new Alternative</button>
            <br/>
           {this.state.alternativeList} 
        </div>
    )
    }
}

export default MethodInput;
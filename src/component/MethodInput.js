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
        this.removeAlternative = this.removeAlternative.bind(this)
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
        const item = <div key={index}>
            <Alternative key={index} id={index} onChange={this.handleFieldChange} value={this.state.alternatives[index]}/>
            <br/>
        </div>
        this.setState(prevState =>{
            return ({
            alternatives : prevState.alternatives.concat(""),
            alternativeList : prevState.alternativeList.concat(item)
        })
        })
    }


    removeAlternative(){
        // const index = this.state.alternativeList.length -1 || 0
        if(this.state.alternativeList.length===1){
            alert("Must be atleast one alternative")
            return
        }
            
        this.setState(prevState =>{
            return ({
                alternatives : prevState.alternatives.concat(prevState.alternatives.pop()),
            alternativeList : prevState.alternativeList.concat(prevState.alternativeList.pop())
        })
        })
    }


    render(){

        return(
        <div className="container">
           <h1>{this.props.match.params.method}</h1>
             <br/>
             <h4>Alternatives</h4>
             {this.state.alternativeList} <br/>
            <button onClick={this.addNewAlternative}>+</button>
            {this.state.alternativeList.length >0 ? <button onClick={this.removeAlternative}>-</button> : null }
            <br/>
        <p>{JSON.stringify(this.state)}</p>
        <p>{JSON.stringify(this.state.alternativeList.length)}</p>
        </div>
    )
    }
}

export default MethodInput;
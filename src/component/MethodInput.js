import React from 'react'
import Alternative from './Alternative'
class MethodInput extends React.Component{
    constructor(){
        super()
        // this.state={
        //     alternativeList : []
        // }
        this.state={}
        this.addNewAlternative = this.addNewAlternative.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
    }
    
    handleFieldChange(fieldId, value){
        this.setState({[fieldId] : value})
        // console.log(fieldId,value)
        // this.state.alternativeList[index].props.
    }

    addNewAlternative(){
        const alternativeList = this.state.alternativeList
        const index = alternativeList.length
        this.setState({
            alternativeList : alternativeList.concat(
            <Alternative key={index} name={index} value="" onChange={this.handleFieldChange}/>
            )}
        )
        // console.log(alternativeList)
    }
    render(){
        return(
        <div className="container">
           <h1>{this.props.match.params.method}</h1>
            {/* <br/>
            <button onClick={this.addNewAlternative}>Add new Alternative</button>
            <br/>
           {this.state.alternativeList} */}
           <Alternative id="1" onChange={this.handleFieldChange} value={this.state[1]}/>
        <p>{JSON.stringify(this.state)}</p>
        </div>
    )
    }
}

export default MethodInput;
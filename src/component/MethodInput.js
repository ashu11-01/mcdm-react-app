import React from 'react'
import Alternative from './Alternative'
class MethodInput extends React.Component{
    constructor(){
        super()
        this.state={
        }
        // this.state={}
        this.addNewAlternative = this.addNewAlternative.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
    }
    
    handleFieldChange(fieldId, value){
        // const alt = this.state.alternatives
        // this.setState(prevState =>{
        //     const updatedAlternatives = prevState.alternatives.map((alternative,index) => {
        //         if( index === fieldId)
        //             alternative=value
        //         return alternative
        //     })
        //     return updatedAlternatives
        // })
        this.setState({ [fieldId] : value})
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
        console.log(alternativeList)
    }
    render(){

        let alternativeList = []
        for (let index = 0; index < 4; index++) {
            alternativeList.push(<Alternative key={index} id={index} onChange={this.handleFieldChange} value={this.state[index]}/>)
            
        }
        console.log(this.state)
        return(
            
        <div className="container">
           <h1>{this.props.match.params.method}</h1>
            {/* <br/>
            <button onClick={this.addNewAlternative}>Add new Alternative</button>
            <br/>
           {this.state.alternativeList} */}
           {/* <Alternative id="1" onChange={this.handleFieldChange} value={this.state[1]}/>
           <Alternative id="2" onChange={this.handleFieldChange} value={this.state[2]}/> */}
           {alternativeList}
        <p>{JSON.stringify(this.state)}</p>
        </div>
    )
    }
}

export default MethodInput;
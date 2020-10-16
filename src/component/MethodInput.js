import React from 'react'
import Alternative from './Alternative'
class MethodInput extends React.Component{
    constructor(){
        super()
        this.state={
            alternatives: [],
            alternativeList : []
        }
        // this.state={}
        this.addNewAlternative = this.addNewAlternative.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
    }
    
    handleFieldChange(fieldId, value){
       
        // this.setState({ [fieldId] : value})
        const array = this.state.alternatives
        for (let index = 0; index < 4; index++) {
            if(index===fieldId){
                array[index] = value
            }
                // array[index] += value
            
        }
        console.log(array)
        this.setState({alternatives : array})
        // console.log(this.state)
    }

    addNewAlternative(){
        const index = this.state.alternativeList.length || 0
        this.setState(prevState =>{
            return ({
            alternativeList : prevState.alternativeList.concat(<Alternative key={index} id={index} onChange={this.handleFieldChange} value={this.state.alternatives[index]}/>)
        })
        })
        // console.log(this.state)
        // console.log(alternativeList)
    }
    render(){

        // let alternativeList = []
        // for (let index = 0; index < 4; index++) {
        //     alternativeList.push(<Alternative key={index} id={index} onChange={this.handleFieldChange} value={this.state.alternatives[index]}/>)
            
        // }
        // console.log(this.state)
        return(
            
        <div className="container">
           <h1>{this.props.match.params.method}</h1>
             <br/>
            <button onClick={this.addNewAlternative}>Add new Alternative</button>
            <br/>
           {this.state.alternativeList} 
           {/* <Alternative id="1" onChange={this.handleFieldChange} value={this.state[1]}/>
           <Alternative id="2" onChange={this.handleFieldChange} value={this.state[2]}/> */}
           {/* {alternativeList} */}
        {/* <p>{JSON.stringify(this.state)}</p> */}
        </div>
    )
    }
}

export default MethodInput;
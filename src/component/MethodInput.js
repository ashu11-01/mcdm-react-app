import React from 'react'
import Alternative from './Alternative'
class MethodInput extends React.Component{
    constructor(){
        super()
        this.state={
            alternativeList : []
        }
        this.addNewAlternative = this.addNewAlternative.bind(this)
    }

    addNewAlternative(){
        const alternativeList = this.state.alternativeList
        const index = alternativeList.length
        this.setState({
            alternativeList : alternativeList.concat(<Alternative name={index}/>)}
        )
    }
    render(){
        return(
        <div className="container">
           <h1>{this.props.match.params.method}{this.state.alternativeList.length>0 ? this.state.alternativeList[0].name:0}</h1>
            <br/>
            <button onClick={this.addNewAlternative}>Add new Alternative</button>
            <br/>
           {this.state.alternativeList}
           
        </div>
    )
    }
}

export default MethodInput;
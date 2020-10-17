import React from 'react'
import Alternative from './Alternative'
import Criteria from './Criteria'
import DecisionMatrix from './DecisionMatrix'
class MethodInput extends React.Component{
    constructor(){
        super()
        this.state={
            alternatives: [],
            alternativeList : [],
            criteria : [],
            criteriaList : []
        }
        this.addNewAlternative = this.addNewAlternative.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.removeAlternative = this.removeAlternative.bind(this)
        this.handleCriteriaChange = this.handleCriteriaChange.bind(this)
        this.addNewCriteria = this.addNewCriteria.bind(this)
        this.removeCriteria = this.removeCriteria.bind(this)
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

    handleCriteriaChange(fieldId, idx, value){
        // console.log(fieldId, idx, value,typeof(fieldId))
        fieldId = parseInt(fieldId)
        // console.log(this.state.criteria)
        let array = this.state.criteria
        for (let index = 0; index < array.length; index++) {
            if(index === fieldId){
                let criteria = array[index] ? array[index] : ["","",false]
                
                criteria[idx] = value
                array[index] = criteria
            }
            
        }
        this.setState({criteria : array})
        // console.log(this.state)
    }

    addNewCriteria(){
        const index = this.state.criteriaList.length || 0
        const item = <div key={index}>
            <Criteria key={index} id={index} 
            onChange={this.handleCriteriaChange} 
            name={""} 
            weight={""}
            isNegative={false}/>
            <br/>
        </div>
        this.setState(prevState =>{
            return ({
            criteria : prevState.criteria.concat({name:"",weight:"",isNegative:false}),
            criteriaList : prevState.criteriaList.concat(item)
        })
        })
    }


    removeCriteria(){
        // const index = this.state.alternativeList.length -1 || 0
        if(this.state.criteriaList.length===1){
            alert("Must be atleast one criteria")
            return
        }
            
        this.setState(prevState =>{
            return ({
                criteria : prevState.criteria.concat(prevState.criteria.pop()),
            criteriaList : prevState.criteriaList.concat(prevState.criteriaList.pop())
        })
        })
    }

    render(){
        // console.log(this.state.criteria)
        return(
        <div className="container">
           <h1>{this.props.match.params.method}</h1>
             <br/>
             <div style={{visibility:"visible"}}>
             <h4>Alternatives</h4>
             {this.state.alternativeList} <br/>
            <button onClick={this.addNewAlternative}>+</button>
            {this.state.alternativeList.length >0 ? <button onClick={this.removeAlternative}>-</button> : null }
            <br/>
            </div>

            <div>
            <h4>Criteria</h4>
            {this.state.criteriaList} <br/>
            <button onClick={this.addNewCriteria}>+</button>
            {this.state.criteriaList.length >0 ? <button onClick={this.removeCriteria}>-</button> : null }
            <br/>
            </div>

            <br/>
             <div style={{visibility:"visible"}}>
             <h4>Decision Matrix</h4>
             <DecisionMatrix 
             method={this.props.match.params.method} 
             alternatives={this.state.alternatives} 
             criteria={this.state.criteria}
             />
            <br/>
            </div>
        </div>
    )
    }
}

export default MethodInput;
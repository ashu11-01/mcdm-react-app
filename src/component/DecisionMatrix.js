import React from 'react'

class DecisionMatrix extends React.Component{
   constructor(props){
        super(props)
        let initialMatrix = []
        for (let index = 0; index < this.props.alternatives.length; index++) {
            initialMatrix.push([])
           for (let idx = 0; idx < this.props.criteria.length; idx++) {
               initialMatrix[index][idx] = 0
               
           }
        }

        this.state={
            matrix : initialMatrix
        }
        this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event){
        const {name,id,value} = event.target
    //    console.log(name,id,value)
    this.setState(prevState =>{
        const updatedMatrix = prevState.matrix.map((row,index) => {
            if(index === parseInt(name)){
                row[id] = value
            }
            return row
        })
        return updatedMatrix
    })
   }

   submit(){

   }

    render(){
    console.log(this.state.matrix)
    const criteriaRowList = this.props.criteria.map((criteria,index) =>{
        return(
        <td key={index}>{criteria.name}</td>
        )
    })
    
        return(
            <div>
                <table style={{textAlign:"center"}}>
                    <tbody>
                    <tr>
                        <td colSpan="1"></td>
                        {criteriaRowList}
                    </tr>
                    {this.props.alternatives.map((alternative,index)=>{
                        let altIndex = index
                        return(
                        <tr key={index}>
                            <td>{alternative}</td>
                            {this.props.criteria.map((criteria,index)=>{
                                let criteriaIndex = index
                                return(
                                    <td key={index}>
                                        <input type="number" min="0" max="1" name={altIndex} id={criteriaIndex} value={this.state.matrix[altIndex][criteriaIndex] || "0"} onChange={this.handleChange}></input>
                                    </td>
                                )
                            })}
                        </tr>
                        )
                    })}
                    
                    </tbody>
                   
                </table>
                <button name="clear">Clear</button>
                <button name="submit" onClick={this.submit}>Calculate using {this.props.method} method</button>
            </div>
        )
    }
}

export default DecisionMatrix
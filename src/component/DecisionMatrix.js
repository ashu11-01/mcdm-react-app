import React from 'react'

class DecisionMatrix extends React.Component{
   constructor(props){
        super(props)
   }

   
    render(){
        // console.log('props',this.props.criteria)
    const alternativeRowList = this.props.alternatives.map((alterative,index) =>{
        return(
            <td key={index}>{alterative}</td>
        )
    })
    const criteriaRowList = this.props.criteria.map((criteria,index) =>{
        alternativeRowList.concat(<input type="text"/>)
        return(
        <td key={index}>{criteria.name}</td>
        )
    })
    const inputList = this.props.criteria.map((index)=>{
        return(
            <td key={index}><input type="text"></input></td>
        )
    })
    console.log(alternativeRowList)
        return(
            <div>
                <table style={{textAlign:"center"}}>
                    <tbody>
                    <tr>
                        <td colSpan="1"></td>
                        {criteriaRowList}
                    </tr>
                    {this.props.alternatives.map((alternative,index)=>{
                        return(
                        <tr key={index}>
                            <td>{alternative}</td>
                            {this.props.criteria.map((criteria,index)=>{
                                return(
                                    <td key={index}><input type=""></input></td>
                                )
                            })}
                        </tr>
                        )
                    })}
                    
                    </tbody>
                   
                </table>
            </div>
        )
    }
}

export default DecisionMatrix
import React from 'react'

class DecisionMatrix extends React.Component{
   constructor(props){
        super(props)
        this.state={
            matrix : []
        }
        this.handleChange = this.handleChange.bind(this)
   }

   handleChange(event){
        const {name,id,value} = event.target
       console.log(name,id,value)
   }

   submit(){

   }

    render(){

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
                                    <td key={index}><input type="text" name={altIndex} id={criteriaIndex} onChange={this.handleChange}></input></td>
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
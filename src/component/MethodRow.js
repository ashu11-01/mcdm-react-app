import React from 'react'
import MethodTile from './MethodTile'

class MethodRow extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        const tileItems = this.props.methods.map(item =>{
            return<MethodTile key={item.id} name={item.name} description={item.description} features={item.features} resources={item.resources}/>
        })
        return(
        <div className="method-row">
            {tileItems}
        </div>
        )
    }
}

export default MethodRow
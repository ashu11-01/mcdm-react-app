import React from 'react'
import MethodTile from './MethodTile'

class MethodRow extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        const tileItems = this.props.methods.map(item =>{
            return<MethodTile name={item.name}/>
        })
        return(
        <div>
            {tileItems}
        </div>
        )
    }
}

export default MethodRow
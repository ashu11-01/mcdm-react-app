import React from 'react'
import MethodTile from './MethodTile'
class MethodRow extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        return(
        <div>
            <div className="row">
              <div className="col-md-4">
                    <MethodTile name={this.props.methods[0].name}/>
              </div>

              <div className="col-md-4">
              <MethodTile name={this.props.methods[1].name}/>
              </div>

              <div className="col-md-4">
              <MethodTile name={this.props.methods[2].name}/>
              </div>
            </div>
        </div>
        )
    }
}

export default MethodRow
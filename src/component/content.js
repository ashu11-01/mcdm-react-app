import React from 'react'
import MethodRow from './MethodRow'
import methodList from '../MethodData'
function Content(){
    console.log(methodList)
    return(
        <div className="container pb-2 pt-4">
          
          <MethodRow methods={methodList.slice(0,3)}/>
          <MethodRow methods={methodList.slice(3,6)}/>
        </div>
    )
}

export default Content;
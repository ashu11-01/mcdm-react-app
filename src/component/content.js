import React from 'react'
import MethodRow from './MethodRow'
function Content(){
    const methodList=[
       [
            {
                name : "MAAU"
            },
            {
                name : "TOPSIS"
            },
            {
                name : "ELECTRE"
            }
        ],
        [
            {
                name : "mTOPSIS"
            },
            {
                name : "VIKTOR"
            },
            {
                name : "Fuzzy TOPSIS"
            }
        ]
    ]
    return(
        <div className="container" style={{backgroundColor: "#000000", color: "#d3d3d3", padding:20, textAlign: "center"}}>
          <MethodRow methods={methodList[0]}/>
          <MethodRow methods={methodList[1]}/>
        </div>
    )
}

export default Content;
import React from 'react'

function Header(){
    const appName = "MCDM website"
    return(
        <div className="container-fluid" style={{backgroundColor: "#3f3f3f", color: "#d3d3d3", padding:20}}>
            {/* <img src={logo} alt={appName} width={80} height={40}/> */}
            <h1>{appName}</h1>
        </div>
    )
}

export default Header;
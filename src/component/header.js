import React from 'react'

function Header(){
    const appName = "MCDM website"
    return(
        <div className="container-fluid" style={{backgroundColor: "#3f3f3f", color: "#d3d3d3", padding:8}}>
        

          <div className="row">
              <div className="col-md-6">
              <h1>{appName}</h1>
              </div>

              <div className="col-md-6">
                <div className="row">
                    <div className="col-md-3" >
                        <h1 style={{textDecoration:"underline", backgroundColor:"#D3D3D3",color:"#000000"}}>Home</h1> 
                    </div>
                    <div className="col-md-3" >
                        <h6>Home</h6>
                    </div>
                    <div className="col-md-3" >
                        <h6>Home</h6>
                    </div>
                    <div className="col-md-3" >
                        <h6>Home</h6>
                    </div>
                </div>
              </div>
            
          </div>
          
         
        </div>
    )
}

export default Header;
import React from 'react'

function Footer(){
    const message = "Developed by: Ashutosh Kumar"
    return(
        <div style={{backgroundColor: "#3f3f3f", color: "#d3d3d3", padding:20, textAlign: "center"}}>
           
           <footer><h4>{message}</h4></footer>
        </div>
    )
}

export default Footer;
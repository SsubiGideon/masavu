import React from "react";


export default function Wwd (props) {
    
    return(
        <div className="wwd">
            
         <div id="wwd">
            
          <div className="wwdimg"><img src={props.img} alt="img"></img></div>

          <div className="wwdcont">
            <h3>{props.title}</h3>
            <p>{props.cont}</p>
            </div> 

         </div>
          
        </div>
    )
}
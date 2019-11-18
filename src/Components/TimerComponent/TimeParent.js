import React from 'react'
import "./TimerStyle.css"

export default function TimeParent({timer}) {

    if (timer > 86400000) {
        timer = 0;
      }
    var seconds = parseInt( timer / 1000); 
        let hours   = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds - (hours * 3600)) / 60);
         seconds = seconds - (hours * 3600) - (minutes * 60);
       
       
       
    return (
        <div className="time">


            <div className="heures">

                <span> {hours >9? hours:"0"+hours}:</span>
                <span className="text">H</span>
             </div>


            <div className="minutes">
                <span> {minutes > 9 ? minutes:"0" +minutes}:</span>
                <span className="text">Min</span>
             </div>


            <div className="secondes">
                <span>  {seconds >9 ? seconds :"0"+seconds}</span>
                <span className="text">Sec</span> 
                </div>
             </div>
             
             
             
           
            
        
    )
}

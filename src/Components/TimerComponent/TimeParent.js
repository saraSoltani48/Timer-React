import React from 'react'
import "./TimerStyle.css"

export default function TimeParent({timer}) {

    var seconds = parseInt( timer / 1000); 
        var hours   = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds - (hours * 3600)) / 60);
        var seconds = seconds - (hours * 3600) - (minutes * 60);
       
    return (
        <div className="time">
        <p> {hours}:{minutes} : {seconds}</p>
        </div>
    )
}

import React from 'react';
import './App.css';
import ConterTimer from "./Components/TimerComponent/TimeParent";



const milli = (80645561);

function App() {
  return (
    <div className="clock">
       <h2> REACT DYNAMIC TIME </h2>
    <ConterTimer timer= {milli}/>
    </div>
  );
}

export default App;

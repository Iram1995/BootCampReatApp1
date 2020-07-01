import React,{useState} from 'react';
import './App.css';
import Message from './Message';


function App() {
  let [count,setcount]=useState(1);
  let [isMorning,setMorning]=useState(true);
  return (
    <div>
      <h1 className={`box ${isMorning?'DayLight':'NightLight'}`}>Today is {isMorning==true?"Morning":"Night"}</h1>
  <Message counter={count}/>
  <br/>

  <button onClick={()=>setcount(++count)}>Update Counter</button>
  <button onClick={()=>setMorning(!isMorning)}>Update Morning</button>
  </div>
  );
}

export default App;

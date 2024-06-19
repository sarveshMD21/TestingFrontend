import logo from './logo.svg';
import './App.css';
import InpuBox from './Components/InpuBox';
import { useEffect, useState } from 'react';
import Button from './Components/Button';
import IconBadge from './Components/IconBadge';
import User from './Components/User';

function App() {
  const [counter,setCounter]=useState(0);
  const [flag,setFlag]=useState(1);
  const [data,setData]=useState(1);
  const handleClick=()=>{
    setFlag(!flag);
  }

  useEffect(()=>{
    setTimeout(()=>{
      setData(!data);
    },2000)
  },[])

   const handlefunc=()=>{
    console.log("hello");
   }

  return (
    <div className="App">
     <h1 >First react Test case</h1>
     <h1 data-testid="value-display">{counter}</h1>
     <InpuBox/>
     <Button setCounter={setCounter} counter={counter}/>
     <select>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
      </select>
    <br/>
      <IconBadge/>
      <br/>
      <h1>Hello World</h1>
      <br/>
      {flag&&<button onClick={handleClick}>Login</button>}
      {!flag&&<button onClick={handleClick}>Logout</button>}
      <br/>
      {data?<h1>Data not found</h1>:<h1>Data found</h1>}
      <br/>
      <div data-testid="parent">
        <div>Child</div>
      </div>
      <br/>
      <User name="sarvesh" handlefunc={handlefunc}/>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(9)
  
  // let Counter = 9

  const addValue = () =>{
    console.log("clicked", counter);
    if (counter<20){
      setCounter(counter+1)
      // setCounter(prevCounter => prevCounter+1)
    }
    else{
      setCounter(20)
    } 
  }
  const removeValue = () =>{
    console.log("clicked", counter);
    if (counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(0)
    }
  }
  return (
    <> 
    <h1>My Creation</h1>
    <h2>Counter value: {counter} </h2>
    <button 
    onClick={addValue}>Add Value</button>
    <br />
    <button
    onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

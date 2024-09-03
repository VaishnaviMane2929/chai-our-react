import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState[10]
 
 const addValue = () => {
  console.log("clicked", Counter);
  
   Counter = Counter + 1
  setCounter(Counter ) 

  
 }

 const removeValue = () => {
  if(Counter > 0)
  setCounter(Counter - 1)
 }
  return (
    <>
     <h1>chai our react</h1>
     <h2>Counter value: {Counter}</h2>

     <button onClick={addValue}>
      Add value</button> <br />
     <button onClick={removeValue}>
      Remove value {Counter}</button>
     <p>footer:{Counter}</p>
      
    </>
  )
}

export default App

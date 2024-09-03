import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let Counter = 10
 

  return (
    <>
     <h1>chai our react</h1>
     <h2>Counter value: {Counter}</h2>
     <button>Add value</button> <br />
     <button>Remove value</button>
      
    </>
  )
}

export default App

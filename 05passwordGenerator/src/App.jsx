import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed] = useState(false); 
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const PasswordGenerator = () => {() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "!@#$%^&*()_+=~"


  }, [length,numberAllowed, charAllowed, setPassword ] }
  

  return (
    <>
      <h1 className='text-4xl text-center text-white '>Password Generator</h1>
    </>
  )
}

export default App

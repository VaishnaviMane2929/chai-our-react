import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-red-600'>tailwind test </h1>
     <h2 className='text-blue-500'>hello react</h2>
    </>
  )
}

export default App

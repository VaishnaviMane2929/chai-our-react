import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color, setColor] = useState("olive")

  return (
    
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor("Blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}>Blue</button>
          <button 
          onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}>Green</button>
          <button
          onClick={() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "pink"}}>Pink</button>
          <button
          onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "black"}}>Black</button>
          <button
          onClick={() => setColor("Purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Purple"}}>Purple</button>
          <button 
          onClick={() => setColor("magenta")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "magenta"}}>Magenta</button>
          <button
          onClick={() => setColor("Skyblue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Skyblue"}}>SkyBlue</button>
          <button
          onClick={() => setColor("Red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Red"}}>Red</button>
          <button
          onClick={() => setColor("Orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Orange"}}>Orange</button>
          <button
          onClick={() => setColor("Lavender")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "Lavender"}}>Lavender</button>
          <button
          onClick={() => setColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "white"}}>white</button>
          <button
          onClick={() => setColor("Gray")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor: "Gray"}}>Gray</button>
        </div>
      </div>
     </div>
    
  )
}

export default App

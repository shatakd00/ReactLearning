import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-700 flex justify-center items-center'
    style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center items-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white text-white px-3 py-2 rounded-full'>
          <button className='outline-none px-2 py-2 bg-black rounded-full shadow-lg'
          style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}>Black</button>
          <button className='outline-none px-2 py-2 bg-red-500 rounded-full shadow-lg'
          style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-2 py-2 bg-green-500 rounded-full shadow-lg'
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-2 py-2 bg-blue-500 rounded-full shadow-lg'
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}>Blue</button>
          <button className='outline-none px-2 py-2 bg-yellow-500 rounded-full shadow-lg'
          style={{backgroundColor: "yellow"}}
          onClick={() => setColor("yellow")}>Yellow</button>
          <button className='outline-none px-2 py-2 bg-pink-500 rounded-full shadow-lg'
          style={{backgroundColor: "pink"}}
          onClick={() => setColor("pink")}>Pink</button>
          <button className='outline-none px-2 py-2 bg-purple-500 rounded-full shadow-lg'
          style={{backgroundColor: "purple"}}
          onClick={() => setColor("purple")}>Purple</button>
          <button className='outline-none px-2 py-2 bg-orange-500 rounded-full shadow-lg'
          style={{backgroundColor: "orange"}}
          onClick={() => setColor("orange")}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

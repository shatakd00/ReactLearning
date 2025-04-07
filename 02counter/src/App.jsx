import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={() =>{
        if(counter < 20){
        setCounter(counter + 1)}}}>Increase</button>
      <button onClick={() =>{
        if(counter > 0){
        setCounter(counter - 1)}}}>Decrease</button>
    </>
  )
}

export default App

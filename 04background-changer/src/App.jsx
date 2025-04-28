import { useState } from "react"

function App() {
  const [color, setColor] = useState("gray")

  return (
    <div className = "w-full h-screen duration-200"
      style = {{backgroundColor: color}}>
        hello
    </div>
  )
}

export default App

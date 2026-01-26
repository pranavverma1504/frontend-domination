
import { useState } from 'react'
import './App.css'

function App() {

const [counter, setCounter] = useState(0);

const increase= () =>{
  setCounter(counter+1)
}

const decrease= () =>{
  setCounter(counter-1)
}
  return (
    <>
    <h1>counter value:{counter}</h1>

    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App

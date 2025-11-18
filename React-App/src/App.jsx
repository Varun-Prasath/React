import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Counter from './Counter'
import CarsList from './CarsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CarsList></CarsList>
    </>
  );
}

export default App

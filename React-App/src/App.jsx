import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Welcome from './Welcome'
import Counter from './Counter'
import CarsList from './CarsList'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form />
    </>
  );
}

export default App

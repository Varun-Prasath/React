import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Counter from './Counter'
import Cars from './Cars'
import Toyota from './assets/hyryder.jpeg'
import Venue from './assets/venue.jpg'
import Virtus from './assets/virtus.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cars name="Toyota" image={Toyota} desc="This is the Toyota HyRyder"></Cars>
    <Cars name="Hyundai" image={Venue} desc="This is the Hyundai Venue"></Cars>
    <Cars name="Volkswagen" image={Virtus} desc="This is the Volkswagen Virtus"></Cars>
    <Counter/>
    </>
  );
}

export default App

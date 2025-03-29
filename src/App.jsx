import { useState } from 'react'

import './App.css'
import Weather from './weather/weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather name='kolkata'/>
      <Weather name='torento'/>
      <Weather name='moscow'/>
      <Weather name='oslo'/>
      

    
      
    </>
  )
}

export default App;

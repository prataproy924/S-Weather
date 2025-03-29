import { useState } from 'react'

import './App.css'
import Weather from './weather/weather'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div>
      <div>
      <Weather name='kolkata'/>
      <Weather name='torento'/>
      <Weather name='moscow'/>
      <Weather name='oslo'/>
      <Weather name='soul'/>
      <Weather name='tokyo'/>

      </div>
    </div>
      
    </>
  )
}

export default App;

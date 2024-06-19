import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiEffect from './components/API-news'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Nightly News</h1>
      <ApiEffect/>
      </div>
   

     
     
    
    </>
  )
}

export default App

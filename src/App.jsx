import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsApi from './components/NewsApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="topnav">
      <a href="#home">Home</a>
      <a href="#news">News Room</a>
    </div>
      <div>
        <h1>Latest Tech News </h1>
        <input  class='search' type="text" placeholder='search latest news here'  />
        <button>Submit</button>
      <NewsApi/>
      </div>
   

     
     
    
    </>
  )
}

export default App

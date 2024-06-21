import React from 'react'
import './App.css'
import NewsApi from './components/NewsApi'
import Searchbar from './components/Searchbar'
import { SearchProvider } from './context/searchcontext'

const App = () => {
  

  return (
    <>
      <div className="topnav">
      <a href="#home">Home</a>
      <a href="#news">News Room</a>
    </div>
      <div id='container'>
        <h1>Keeping Up with the TECH Trends</h1>
       <SearchProvider>
        <div>
          <Searchbar/>
          <NewsApi/>
        </div>
       </SearchProvider>
      
      </div>
   

     
     
    
    </>
  )
}

export default App

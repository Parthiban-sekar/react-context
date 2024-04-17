import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Card from './Components/Card'



const App = () => {
  return (
    <>
  <div className="fixed-top">
    <Navbar/>
    <Header/>
    </div>
    <div >
     <Card/>
  </div>
  
  </>
  )
}

export default App

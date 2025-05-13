import React from 'react'
import Home from "./Pages/Home/Home"
import { Routes,  Route } from 'react-router-dom'
import LearnMore from './Pages/LeranMore/LearnMore'
import Auth from './Pages/Auth/Auth'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/learn-more' element={ <LearnMore /> } />
      <Route path ="/auth" element={<Auth />} />
    </Routes>
    </>
  )
}

export default App

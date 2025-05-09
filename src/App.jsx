import React from 'react'
import Home from "./Pages/Home/Home"
import { Routes,  Route } from 'react-router-dom'
import LearnMore from './Pages/LeranMore/LearnMore'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/learn-more' element={ <LearnMore /> } />

    </Routes>
    </>
  )
}

export default App

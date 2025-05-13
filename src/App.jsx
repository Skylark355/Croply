import React from 'react'
import Home from "./Pages/Home/Home"
import { Routes,  Route } from 'react-router-dom'
import LearnMore from './Pages/LeranMore/LearnMore'
import Auth from './Pages/Auth/Auth'
import VerifyOTP from './Pages/VerifyOTP/VerifyOTP'
import AccountSuccess from './Pages/AccountSuccess/AccountSuccess'
import Dashboard from './Pages/Dashboard/Dashboard'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/learn-more' element={ <LearnMore /> } />
      <Route path ="/auth" element={<Auth />} />
      <Route path='/verify' element={<VerifyOTP/>} />
      <Route path='/success' element={<AccountSuccess/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Login, Signup} from './components'
import { useState } from 'react'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          
    </div>
  )
}

export default App


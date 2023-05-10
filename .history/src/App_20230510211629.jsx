import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Login, Signup} from './components'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Login />} />
          <Route path='/home' element={<Signup />} />
        </Routes>
      </Router>  
    </div>
  )
}

export default App


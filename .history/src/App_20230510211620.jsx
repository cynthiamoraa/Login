import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Login, Signup} from './components'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/s' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>  
    </div>
  )
}

export default App


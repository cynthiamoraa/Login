import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Login, Signup} from './components'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Sign />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>  
    </div>
  )
}

export default App


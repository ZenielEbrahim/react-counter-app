import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './firebase/db'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateCounter from './components/pages/CreateCounter'
import UpdateCounter from './components/pages/UpdateCounter'
import Dashboard from './components/pages/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      

      <Router>



        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/create_counter' element={<CreateCounter />} />
          <Route path='/update_counter/:id' element={<UpdateCounter />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

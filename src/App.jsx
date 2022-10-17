import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Mernflix from './pages/Mernflix'
import Singup from './pages/Singup'

 const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Singup' element={<Singup/>}/>
          <Route exact path='/' element={<Mernflix/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
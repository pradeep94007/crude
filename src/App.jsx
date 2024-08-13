import React from 'react'
import Read from './components/Read'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Add from './components/Add'
import Update from './components/Update'


function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Read/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
        <Route path='/up/:id' element={<Update/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import {BrowserRouter as Route,Router,Routes} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Categories from './pages/Categories'


function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/category" element={<Categories/>}/>
    </Routes>
   </Router>
  )
}

export default App
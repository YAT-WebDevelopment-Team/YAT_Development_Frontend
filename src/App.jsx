import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Blog from './Components/Blog';
import Exports from './Components/Exports';

function App() {

  return (
  <Router>
    <Routes>
       <Route path='/' element={<Blog/>}/>
       <Route path='/Exports' element={<Exports/>}/>
       
    </Routes>
  </Router>
  )
}

export default App

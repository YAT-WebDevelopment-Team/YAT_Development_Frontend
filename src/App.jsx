import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Blog from './Components/Blog';
import Exports from './Components/Exports';
import ServiceLines from './ServiceLines';

function App() {

  return (
  <Router>
    <Routes>
       <Route path='/' element={<Blog/>}/>
       <Route path='/Exports' element={<Exports />} />
       <Route path='/ServiceLines' element={<ServiceLines />} />
    </Routes>
  </Router>
  )
}

export default App;

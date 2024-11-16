import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Exports from './Components/Exports';
import ServiceLines from './Components/ServiceLines';
import Imports from './Components/Imports';

function App() {

  return (
  <Router>
    <Routes>
       <Route path='/' element={<Home/>}/> 
       <Route path='/Blogs' element={<Blog/>}/>
       <Route path='/Exports' element={<Exports />} />
       <Route path='/Imports' element={<Imports />} />
       <Route path='/ServiceLines' element={<ServiceLines />} />
    </Routes>
  </Router>
  )
}

export default App;

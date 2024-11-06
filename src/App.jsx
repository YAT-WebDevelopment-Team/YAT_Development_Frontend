import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Blog from './Components/Blog';

function App() {

  return (
  <Router>
    <Routes>
       <Route path='/' element={<Blog/>}/>
    </Routes>
  </Router>
  )
}

export default App

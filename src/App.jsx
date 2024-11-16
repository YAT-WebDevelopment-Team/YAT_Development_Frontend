// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Home from './Components/Home';
// import Blog from './pages/Blog';
// import Exports from './pages/Exports';
// import ServiceLines from './pages/ServiceLines';
// import Imports from './pages/Imports';

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/Blogs' element={<Blog />} />
//         <Route path='/Exports' element={<Exports />} />
//         <Route path='/Imports' element={<Imports />} />
//         <Route path='/ServiceLines' element={<ServiceLines />} />
//       </Routes>
//     </Router>
//   )
// }



import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Blog from './pages/Blog';
import Exports from './pages/Exports';
import ServiceLines from './pages/ServiceLines';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Imports from './pages/Imports';
import Home from './pages/Home';


const Layout = () => {

  return (
    <div >
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/Exports",
        element: <Exports />
      },
      {
        path: "/imports",
        element: <Imports />
      },
      {
        path: "/ServiceLines",
        element: <ServiceLines />
      },
    ]
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

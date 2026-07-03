import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Page1 from './Pages/Page1.jsx';
import Page2 from './Pages/Page2.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Loayout from './Admindashbord/Loayout.jsx';
import Login from './Pages/Login.jsx';
import Protectedroute from './components/Protectedroute.jsx';
import Pnav from './components/Pnav.jsx';
import { Test } from './components/Test.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />

        <Route element={<Protectedroute />}>

          <Route element={<Loayout />}>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>

          <Route element={<Pnav />}>
            <Route path='p1' element={<Page1 />} />
            <Route path='p2' element={<Page2 />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter> */}


    {/* <App/> */}
    <Test/>
  </StrictMode>,
)

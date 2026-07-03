import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './components/Footer';
import Header from './components/Header';
import Courses from './pages/Courses';
import Registration from './pages/Registration';
import About from './pages/About';
import Home from './pages/Home';
import Contactus from './pages/Contactus';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="Registration" element={<Registration />} />
        <Route path='Contactus' element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </StrictMode>,
)

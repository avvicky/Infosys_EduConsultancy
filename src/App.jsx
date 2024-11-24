import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent';
import About from './components/About';
import Products from './components/Products';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './pages/Dashboard';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
     <div className='bg-gradient-to-r from-blue-500/75 to-purple-500/75  min-h-[100vh]'>

      <Routes>
        {/* Routs for all pages */}
        <Route path="/" element={<HeroComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard userRole="admin" />} />


      </Routes>
     </div>
   </Router>
    </>
  )
}

export default App

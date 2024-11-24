import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

export default function HeroComponent() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
         <Navbar/>

   
    <section className="relative text-white min-h-[90vh] flex items-center">
      <div className="container mx-auto text-center px-4 ">

        <h1 className="text-5xl font-bold mb-4">Your Path to Educational Success</h1>
        <p className="text-lg mb-6">
          Connect with our expert consultants for personalized guidance on educational planning, training, and resources.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#services"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-200"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-200"
          >
            <Link to="/products" >Get Started
            </Link>
          </a>
        </div>

      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-50 pointer-events-none"></div> */}
    </section>

    </>
  )
}
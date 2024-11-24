import React, {useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';

export default function About() {

  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
         <Navbar/>

    <section id="about" className="py-16  to-purple-500/75 min-h-[90vh]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 font-cinzel">Our Story</h2>
        <p className="text-lg text-white mb-8">
          At Edu_Consultancy, we are dedicated to empowering students and professionals on their educational journey. 
          With a team of experienced consultants, we offer personalized guidance in educational planning, career counseling, 
          and training resources to help you achieve your academic and career goals.
        </p>
        <div className="flex flex-wrap justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-left">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Personalized Planning</h3>
            <p className="text-gray-600">
              Tailored academic and career plans to align with your unique goals and aspirations.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-left">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Work with industry experts to make informed decisions about your educational path.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 w-72 text-left">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Resource Access</h3>
            <p className="text-gray-600">
              Get exclusive access to resources, workshops, and training sessions designed for your success.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
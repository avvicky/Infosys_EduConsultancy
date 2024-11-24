import React from 'react';
import Navbar from './Navbar';

export default function Products() {
  const products = [
    {
      title: 'Career Counseling',
      description: 'Expert guidance to help you choose the right career path and make informed decisions about your future.',
      price: '₹500',
    },
    {
      title: 'Study Abroad Assistance',
      description: 'Comprehensive support for applying to international universities, including application guidance and visa support.',
      price: '₹1500',
    },
    {
      title: 'Test Preparation',
      description: 'Personalized tutoring for competitive exams like SAT, GRE, and IELTS to help you achieve high scores.',
      price: '₹1200',
    },
    {
      title: 'Academic Tutoring',
      description: 'One-on-one or group tutoring sessions for various subjects to improve academic performance.',
      price: '₹800',
    },
    {
      title: 'Skill Development Workshops',
      description: 'Workshops focused on soft skills, technical skills, and other critical skills needed for career success.',
      price: '₹700',
    },
    {
      title: 'Online Courses',
      description: 'Access to exclusive online courses in a wide range of subjects, designed by industry experts.',
      price: '₹1000',
    },
  ];

  return (
    <>
         <Navbar/>
  
    <section id="products" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 font-cinzel">Explore</h2>
        <p className="text-lg text-white mb-12">
          Explore our range of services designed to guide you on your educational and professional journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="text-blue-600 font-semibold text-lg mb-4">{product.price}</div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
}

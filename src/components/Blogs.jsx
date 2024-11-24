import React from 'react';
import Navbar from './Navbar';


// Sample blog data (replace with dynamic data as needed)
const blogData = [
  {
    id: 1,
    title: "How to Choose the Right Career Path",
    excerpt: "Choosing a career path can be challenging. Here are some tips to help you find the right direction...",
    imageUrl: "https://media.istockphoto.com/id/184969154/photo/taking-decisions.jpg?s=1024x1024&w=is&k=20&c=sdq7owJcKwf3t1pIB9uBlhHNxHqUmSMS7DSnYfUalHM=", // replace with actual image URLs
  },
  {
    id: 2,
    title: "Tips for Effective Educational Planning",
    excerpt: "Educational planning is essential for success. Discover strategies to make the most out of your education...",
    imageUrl: "https://media.istockphoto.com/id/1074983828/photo/sharing-ideas-concepts-with-papernote-writing-strategy-on-wall-glass-office-business-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z1YwkBtEqhdz72ALF1ohvS2WRTweJrIBtGQFD__bm8Y=",
  },
  {
    id: 3,
    title: "Benefits of Consulting with Experts",
    excerpt: "Consulting with experts can give you a clearer understanding of educational options and career paths...",
    imageUrl: "https://media.istockphoto.com/id/1987430372/photo/business-people-teamwork-and-tablet-for-statistics-finance-report-and-planning-of-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=vDqbfJ0YQ_tL-HboFu7Yw9b28xZ9dYCXtPBG4GufVCw=",
  },
];

export default function Blogs() {
  return (
    <>
         <Navbar/>

    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8 text-white font-cinzel">Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <button className="text-blue-500 hover:text-blue-700 font-semibold">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
}

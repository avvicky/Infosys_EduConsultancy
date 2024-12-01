import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Close } from '@mui/icons-material';

const blogData = [
  {
    id: 1,
    title: "How to Choose the Right Career Path",
    excerpt: "Choosing a career path can be challenging. Here are some tips to help you find the right direction...",
    imageUrl: "https://media.istockphoto.com/id/184969154/photo/taking-decisions.jpg?s=1024x1024&w=is&k=20&c=sdq7owJcKwf3t1pIB9uBlhHNxHqUmSMS7DSnYfUalHM=",
  },
  {
    id: 2,
    title: "Tips for Effective Educational Planning",
    excerpt:
      "Educational planning is essential for success. Discover strategies to make the most out of your education...",
    imageUrl:
      "https://media.istockphoto.com/id/1074983828/photo/sharing-ideas-concepts-with-papernote-writing-strategy-on-wall-glass-office-business-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z1YwkBtEqhdz72ALF1ohvS2WRTweJrIBtGQFD__bm8Y=",
  },
  {
    id: 3,
    title: "Benefits of Consulting with Experts",
    excerpt:
      "Consulting with experts can give you a clearer understanding of educational options and career paths...",
    imageUrl:
      "https://media.istockphoto.com/id/1987430372/photo/business-people-teamwork-and-tablet-for-statistics-finance-report-and-planning-of-revenue.webp?a=1&b=1&s=612x612&w=0&k=20&c=vDqbfJ0YQ_tL-HboFu7Yw9b28xZ9dYCXtPBG4GufVCw=",
  },
];

export default function Blogs() {
  const [activeBlog, setActiveBlog] = useState(null);
  const [isCreateBlogOpen, setCreateBlogOpen] = useState(false);

  const handleReadMore = (blog) => {
    setActiveBlog(blog);
  };

  const handleClosePopup = () => {
    setActiveBlog(null);
  };

  const handleOpenCreateBlog = () => {
    setCreateBlogOpen(true);
  };

  const handleCloseCreateBlog = () => {
    setCreateBlogOpen(false);
  };

  return (
    <>
      <Navbar />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8 text-white font-cinzel">Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <button
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                    onClick={() => handleReadMore(blog)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal for Blog Details */}
      {activeBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <span className="material-icons">close</span>
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{activeBlog.title}</h3>
            <img
              src={activeBlog.imageUrl}
              alt={activeBlog.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">
              This is a detailed view of the blog. Replace this placeholder with the full content of the blog.
            </p>
          </div>
        </div>
      )}

      {/* Footer with "Create Your Blog" Button */}
      <footer className="py-6 text-center">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          onClick={handleOpenCreateBlog}
        >
          Create Your Blog +
        </button>
      </footer>

      {/* Popup Modal for Blog Creation */}
      {isCreateBlogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl relative">
            <button
              onClick={handleCloseCreateBlog}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <span className="material-icons"><Close /></span>
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Create Your Blog</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter blog title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Content</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg h-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your blog content here..."
                  rows="6"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Attach Files</label>
                <input
                  type="file"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseCreateBlog}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 mr-2"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

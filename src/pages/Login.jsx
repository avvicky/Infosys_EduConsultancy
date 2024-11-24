import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    username: '',
   
    password: '',
   
  });
  const [err, setErr] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
      console.log(inputs);
      console.log('Form submitted successfully');
   
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side - Image and Welcome Text */}
        <div className="w-1/2 bg-purple-200 relative">
          <img
            src="https://media.istockphoto.com/id/1267593738/photo/successful-partnership.webp?a=1&b=1&s=612x612&w=0&k=20&c=YUdv6uSEqy8acwLNp1aZ_40_VdEqFa9OPCxyvXDMYXs="
            alt="Login"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 text-center">
            <h2 className="text-3xl font-bold">GetStarted</h2>
            <p className="mt-2">
              Join us today and start exploring new career and educational opportunities.
            </p>
            <Link to="/signup" className="mt-6 px-6 py-2 bg-white text-purple-600 rounded-md font-semibold hover:bg-gray-100">
              Register
            </Link>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-purple-600 mb-4">Login</h2>
          <form onSubmit={handleSubmit}  className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
            />
            {/* <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
            /> */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
            {/* Forgot Password Link */} 
            <div className="text-right">
              <Link to="/forgot-password" className="text-purple-600 hover:underline">Forgot Password?</Link>
            </div>
            <button type='submit' className="w-full px-4 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

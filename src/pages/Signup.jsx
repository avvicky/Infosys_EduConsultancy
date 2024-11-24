
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'Student',
  });
  const [err, setErr] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Function to validate the pattern of password
  const validatePassword = () => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(inputs.password)) {
      alert('Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.');
      return false;
    }
    if (inputs.password !== inputs.confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    return true;
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      setShowPopup(true); // Show popup on successful submission
      console.log(inputs);
      console.log('Form submitted successfully');
    } else {
      console.log('Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side - Signup Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-purple-600 mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
           
           {/* Role Dropdown */}
           <select
              name="role"
              value={inputs.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="Seller">Seller</option>
            </select>

            {/* Password Input with Pattern Validation */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={inputs.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700">
              Register
            </button>
          </form>
        </div>

        {/* Right Side - Image and Welcome Text */}
        <div className="w-1/2 bg-purple-200 relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D"
            alt="Signup"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 text-center">
            <h2 className="text-3xl font-bold">Reconnect</h2>
            <p className="mt-2">
              Welcome back! Log in to continue your journey with us
            </p>
            <Link to="/login" className="mt-6 px-6 py-2 bg-white text-purple-600 rounded-md font-semibold hover:bg-gray-100">
              Login
            </Link>
          </div>
        </div>
      </div>

       {/* Success Popup */}
       {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-green-600">Success!</h3>
            <p className="mt-4">Your account has been created successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaFlag, FaLock } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    password: "",
    confirm_password: "",
  });

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-[45%] h-[30%] md:h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex flex-col justify-center items-center p-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Hello, Friend!</h1>
        <p className="text-center max-w-[80%] mb-6 text-sm md:text-base leading-relaxed">
          Enter your personal details and start your journey with us
        </p>
        <button
          onClick={handleNavigate}
          className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition"
        >
          Sign In
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[55%] h-[70%] md:h-full bg-white flex flex-col justify-center items-center p-6">
        <h2 className="text-2xl md:text-3xl text-blue-600 font-bold mb-6">Create Account</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          {/* Input Field Template */}
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
            <FaFlag className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

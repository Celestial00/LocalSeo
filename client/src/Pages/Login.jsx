import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleNavigate = () => {
    navigate("/register");
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
    navigate("/tools/home");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Panel */}
      <div className="w-full md:w-[45%] h-[30%] md:h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex flex-col justify-center items-center p-8">
        <h1 className="text-white font-bold text-3xl md:text-4xl text-center mb-4">
          Welcome Back!
        </h1>
        <p className="text-white text-opacity-90 text-center mb-6 max-w-[80%] text-sm md:text-base leading-relaxed">
          To keep connected with us please login with your personal info
        </p>
        <button
          onClick={handleNavigate}
          className="border border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition"
        >
          Sign Up
        </button>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[55%] h-[70%] md:h-full bg-white flex flex-col justify-center items-center p-8">
        <h2 className="text-blue-600 font-bold text-2xl md:text-3xl mb-6">
          Sign In to Your Account
        </h2>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-6"
        >
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-blue-500">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-blue-500">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold text-lg transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

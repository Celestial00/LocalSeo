import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginImg from "../Assets/images/Log_img.png";
import axios from "axios";
import cookieHolder from "../Controllers/Auth.Controller";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      toast.warn("All fields must be filled");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email: formData.email,
        password: formData.password,
      });

      if (res.status === 200 || res.status === 201) {
        cookieHolder(res);
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;

        if (status === 404) {
          toast.error("User not found.");
        } else if (status === 401) {
          toast.error("Invalid email or password.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }

        console.error("Server responded with error:", error.response.data);
      } else {
        toast.error("Unable to reach the server.");
        console.error("Unexpected error:", error.message);
      }
    }
  };

  return (
    <>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastClassName="bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg"
        bodyClassName="text-sm"
        progressClassName="bg-white"
      />
      <div
        className="flex flex-col md:flex-row h-screen w-full"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Left Panel */}
        <div className="w-full md:w-[45%] h-[30%] md:h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex flex-col justify-center items-center p-8">
          <h1 className="text-white font-bold text-3xl md:text-4xl text-center mb-6">
            Welcome Back!
          </h1>

          <img
            src={LoginImg}
            alt="Welcome Visual"
            className="w-44 sm:w-32 md:w-48 lg:w-64 xl:w-130 rounded-lg"
          />
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-[55%] h-[70%] md:h-full bg-white flex flex-col justify-center items-center p-8">
          <h2 className="text-blue-600 font-bold text-2xl md:text-3xl mb-6">
            Sign In to Your Account
          </h2>

          <div className="w-full max-w-md flex flex-col gap-6">
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

      {/* Password Field */}
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-blue-500">
          <FaLock />
        </span>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition"
        />
        <span
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
            <button
              onClick={handleSubmit}
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold text-lg transition"
            >
              Sign In
            </button>

            <button
              onClick={handleNavigate}
              className="w-full cursor-pointer bg-white border border-gray-300 text-black py-3 rounded-md font-semibold text-lg transition duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400 hover:text-amber-50"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaFlag, FaLock } from "react-icons/fa";
import Select from "react-select";
import { getNames } from "country-list";
import RegisterImg from "../Assets/images/Somewhere_img.png";
import axios from "axios";

const countryOptions = getNames().map((country) => ({
  value: country,
  label: country,
}));

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    country: "",
    password: "",
    confirm_password: "",
  });

  const handleNavigate = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      country: selectedOption.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/users/register", {
      username: formData.username,
      email: formData.email,
      country: formData.country,
      password: formData.password,
    });

  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row [font-family:'Poppins',sans-serif]">
      {/* Left Panel */}
      <div className="w-full md:w-[45%] h-[30%] md:h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex justify-center items-center p-6">
        <img
          src={RegisterImg}
          alt="Welcome"
          className="w-90 md:w-96 lg:w-[500px] xl:w-[700px] object-contain"
        />
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-[55%] h-[70%] md:h-full bg-white flex flex-col justify-center items-center p-6">
        <h2 className="text-2xl md:text-3xl text-blue-600 font-bold mb-6">
          Create Account
        </h2>
        <div className="w-full max-w-md flex flex-col gap-4">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md focus:ring-blue-400 ">
            <FaFlag className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500 z-10" />
            <div className="pl-10">
              <Select
                cl
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    border: "none", // Remove border
                    boxShadow: "none", // Remove box shadow on focus
                    "&:hover": {
                      border: "none", // Ensure no border on hover
                    },
                  }),
                }}
                options={countryOptions}
                value={countryOptions.find(
                  (option) => option.value === formData.country
                )}
                onChange={handleCountryChange}
                placeholder="Select Country"
              />
            </div>
          </div>

          <div className="relative ">
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-blue-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={handleNavigate}
            className="w-full cursor-pointer bg-white border border-gray-300 text-black py-3 rounded-md font-semibold text-lg transition duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-400 hover:text-amber-50"
          >
            Already have an Account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

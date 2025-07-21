import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../Assets/images/Log_img.png";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/google", {
        token: credentialResponse.credential,
      });

      if (res.data.success) {
        const userData = res.data.user;
        setUser(userData);

        Cookies.set("user", JSON.stringify(userData), {
          expires: 7,
          secure: true,
          sameSite: "Strict",
        });

        navigate("/");
      } else {
        toast.error("Login failed");
      }
    } catch (err) {
      toast.error("Error during login");
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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

        {/* Right Panel with only Google Login */}
        <div className="w-full md:w-[55%] h-[70%] md:h-full bg-white flex flex-col justify-center items-center p-8">
          <h2 className="text-blue-600 font-bold text-2xl md:text-3xl mb-6">
            Sign In with Google
          </h2>

          <div>
            {user ? (
              <div className="text-center">
                <h2 className="text-lg font-semibold">Welcome, {user.name}</h2>
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mt-2"
                />
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => toast.error("Google Login Failed")}
                  useOneTap
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

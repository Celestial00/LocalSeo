import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../Assets/images/Log_img.png";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [user, setUser] = useState(null);

  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=http://localhost:5173/OauthCall&response_type=code&scope=https://www.googleapis.com/auth/business.manage openid email profile&access_type=offline&prompt=consent`;

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
                <button
                  className=" border border-stone-300 rounded-2xl p-3 px-10 flex justify-between gap-5 items-center cursor-pointer  "
                  onClick={() => (window.location.href = GOOGLE_AUTH_URL)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Login with Google
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import axios from "axios";
import RegisterImg from "../Assets/images/Somewhere_img.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post("http://localhost:5000/auth/google", {
          token: tokenResponse.id_token,
        });

        if (res.data.success) {
          setUser(res.data.user);
          Cookies.set("user", JSON.stringify(res.data.user), { expires: 7 });
          toast.success("Login Successful");
          navigate("/");
        }
      } catch (err) {
        console.error(err);
        toast.error("Google login failed");
      }
    },
    onError: () => toast.error("Google login error"),
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
        toastClassName="bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-semibold rounded-lg shadow-lg"
        bodyClassName="text-sm"
        progressClassName="bg-white"
      />

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

          <div className="w-full max-w-md flex justify-center">
            <button
              onClick={() => login()}
              className="flex items-center gap-3 bg-white border px-4 py-2 rounded-lg shadow hover:shadow-md transition-all"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="font-medium text-sm">Sign up with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

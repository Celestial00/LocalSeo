import { useState } from "react";
import PurchaseImg from "../Assets/images/Somewhere_img.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Purchase = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment Successful ✅");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
        toastClassName="bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-semibold rounded-lg"
        bodyClassName="text-sm"
        progressClassName="bg-white"
      />

      <div className="w-full h-screen flex flex-col md:flex-row [font-family:'Poppins',sans-serif]">
        {/* Left Image Panel */}
        <div className="w-full md:w-[45%] h-[30%] md:h-full bg-gradient-to-br from-cyan-400 to-blue-600 flex justify-center items-center p-6">
          <img
            src={PurchaseImg}
            alt="Purchase Visual"
            className="w-90 md:w-96 lg:w-[500px] xl:w-[700px] object-contain"
          />
        </div>

        {/* Right Form Panel */}
        <div className="w-full md:w-[55%] h-[70%] md:h-full bg-white flex flex-col justify-center items-center p-6">
          <h2 className="text-2xl md:text-3xl text-blue-600 font-bold mb-6">
            Complete Your Purchase
          </h2>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-4"
            autoComplete="off"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Credit Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                required
                maxLength="19"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  required
                  value={formData.expiry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="password"
                  name="cvv"
                  maxLength="4"
                  required
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Purchase;

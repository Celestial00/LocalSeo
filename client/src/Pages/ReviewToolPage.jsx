import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Install with: npm install react-icons
import { getTool, AllTools } from "../Controllers/Freemium.tools.Controller";

const ReviewPage = () => {
  const [input, setInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendForReview = async () => {
    if (!input.trim()) return;

    setIsLoading(true);
    setApiResponse("");

    try {
      const data = await getTool("Review Reply", input);
      setApiResponse(data);
    } catch (error) {
      console.error("❌ API Error:", error);
      setApiResponse("❌ Error contacting the AI service.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen font-[Poppins] text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">
          Submit for Custom AI Post Generator OR For Reviewing Reply Templates
        </h1>

        {/* Output or Loader */}
        <div className="min-h-[120px] mb-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-green-600 mb-2">
            AI Review: Hi How Can I help ?
          </h2>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="loader border-4 border-blue-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin">
                {" "}
              </div>
            </div>
          ) : (
            <p className="text-[20px] text-gray-700 whitespace-pre-wrap">
              {apiResponse}
            </p>
          )}
        </div>

        {/* Input and Button */}
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            className="w-full p-4 pr-14 text-sm border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow"
            placeholder="Paste your application or message here..."
          ></textarea>
          <button
            onClick={sendForReview}
            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

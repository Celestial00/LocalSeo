import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const TextSubmitPage = () => {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");
  const [typedResponse, setTypedResponse] = useState("");

  useEffect(() => {
    let i = 0;
    setTypedResponse("");
    if (response) {
      const interval = setInterval(() => {
        setTypedResponse((prev) => prev + response[i]);
        i++;
        if (i >= response.length) clearInterval(interval);
      }, 25);
      return () => clearInterval(interval);
    }
  }, [response]);

  const handleSubmit = () => {
    // Simulate a response here
    setTypedResponse(""); // Clear previous effect
    setResponse(`Thanks for your input! Here's what we think: "${inputText}"`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-10 text-gray-800 [font-family:'Poppins',sans-serif]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-8">
          Share Your Thoughts
        </h1>

        {/* Input area */}
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <textarea
            className="w-full h-40 p-4 bg-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            placeholder="Write your message here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md shadow-md transition"
          >
            <FiArrowRight size={24} />
          </button>
        </div>

        {/* Typewriter response */}
        {typedResponse && (
          <div className="mt-8 text-lg md:text-xl text-gray-700 border-t pt-6 min-h-[60px]">
            {typedResponse}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSubmitPage;

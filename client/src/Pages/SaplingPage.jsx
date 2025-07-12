import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getTool } from "../Controllers/Freemium.tools.Controller";

const SaplingPage = () => {
  const [query, setQuery] = useState("");
  const [rewritten, setRewritten] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRewrite = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setRewritten("");
    setError("");

    try {
      const result = await getTool("Sapling AI Rewrite", query);

      if (typeof result === "string") {
        setRewritten(result); // Assuming API returns rewritten text as a string
      } else {
        setError("Unexpected response from Sapling.");
      }
    } catch (err) {
      console.error("❌ Sapling Error:", err);
      setError("❌ Failed to rewrite the text.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-purple-50 min-h-screen font-[Poppins] text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-purple-700 mb-4 text-center">
          AI to Human Text Rewriter
        </h1>

        {/* Rewritten output */}
        <div className="min-h-[120px] mb-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-purple-600 mb-2">
            Rewritten Output:
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="loader border-4 border-purple-200 border-t-purple-600 rounded-full w-8 h-8 animate-spin" />
            </div>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : rewritten ? (
            <p className="text-gray-700 whitespace-pre-wrap">{rewritten}</p>
          ) : (
            <p className="text-gray-600">No rewritten text yet. Try submitting.</p>
          )}
        </div>

        {/* Input + Button */}
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={6}
            className="w-full p-4 pr-14 text-sm border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white shadow"
            placeholder="Paste AI-generated text to rewrite..."
          ></textarea>
          <button
            onClick={handleRewrite}
            className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Rewrite"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaplingPage;

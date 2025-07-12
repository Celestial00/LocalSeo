import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getTool } from "../Controllers/Freemium.tools.Controller";

const SerpPage = () => {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]); // rename from results to keywords
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setKeywords([]);
    setError("");

    try {
      const data = await getTool("Google Search", query);
      if (typeof data === "string") {
        setError(data);
      } else {
        setKeywords(data); // expecting array of strings (keywords)
      }
    } catch (err) {
      console.error("❌ SERP Error:", err);
      setError("❌ Failed to fetch keyword suggestions.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen font-[Poppins] text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
          Google Keyword Suggestions
        </h1>

        {/* Keywords list */}
        <div className="min-h-[120px] mb-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-green-600 mb-2">
            Keyword Suggestions:
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="loader border-4 border-blue-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin" />
            </div>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : keywords.length === 0 ? (
            <p className="text-gray-600">
              No keyword suggestions yet. Try searching.
            </p>
          ) : (
            <ul className="list-disc list-inside space-y-2 text-blue-700 font-medium">
              {keywords.map((keyword, index) => (
                <li key={index}>{keyword}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Input + Button */}
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={6}
            className="w-full p-4 pr-14 text-sm border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow"
            placeholder="Type a product or issue and we will suggest top 10 keywords"
          ></textarea>
          <button
            onClick={handleSearch}
            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Search"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SerpPage;

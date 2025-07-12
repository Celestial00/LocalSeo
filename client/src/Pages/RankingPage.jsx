import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getTool } from "../Controllers/Freemium.tools.Controller";

const RankingPage = () => {
  const [query, setQuery] = useState("");
  const [rankingResult, setRankingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckRanking = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setRankingResult(null);
    setError("");

    try {
      const data = await getTool("Google Domain Ranking", query);

      if (typeof data === "string") {
        setError(data);
      } else {
        setRankingResult(data);
      }
    } catch (err) {
      console.error("❌ Ranking Error:", err);
      setError("❌ Failed to fetch ranking.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen font-[Poppins] text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
          Google Live Domain Ranking
        </h1>

        {/* Result box */}
        <div className="min-h-[120px] mb-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-green-600 mb-2">
            Domain Ranking:
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="loader border-4 border-blue-200 border-t-blue-600 rounded-full w-8 h-8 animate-spin" />
            </div>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : rankingResult ? (
            <div className="space-y-2 text-blue-700 font-medium">
              <p>🔍 Keyword: <strong>{rankingResult.keyword}</strong></p>
              <p>🌐 Domain: <strong>{rankingResult.domain}</strong></p>
              <p>📈 Rank: <strong>{rankingResult.rank}</strong></p>
            </div>
          ) : (
            <p className="text-gray-600">
              No ranking data yet. Try searching.
            </p>
          )}
        </div>

        {/* Input + Button */}
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={4}
            className="w-full p-4 pr-14 text-sm border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow"
            placeholder="Type a keyword to check if google.com ranks for it..."
          ></textarea>
          <button
            onClick={handleCheckRanking}
            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
            aria-label="Check Rank"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankingPage;

const fetch = require('node-fetch');

const SerpSuggestionTool = async (req, res) => {
  const { q } = req.query;

  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(q)}&api_key=1143a6bc9b9e7071e11dbb9d3fee07294ae6368bf99a409a34fec3f0895c833d&engine=google_autocomplete`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const suggestions = data.suggestions?.map(item => item.value) || [];

    res.json(suggestions);
  } catch (err) {
    console.error("❌ SerpAPI Error:", err.message);
    res.status(500).json({ error: "Failed to fetch from SerpAPI." });
  }
};



const SerpRankingTool = async (req, res) => {
  const { q, domain } = req.query;

  if (!q || !domain) {
    return res.status(400).json({ error: "Missing required query parameters: q and domain." });
  }

  const apiKey = "1143a6bc9b9e7071e11dbb9d3fee07294ae6368bf99a409a34fec3f0895c833d";

  const url = `https://serpapi.com/search.json?q=${encodeURIComponent(q)}&api_key=${apiKey}&engine=google&num=100`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const results = data.organic_results || [];

    const matchIndex = results.findIndex(result => result.link.includes(domain));

    const position = matchIndex >= 0 ? matchIndex + 1 : "Not in top 100";

    res.json({
      keyword: q,
      domain: domain,
      rank: position,
    });
  } catch (err) {
    console.error("❌ SerpAPI Error:", err.message);
    res.status(500).json({ error: "Failed to fetch ranking from SerpAPI." });
  }
};



module.exports = { SerpSuggestionTool, SerpRankingTool };

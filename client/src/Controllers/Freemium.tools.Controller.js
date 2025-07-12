export const AllTools = {
  AiPostGenerator: {
    name: "AI Post Generator",
    run: () => {
      // This is a placeholder
      return "📝 AI Post Generator not yet implemented.";
    },
  },

  ReviewReply: {
    name: "Review Reply",
    run: async (input) => {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_REVIEW_API}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: input,
            },
          ],
        }),
      });

      const data = await res.json();

      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        throw new Error("API Error: " + JSON.stringify(data));
      }
    },
  },

  GoogleSearch: {
    name: "Google Search",
    run: async (query) => {
      const url = `http://localhost:5000/api/tools/serp-suggestion?q=${encodeURIComponent(
        query
      )}`;

      const res = await fetch(url);
      const data = await res.json();

      console.log(data);

      if (data.length > 0) {
        return data;
      } else {
        return "No keyword suggestions found.";
      }
    },
  },

  GoogleRankingCheck: {
    name: "Google Domain Ranking",
    run: async (query) => {
      const url = `http://localhost:5000/api/tools/serp-ranking?q=${encodeURIComponent(
        query
      )}&domain=google.com`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);

        if (data.rank !== undefined) {
          return `🔍 Keyword: "${data.keyword}"\n🌐 Domain: ${data.domain}\n📈 Google Rank: ${data.rank}`;
        } else if (data.error) {
          return `❌ ${data.error}`;
        } else {
          return "No ranking data found.";
        }
      } catch (error) {
        console.error("Ranking fetch error:", error);
        return "Failed to fetch Google ranking.";
      }
    },
  },

  SaplingRewrite: {
    name: "Sapling AI Rewrite",
    run: async (text) => {
      const saplingApiKey = "ZQUQ3RFP0A5FAJTOWW050OXBC282A9B7"; // your actual key
      const url = "https://api.sapling.ai/api/v1/rephrase";

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${saplingApiKey}`, // ✅ Correct: use variable in template string
          },
          body: JSON.stringify({
            text,
            key: saplingApiKey, // ✅ Correct: use variable, not bare string
            session_id: "rewrite-session-001", // optional
          }),
        });

        if (!res.ok) {
          throw new Error(`Sapling API error: ${res.status}`);
        }

        const data = await res.json();

        console.log(data);

        if (data.results && data.results.length > 0) {
          return data.results[0].replacement;
        } else {
          return "No rewritten text found.";
        }
      } catch (error) {
        console.error("Sapling API error:", error);
        return "Failed to rewrite text.";
      }
    },
  },
};

// Run tool by name
export const getTool = async (toolName, input) => {
  const tool = Object.values(AllTools).find((t) => t.name === toolName);

  if (!tool) {
    console.log("❌ Tool not found");
    return;
  }

  const output = await tool.run(input);
  return output;
};

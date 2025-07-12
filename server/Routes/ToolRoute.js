const express = require("express");
const router = express.Router();
const {
  SerpSuggestionTool,
  SerpRankingTool,
} = require("../Controllers/ToolsController");

// Define route
router.get("/serp-suggestion", SerpSuggestionTool);
router.get("/serp-ranking", SerpRankingTool);

// Export the router properly
module.exports = router;

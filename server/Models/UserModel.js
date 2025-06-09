const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  plan: { type: String, default: "free" },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  Date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);

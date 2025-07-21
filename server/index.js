const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const toolRoutes = require("./Routes/ToolRoute");
const logger = require("./Middleware/logger");
const ApiLimiter = require("./Middleware/ApiLimiter");
require("dotenv").config();
const cors = require("cors");
const app = express();
connectDB();
const Oauth = require("./Models/OauthSchema");
const axios = require("axios");

//middleware
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(ApiLimiter);

//Routes
app.use("/api/users", userRoutes);
app.use("/api/tools", toolRoutes);

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.post("/auth/google", async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { name, email, picture } = ticket.getPayload();

    let user = await Oauth.findOne({ email });
    if (!user) {
      user = await Oauth.create({ name, email, picture });
    }

    res.json({ success: true, user });
    
  } catch (err) {
    console.error(err);
    res.status(401).json({ success: false, error: "Invalid token" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);

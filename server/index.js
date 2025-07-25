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
  const { code } = req.body;
  try {
    const tokenRes = await axios.post(
      "https://oauth2.googleapis.com/token",
      null,
      {
        params: {
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          code,
          grant_type: "authorization_code",
          redirect_uri: "http://localhost:5173/OauthCall",
        },
      }
    );

    const { access_token, refresh_token, id_token } = tokenRes.data;

    const userInfo = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );

    res.json({
      access_token,

      profile: userInfo.data,
    });
  } catch (err) {
    console.error("Token exchange failed:", err.response?.data || err.message);
    res.status(400).json({ error: "OAuth exchange failed" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);

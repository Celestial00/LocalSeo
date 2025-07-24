// verifyTokenMiddleware.js
import axios from "axios";

export async function verifyGoogleToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    // Optionally validate token here
    const result = await axios.get("https://www.googleapis.com/oauth2/v3/tokeninfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    req.user = result.data; // attach user info
    return next();
  } catch (err) {
    // Token expired? Try to refresh
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) return res.status(401).json({ error: "Unauthorized" });

    try {
      const { data } = await axios.post("https://oauth2.googleapis.com/token", {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      });

      // Send new access token
      res.locals.new_access_token = data.access_token;
      req.headers.authorization = `Bearer ${data.access_token}`;
      return next();
    } catch (refreshErr) {
      return res.status(401).json({ error: "Refresh failed" });
    }
  }
}

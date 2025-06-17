const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const logger = require("./Middleware/logger");
const ApiLimiter = require("./Middleware/ApiLimiter");
require("dotenv").config();
const cors = require("cors");
const app = express();
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(ApiLimiter);

//Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);

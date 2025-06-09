const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
require("dotenv").config();
const cors = require("cors");
const app = express();
connectDB();

//middleware

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

//Routes



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

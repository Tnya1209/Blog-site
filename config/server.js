require("dotenv").config();

console.log("🔑 JWT_SECRET from .env:", process.env.JWT_SECRET);
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes.js");
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
// Middleware
app.use(express.json());
app.use(bodyParser.json()); // Ensure JSON parsing
app.use(bodyParser.urlencoded({ extended: true }));
// Connect Database
connectDB();
app.post("/test", (req, res) => {
    console.log("Received:", req.body);
    res.status(200).json({ message: "Postman working!" });
});

// Routes
app.use("/api/blogs", require("./routes/blogRoutes"));
//app.use("/api/auth", require("./routes/authRoutes.js"));
app.use("/api/auth", authRoutes);
// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const express = require("express");
const { signup, login } = require("../controllers/authController.js");

const router = express.Router();

console.log("✅ authRoutes.js loaded");

router.post("/signup",signup);
router.post("/login", login);

module.exports = router;

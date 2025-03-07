const express = require("express");
const { createBlog, publishBlog, getPublishedBlogs, getAllBlogs, deleteBlog } = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBlog); // Create new blog (Draft)
router.put("/publish/:id", authMiddleware, publishBlog); // Publish a blog
router.get("/", getPublishedBlogs); // Get published blogs (User View)
router.get("/admin", authMiddleware, getAllBlogs); // Get all blogs (Admin View)
router.delete("/:id", authMiddleware, deleteBlog); // Delete a blog

module.exports = router;

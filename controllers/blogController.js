const Blog = require("../models/Blog");

// Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newBlog = new Blog({ title, description });
    await newBlog.save();
    res.status(201).json({ message: "Blog saved as draft", blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Publish a blog
exports.publishBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.isPublished = true;
    await blog.save();
    res.status(200).json({ message: "Blog published successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all published blogs (For Users)
exports.getPublishedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all blogs (For Admin)
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

const Blog = require("../models/blog")
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", {
        title: "All Blogs",
        blogs: result,
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const blog_details = (req, res) => {
  const id = req.params.id
  console.log("getting details for blog with id: ", id)
  Blog.findById(id)
    .then((result) => {
      res.render("details", { title: result.title, blog: result })
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" })
    })
}

const blog_create_get = (req, res) => {
  res.render("create", { title: "New" })
}

const blog_create_post = (req, res) => {
  // Check if body is valid
  if (
    req.body.title === "" ||
    req.body.snippet === "" ||
    req.body.body === ""
  ) {
    return res.status(400).json({ error: "All fields are required" })
  }
  const blog = new Blog(req.body)
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs")
    })
    .catch((err) => {
      console.log(err)
    })
}

const blog_edit_get = (req, res) => {
  const id = req.params.id

  Blog.findById(id)
    .then((result) => {
      res.render("edit", { title: "Edit", blog: result })
    })
    .catch((err) => {
      console.log(err)
    })
}
const blog_edit_put = (req, res) => {
  const id = req.params.id
  // Check if body is valid
  if (
    req.body.title === "" ||
    req.body.snippet === "" ||
    req.body.body === ""
  ) {
    return res.status(400).json({ error: "All fields are required" })
  }
  Blog.findByIdAndUpdate(id, req.body)
    .then((result) => {
      res.redirect("/blogs/" + id)
    })
    .catch((err) => {
      console.log(err)
    })
}

const blog_delete = (req, res) => {
  const id = req.params.id

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" })
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
  blog_edit_get,
  blog_edit_put,
}

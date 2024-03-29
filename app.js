const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const blogRoutes = require("./routes/blogRoutes")
const methodOverride = require("method-override")

const app = express()
require("dotenv").config()

// connect to MongoDB
const dbURI = process.env.DB_URI
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000)) // only listen for requests if we have connected to the database
  .catch((err) => console.log(err))

// register view engine
app.set("view engine", "ejs")
// app.set("views", "myviews") // change the default views folder

// Middleware & Static files
app.use(express.static("public")) // serve static files
app.use(morgan("dev")) // log requests to the console
app.use(express.urlencoded({ extended: true })) // parse form data
app.use(methodOverride("_method"))

// Express looks through this code from top to bottom for matches
app.get("/", (req, res) => {
  res.redirect("/blogs")
})

// Blog routes
app.use("/blogs", blogRoutes)

app.get("/about", (req, res) => {
  res.render("about", { title: "About" })
})

// Redirect to /about
app.get("/about-me", (req, res) => {
  res.redirect("/about")
})

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" })
})

const express = require("express")
const blogController = require("../controllers/blogController")
const router = express.Router()

router.get("/", blogController.blog_index)
router.post("/", blogController.blog_create_post)
router.get("/new", blogController.blog_create_get)
router.put("/:id", blogController.blog_edit_put)
router.get("/:id", blogController.blog_details)
router.get("/:id/edit", blogController.blog_edit_get)
router.delete("/:id", blogController.blog_delete)

module.exports = router

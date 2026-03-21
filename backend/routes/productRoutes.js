const express = require("express")
const router = express.Router()
const {
  createProduct,
  getProducts,
  getProductById,
  getProductFilters
} = require("../controllers/productController")

router.post("/", createProduct)
router.get("/", getProducts)
router.get("/filters", getProductFilters)
router.get("/:id", getProductById)

module.exports = router
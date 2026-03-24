const Product = require("../models/Product")
const mongoose = require("mongoose")

const requireDbConnection = (res) => {
  if (mongoose.connection.readyState !== 1) {
    res.status(503).json({ message: "Database unavailable", error: "MongoDB not connected" })
    return false
  }
  return true
}

exports.createProduct = async (req, res) => {
  try {
    if (!requireDbConnection(res)) return
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    res.status(503).json({ message: "Database unavailable", error: err.message })
  }
}

exports.getProducts = async (req, res) => {
  try {
    if (!requireDbConnection(res)) return
    const query = {}

    if (req.query.category) {
      query.categoryId = req.query.category
    }

    Object.keys(req.query).forEach(key => {
      if (key !== "category") {
        const values = String(req.query[key])
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean)

        query[`attributes.${key}`] = values.length > 1 ? { $in: values } : values[0]
      }
    })

    const products = await Product.find(query)
    res.json(products)
  } catch (err) {
    res.status(503).json({ message: "Database unavailable", error: err.message })
  }
}

exports.getProductFilters = async (req, res) => {
  try {
    if (!requireDbConnection(res)) return
    const query = req.query.category ? { categoryId: req.query.category } : {}
    const products = await Product.find(query)

    const filterMap = {}

    products.forEach((product) => {
      Object.entries(product.attributes || {}).forEach(([key, value]) => {
        if (!filterMap[key]) {
          filterMap[key] = new Set()
        }
        filterMap[key].add(String(value))
      })
    })

    const response = Object.fromEntries(
      Object.entries(filterMap).map(([key, valueSet]) => [key, Array.from(valueSet)])
    )

    res.json(response)
  } catch (error) {
    res.status(503).json({ message: "Database unavailable", error: error.message })
  }
}

exports.getProductById = async (req, res) => {
  try {
    if (!requireDbConnection(res)) return
    const product = await Product.findById(req.params.id).populate("categoryId", "name")

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.json(product)
  } catch (error) {
    res.status(503).json({ message: "Database unavailable", error: error.message })
  }
}
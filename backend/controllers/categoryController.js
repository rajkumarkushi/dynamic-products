const Category = require("../models/Category")
const mongoose = require("mongoose")

const requireDbConnection = (res) => {
  // readyState: 0=disconnected, 1=connected, 2=connecting, 3=disconnecting
  if (mongoose.connection.readyState !== 1) {
    res.status(503).json({ message: "Database unavailable", error: "MongoDB not connected" })
    return false
  }
  return true
}

exports.createCategory = async (req, res) => {
  try {
    if (!requireDbConnection(res)) return
    const category = await Category.create(req.body)
    res.json(category)
  } catch (err) {
    res.status(503).json({ message: "Database unavailable", error: err.message })
  }
}

exports.getCategories = async (req, res) => {
  try {
    if (!requireDbConnection(res)) return
    const categories = await Category.find()
    res.json(categories)
  } catch (err) {
    res.status(503).json({ message: "Database unavailable", error: err.message })
  }
}

exports.getCategoryById = async (req, res) => {
  try {
    if (!requireDbConnection(res)) return
    const category = await Category.findById(req.params.id)
    res.json(category)
  } catch (err) {
    res.status(503).json({ message: "Database unavailable", error: err.message })
  }
}
const mongoose = require("mongoose")

const attributeSchema = new mongoose.Schema({
  name: String,
  type: String, // text | select
  options: [String]
})

const categorySchema = new mongoose.Schema({
  name: String,
  attributes: [attributeSchema]
})

module.exports = mongoose.model("Category", categorySchema)
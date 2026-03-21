const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  attributes: Object
})

module.exports = mongoose.model("Product", productSchema)
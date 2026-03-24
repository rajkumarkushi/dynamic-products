require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/categories", require("./routes/categoryRoutes"))
app.use("/api/products", require("./routes/productRoutes"))

connectDB()
  .then(() => {
    console.log("MongoDB connected")
  })
  .catch((err) => {
    console.error("Server not started due to DB connection failure:", err.message || err)
  })

// Always start the server so the frontend can receive HTTP responses even if Mongo is unavailable.
app.listen(5000, () => console.log("Server running on 5000"))
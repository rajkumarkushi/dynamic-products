require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/categories", require("./routes/categoryRoutes"))
app.use("/api/products", require("./routes/productRoutes"))

app.listen(5000, () => console.log("Server running on 5000"))
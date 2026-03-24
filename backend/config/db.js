const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    console.log("✅ MongoDB Connected")
    console.log("DB:", mongoose.connection.name)

  } catch (err) {
    console.error("❌ Mongo Error:", err.message)
  }
}

module.exports = connectDB
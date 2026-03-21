const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    // console.log("Mongo Connected")
    // console.log("DB NAME:", mongoose.connection.name)
    // console.log("HOST:", mongoose.connection.host)
    // console.log("USER:", mongoose.connection.user)

  } catch (err) {
    console.error(err)
  }
}

module.exports = connectDB
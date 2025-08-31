// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/shopeq`);
  } catch (error) {
    console.log(error.message);
  }
};

// export default connectDB;
module.exports = connectDB;

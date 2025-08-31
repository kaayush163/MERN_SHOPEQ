const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth/auth-routes");
const connectDB = require("./configs/db.js");
require("dotenv").config();

connectDB();
// mongoose
//   .connect("db_url")
//   .then(() => console.log("MongoDB connected"))
//   .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

//  http://localhost:5173/. X
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));

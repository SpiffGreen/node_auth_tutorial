const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/node_auth";

function connectDB() {
  mongoose
    .connect(DB_URI)
    .then(() => console.log("Successfully connected to database!"))
    .catch((err) => {
        console.log(err.message)
        process.exit(); // Exit gracefully
    });
}

module.exports = connectDB;
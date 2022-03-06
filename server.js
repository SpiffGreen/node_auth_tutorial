const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const path = require("path");

// initialise database
require("./db")();

// Settings
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./routes"));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
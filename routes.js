const express = require("express");
const router = express.Router();

// Index route
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/logout", (req, res) => {
    res.redirect("/login");
})

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/admin", (req, res) => {
    res.render("admin");
});

router.get("*", (req, res) => {
    res.send("404 - Resource not Found");
});

router.post("/login", (req, res) => {});

router.post("/registration", (req, res) => {});

module.exports = router;
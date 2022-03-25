const express = require("express");
const router = express.Router();
const { User } = require("./models");
const { authenticate } = require("./util");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkldjfal";

// Index routenull
router.get("/", authenticate, (req, res) => {
    console.log(req.user);
    res.render("index");
});

router.get("/login", (req, res) => {
    res.render("login", { message: undefined });
});

router.get("/logout", (req, res) => {
    res.redirect("/login");
})

router.get("/register", (req, res) => {
    res.render("register", { message: undefined });
});

router.get("/admin", (req, res) => {
    res.render("admin");
});

router.get("*", (req, res) => {
    res.send("404 - Resource not Found");
});

router.post("/login", async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) return res.render("login", { message: "User doesn't exist" });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.render("login", { message: "Invalid Credential" });
        const payload = {
            user: {id: user.id, role: user.role}
        }
        const token = jwt.sign(payload, JWT_SECRET);
        console.log(token);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.render("login", { message: err.message });
    }
});

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if(user) {
            return res.render("register", { message: "User already exists" });
        }
        user = new User({
            name,
            email,
            password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        return res.render("register", { message: "Successfully created user"});
    } catch (err) {
        console.error(err);
        return res.status(500).render("register", { message: "Server Error"});
    }
});

module.exports = router;
const mongoose = require("mongoose");
const { constants } = require("./util");

const UserSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
        min: 3
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    role: {
        type: mongoose.Schema.Types.String,
        default: constants.BASIC_USER
    }
});

module.exports = {
    User: mongoose.model("user", UserSchema),
};
const jwt = require("jsonwebtoken");
const User = require("yavi/db/mongo/users");

module.exports = function (secret) {

    if (typeof secret !== "string" || !secret.length) secret = "yavi";

    return function (req, res, next) {
        if (req.cookie.token) {

        }
        next();
    }
}
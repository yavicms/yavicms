const users = require("./users");
const posts = require("./posts");

module.exports = function (app) {

    users(app);

    posts(app);
}
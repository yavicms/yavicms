const cookieParser = require('cookie-parser');
const jwt_login = require("./mw");

module.exports = function (app) {

    app.use(cookieParser());

    app.use("admin", jwt_login());
}

module.exports = function (app) {

    app.get("admin", function (req, res) {
        res.admin(req.User ? "main" : "login");
    });
}
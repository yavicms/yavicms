
module.exports = function (app) {

    app.get("admin", function (req, res) {
        // if (req.User) res.admin("main");
        // else res.admin("login");

        return res.admin("main");
    });
}

module.exports = function (app) {

    app.content("get.home.", function (req, res) {
        return app.view("home", req);
    });
}
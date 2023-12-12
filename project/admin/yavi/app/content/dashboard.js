
module.exports = function (app) {

    app.content("get.admin.", function (req) {

        return app.view("home", req);
    });
}
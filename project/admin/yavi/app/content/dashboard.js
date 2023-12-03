
module.exports = function (app) {

    app.content("admin:content:", function (req) {

        return app.view("page.home", req);
    });
}
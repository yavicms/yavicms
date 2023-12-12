module.exports = function (app) {

    app.content("get.admin.post-new", function (req) {
        return app.view("post-new", req);
    });
}
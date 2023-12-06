module.exports = function (app) {

    app.content("admin:content:post-new", function (req) {
        return app.view("page.post-new", req);
    });
}
module.exports = function (app) {

    app.hook("admin.head", function (req) {
        return app.view("hook.head", req);
    });
    app.hook("admin.script", function (req) {
        return app.view("hook.script", req);
    });
}
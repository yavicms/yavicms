module.exports = function (app) {
    app.hook("admin:head", (req) => app.view("hook/head", req));
    app.hook("admin:footer", (req) => app.view("hook/footer", req));
}
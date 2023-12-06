module.exports = function (app) {
    app.hook("admin:head", (req) => app.view("hook.head", req));
    app.hook("admin:head:login", (req) => app.view("hook.head-login", req));

    app.hook("admin:footer", (req) => app.view("hook.footer", req));
    app.hook("admin:footer:login", (req) => app.view("hook.footer-login"));
}
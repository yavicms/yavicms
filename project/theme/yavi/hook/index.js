
module.exports = function (app) {

    app.hook("script.all", (req) => app.view("hook.script-all", req));
}
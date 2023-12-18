
module.exports = function (app) {

    var names = ["script", "account.script", "login.script"];

    app.hook(names, (req) => app.view("hook.script-all", req));
}
const hook = require("./hook");
const router = require("./router");

module.exports = function (app) {

    router(app);

    hook(app);
}
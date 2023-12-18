const hook = require("./app/hook");
const content = require("./app/content");
const menu = require("./app/menu");

module.exports = function (app) {

    /**
     * 
     */
    hook(app);

    /**
     * 
     */
    content(app);

    /**
     * 
     */
    menu(app);
}
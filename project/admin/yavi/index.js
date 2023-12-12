const hook = require("./app/hook");
const data = require("./app/data");
const content = require("./app/content");
const menu = require("./app/menu");

module.exports = function (app) {

    /**
     * 
     */
    data(app);

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
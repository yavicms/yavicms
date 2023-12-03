const Hook = require("./app/hook");
const Data = require("./app/data");
const Content = require("./app/content");
const Menu = require("./app/menu");

const router = require('./app/router');

module.exports = function (app) {

    router(app);

    /**
     * 
     */
    Data(app);

    /**
     * 
     */
    Hook(app);
    Content(app);

    Menu(app);

}
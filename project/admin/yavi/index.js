
module.exports = function (app) {

    const Hook = require("./app/hook");
    const Data = require("./app/data");
    const Content = require("./app/content");
    const Menu = require("./app/menu");

    const CheckLogin = require("./app/mw/check-login");
    const MethodGet = require("./app/mw/get");
    const MethodPost = require("./app/mw/post");

    const SocketRouter = require("./app/mw/socket");

    /**
     * Phải login trước khi vào trang admin
     */
    // CheckLogin(app);

    /**
     *  
     */
    MethodGet(app);

    /**
     * 
     */
    // MethodPost(app);

    /**
     * Socket Router
     */
    SocketRouter(app);

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
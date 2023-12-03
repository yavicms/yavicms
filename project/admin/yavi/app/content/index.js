const sitebarMenu = require("./sitebar");
const dashboard = require('./dashboard');
const plugins = require('./plugins');
const users = require('./users');
const posts = require("./posts");
const comments = require("./comments");

// Tạo phần content cho viewfile: 
// /project/admin/name/main.html: 
// {{ content( "admin:content:" + page() ) }}

module.exports = function (app) {

    /**
     * Sitebar Menu
     */
    sitebarMenu(app);

    /**
     * Dashboard
     */
    dashboard(app);

    /**
     * Plugin/Theme/Admin
     */
    plugins(app);

    /**
     * Users
     */
    users(app);

    /**
     * Posts
     */
    posts(app);

    /**
     * Comments
     */
    comments(app);
}
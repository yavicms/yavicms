const Plugin = require("yavi");
const sidebar_link = __dirname + "/sidebar-link.json";

module.exports = function AdminData(app) {

    /**
     * Lấy danh sách các đường dẫn Link của sidebar
     */
    app.data("admin:sidebar:link", () => Plugin.json(sidebar_link));

};
const Plugin = require("yavi/plugin");

module.exports = function (app) {

    /**
     * req: http.request
     * res: socket
     * list: ["name1", "name2"]
     */
    app.socket("save-plugin-list", function (req, res, list) {

        Plugin.update_plugin_list(list);

        res.json();
    });

}
module.exports = function (app) {

    function controller(req) {
        return app.get_data("admin.themes", req)
            .then((list) => app.view("themes", req, { list }));
    };

    app.content("get.admin.themes", controller);
    app.content("get.admin.admins", controller);

    app.content("get.admin.plugins", function (req) {
        return app.get_data("admin.plugins", req)
            .then((plugin) => app.view("plugins", req, { plugin }));
    });
}
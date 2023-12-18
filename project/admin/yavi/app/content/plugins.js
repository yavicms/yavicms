module.exports = function (app) {

    function controller(req) {
        return app.get_data("admin.themes", req)
            .then((themes) => ({
                $title: req.params[0].toUpperCase(),
                $content: app.view("themes", req, { themes })
            }));
    };

    app.content("get.admin.themes", controller);
    app.content("get.admin.admins", controller);

    app.content("get.admin.plugins", function (req) {
        return app.get_data("admin.plugins", req)
            .then((plugins) => ({
                $title: "Plugins",
                $content: app.view("plugins", req, { plugins })
            }));
    });
}
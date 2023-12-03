module.exports = function (app) {

    function controller(req) {
        return app.get_data("admin:plugins:theme", req)
            .then((list) => app.view("page.theme", req, { list }))
            .catch((e) => app.view("error", req));
    };

    app.content("admin:content:theme", controller);
    app.content("admin:content:admin", controller);

    app.content("admin:content:plugin", function (req) {
        return app.get_data("admin:plugins:plugin", req)
            .then((plugin) => app.view("page.plugin", req, { plugin }))
            .catch(() => app.view("error", req));
    });
}
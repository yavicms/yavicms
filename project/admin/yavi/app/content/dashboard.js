
module.exports = function (app) {

    app.content("get.admin.", function (req) {
        return app.get_data("admin.dashboard", req)
            .then((dashboard) => ({
                $title: "Dashboard",
                $content: app.view("home", req, { dashboard })
            }));
    });
}
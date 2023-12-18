module.exports = function (app) {

    app.content("get.admin.post-new", function (req) {
        return app.get_data("admin.meta-post-new")
            .then((metas) => ({
                $title: "Viết bài mới",
                $content: app.view("post-new", req, { metas })
            }));
    });
}
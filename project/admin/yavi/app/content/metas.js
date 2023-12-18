
module.exports = function (app) {

    app.content("get.admin.meta-post", function (req) {

        return app.get_data("admin.meta-post", req)
            .then((metas) => ({
                $title: "Post Meta",
                $content: app.view("meta.post", req, metas)
            }));
    });

    app.content("get.admin.meta-new", function (req) {
        return {
            $title: "Tạo thẻ Meta",
            $content: app.view("meta.new", req)
        }
    });
}
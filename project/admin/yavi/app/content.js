const generateMenuHtml = require("./fn/menu-html");

module.exports = function (app) {

    // Tạo phần content cho view: /project/admin/name/main.html: 
    //                          {{ content("admin:page:" + page()) }}

    // sidebar
    app.content("admin:sidebar", function (req) {
        return app.view("hook.sidebar", req, {
            sidebar: generateMenuHtml(app.get_menu("admin:sidebar"))
        });
    });

    // posts/comments
    app.content("admin:page:new-post", (req) => app.view("page.new-post", req));
    app.content("admin:page:posts", (req) => app.view("page.posts", req));
    app.content("admin:page:comments", (req) => app.view("page.comments", req));

    // plugin/theme/admin
    app.content("admin:page:plugin", (req) => app.view("page.plugin", req));
    app.content("admin:page:theme", (req) => app.view("page.theme", req));
    app.content("admin:page:admin", (req) => app.view("page.theme", req));

}
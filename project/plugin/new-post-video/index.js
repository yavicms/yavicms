
module.exports = function (app) {

    app.menu("admin:sidebar", {
        parent: "posts",
        name: "add-video",
        title: "Add video",
        url: "/admin/add-video",
        icon: "&#x1F3AC;"
    });

    app.content("admin:page:add-video", (req) => app.view("main", req));
}
function generateMenuHtml(menuData) {
    let html = '<ul class="sidebar-folder">', css = "<style>";

    menuData.forEach(row => {
        html += `<li class="sidebar-li ${row.name}">
                    <a href="${row.url}" 
                        class="spa in-sidebar notifications" 
                        data-count="0" 
                        data-icon="${row.icon}">
                        ${row.title}
                    </a>`;

        if (row.children && row.children.length > 0) {
            html += generateMenuHtml(row.children);
        }

        html += '</li>';
        css += `.${row.name}>.sidebar .${row.name} > a{background-color: #fefefe;border-radius: 10px;}`;

        if (row.parent) css += `.${row.name}>.sidebar .${row.parent} > .sidebar-folder,.${row.name}>.sidebar .${row.name} > .sidebar-folder{display:block !important;}`;
    });

    html += `</ul>${css}</style>`;
    return html;
}

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
function sitebarMenu(menuData) {
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
            html += sitebarMenu(row.children);
        }

        html += '</li>';
        css += `.${row.name}>.sidebar .${row.name} > a{background-color: #fefefe;border-radius: 10px;}`;

        if (row.parent) css += `.${row.parent}>.sidebar .${row.parent} > .sidebar-folder,.${row.name}>.sidebar .${row.name} > .sidebar-folder{display:block !important;}`;
    });

    html += `</ul>${css}</style>`;
    return html;
}

module.exports = function (app) {

    app.data("admin.sidebar", (req) => app.view("hook.sidebar", req, {
        sidebar: sitebarMenu(app.get_menu("admin.sidebar"))
    }));
}
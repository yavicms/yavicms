
module.exports = function (app) {

    app.menu("admin.sidebar", [

        {
            "name": "home",
            "title": "Dashboard",
            "url": "/admin/",
            "icon": "📊"
        },

        {
            "name": "posts",
            "title": "Posts",
            "url": "/admin/posts",
            "icon": "📄"
        },
        {
            "parent": "posts",
            "name": "post-meta",
            "title": "Posts",
            "url": "/admin/post-meta",
            "icon": "📄"
        },

        {
            "name": "comments",
            "title": "Comments",
            "url": "/admin/comments",
            "icon": "💬"
        },

        {
            "name": "plugins",
            "title": "Plugins",
            "url": "/admin/plugins",
            "icon": "🧩"
        },

        {
            "name": "themes",
            "title": "Themes",
            "url": "/admin/themes",
            "icon": "🎨"
        },

        {
            "name": "admins",
            "title": "Admin",
            "url": "/admin/admins",
            "icon": "👑"
        },

        {
            "name": "users",
            "title": "Users",
            "url": "/admin/users",
            "icon": "👤"
        },

        {
            "name": "settings",
            "title": "Setting",
            "url": "/admin/settings",
            "icon": "🛠️"
        }
    ]);

};
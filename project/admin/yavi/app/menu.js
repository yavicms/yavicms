
module.exports = function (app) {

    app.menu("admin:sidebar", [

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
            "name": "comments",
            "title": "Comments",
            "url": "/admin/comments",
            "icon": "💬"
        },

        {
            "name": "plugins",
            "title": "Plugins",
            "url": "/admin/plugin",
            "icon": "🧩"
        },

        {
            "name": "theme",
            "title": "Theme",
            "url": "/admin/theme",
            "icon": "🎨"
        },

        {
            "name": "admin",
            "title": "Admin",
            "url": "/admin/admin",
            "icon": "👑"
        },

        {
            "name": "users",
            "title": "Users",
            "url": "/admin/users",
            "icon": "👤"
        },

        {
            "name": "setting",
            "title": "Setting",
            "url": "/admin/setting",
            "icon": "🛠️"
        }
    ]);

};
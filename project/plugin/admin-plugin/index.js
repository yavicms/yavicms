
module.exports = function (app) {

    app.hook("admin:new-post:main", function (req) {
        return "<div style='border: 1px solid black; padding: 10px; margin-top: 10px;'>Cai nay de test: hook('admin:new-post:main')</div>";
    });
}
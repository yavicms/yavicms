
module.exports = function (app) {

    // const Title = {
    //     login: "Đăng nhập",
    //     register: "Tạo tài khoản mới",
    //     verify: "Xác thực mật mã",
    //     forgot: "Quên mật khẩu"
    // };

    // function page(path) {
    //     return function (req) {
    //         return {
    //             $title: Title[path],
    //             $content: app.view(path, req)
    //         };
    //     }
    // };

    // const pages = [
    //     ["get.admin.login", "login"],
    //     ["get.account.login", "login"],
    //     ["get.account.register", "register"],
    //     ["get.account.forgot", "forgot"],
    //     ["get.account.verify", "verify"]
    // ];

    // pages.forEach((r) => app.content(r[0], page(r[1])));

    function content(req) {
        return {
            $content: app.view("error", req)
        };
    };

    app.data("error.admin.login", content);
    app.data("error.account", content);
}
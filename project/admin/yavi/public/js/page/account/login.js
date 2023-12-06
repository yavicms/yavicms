const input_data = require("./lib"),
    $page = "login";

page(function () {

    if (cookie.has("token")) return;

    const input_error = document.getElementById("error-message");
    const input_submit = document.getElementById("submit");

    input_submit.onclick = async function (e) {

        if (input_submit.iswaiting) return;
        input_submit.iswaiting = 1;

        let data = {},
            i = 0, n = input_data.length,
            row, input, value, next;

        for (; i < n; i++) {

            row = input_data[i];
            next = false;

            if (row.page.includes($page)) {

                if (input = document.getElementById(row.name)) {
                    if (value = row.validate(input.value, function (message) {
                        input_error.innerHTML = message;
                    })) {
                        data[row.name] = value;
                        next = true;
                    }
                }
            }

            if (!next) return input.focus();
        }

        input_error.innerHTML = "";

        ajax.post("/account/login", data).then(function (r) {
            if (r.token) {
                cookie.set("token", r.token);
                document.location.reload();
            }
        }).catch(function (message) {
            input_error.innerHTML = message;
            input_submit.iswaiting = 0;
        });
    };

});
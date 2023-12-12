const { user_validate, $notext } = yavi;

function FormAction(callback) {

    const form = document.getElementById("form-account"),
        $form = $(form);

    function disabled(value) {
        form._wait = value;
        form.button.disabled = value;
    };

    function error_action(info) {

        var input = form[info.name];

        $form.find(".error").html($notext);

        if (input) {
            input.focus();
            input.next.html(info.message);
        }
        else {
            $("#form-error").html(info.message);
        }

        disabled(false);
    };

    form.onsubmit = function (e) {
        e.preventDefault();

        if (form._wait) return;
        disabled(true);

        var body = {}, fields = [];

        $form.find(".input").each(function () {
            body[this.name] = this.value;
            fields.push(this.name);
        });

        user_validate(body, fields)
            .then(callback)
            .then(disabled)
            .catch(error_action);

        return false;
    }
};

Object.defineProperty(FormAction, "redirect", function (uri) {
    spa(ajax, uri, (html) => $("#main").html($(html).html()));
});

module.exports = FormAction;
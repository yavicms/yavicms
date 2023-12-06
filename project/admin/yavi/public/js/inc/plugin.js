const { socket, reload, $doc } = require("../lib");
const { loop } = yavi;

const modal_delete = Modal({
    title: "Xóa plugin",
    content: "Bạn có chắc muốn xóa plugin này không ?",
    btn_ok: "Có",
    btn_cancel: "Không",
    ok() {
        let info = modal_delete.info;

        if (info) socket.api("post", "plugin-action", info);

        modal_delete.hide();
        delete modal_delete.info;
    },
    cancel() {
        delete modal_delete.info;
    }
});

function plugin_active(label, message, type, active) {

    let data = { type };

    data.action = active ? "active" : "deactive";
    data.name = label.parent(".plugin-info").findOne(".plugin-name").value;

    socket.api("post", "plugin-action", data).then(reload);
};

const modal_action = {
    active(label) {
        plugin_active(label, "Deactive", "plugin", true);
    },
    deactive(label) {
        plugin_active(label, "Active", "plugin", false);
    },
    delete(label) {
        modal_delete.info = {
            action: "delete",
            type: "plugin",
            name: label.parent(".plugin-info").findOne(".plugin-name").val()
        };
        modal_delete.show();
    },
    save(label, form) {

        let name = [];

        loop(form.plugin_name, function (input) {
            if (input.checked) name.push(input.value);
        });

        socket.api("post", "plugin-action", { action: "save", name }).then(reload);
    }
};

$doc.on("click", ".plugin-action-link", function (e) {

    let btn = this.findOne("input");
    let action = modal_action[btn.value];

    btn.disabled = true;

    action && action(this, document.getElementById("plugin-form"));

    setTimeout(function () { btn.disabled = false; }, 2000);
});

$doc.on("click", "button.theme-link", function () {

    let data = {
        name: this.value,
        type: this.name,
        action: this.attr("action")
    };

    switch (data.action) {
        case "active":
            socket.post("plugin-action", data, reload);
            break;
    }

});
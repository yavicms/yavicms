const { $doc, socket } = require("../../lib");
const delete_template = `<div class="modal-meta-delete">Bạn muốn ::action:: mục:
<div>::title::<span>&#8226;</span>::key::<span>&#8226;</span>::type::</div>
</div>`;

$doc.on("click", ".meta-edit", function (e) {

    var button = $(this);

    button.parent().addClass("edit");

    button.closest("tr").find(".input").each(function (index) {

        this.type = "text";

        if (index === 0) this.focus();
    });
});

$doc.on("click", ".meta-cancel", function () {
    var button = $(this);

    button.parent().removeClass("edit");

    button.closest("tr").find(".input").each(function () {
        this.type = "button";
        this.value = this.dataset.value;
    });
});

$doc.on("click", ".meta-save", function () {
    var button = $(this),
        body = { action: "sửa" },
        tr = button.closest("tr");

    button.parent().removeClass("edit");

    tr.find("input").each(function () {
        if (this.type === "text") this.type = "button";
        body[this.name] = this.value;
    });

    Modal({
        title: "chỉnh sửa",
        content: View(delete_template, body),
        ok() {
            socket.post("/api/meta-edit", body);
            this.remove();
            tr.find(".input").each(function () {
                this.dataset.value = this.value;
            });
        },
        cancel() {
            this.remove();
            tr.find(".input").each(function () {
                this.type = "button";
                this.value = this.dataset.value;
            });
        },
        show: true
    });

});

$doc.on("click", ".meta-delete", function () {

    var body = { action: "xóa" },
        row = $(this).closest("tr").closest("tr");

    row.find("input").each(function () {
        if (this.type === "text") this.type = "button";
        body[this.name] = this.value;
    });

    Modal({
        title: "Xóa",
        content: View(delete_template, body),
        ok() {
            socket.delete("/api/meta-delete", { _id: body._id });
            row.remove();
            this.remove();
        },
        show: true
    });

});

$doc.on("click", ".meta-create-new", function () {
    var $form = $(this).closest("form"),
        inputs = $form.find(".input"),
        body = {},
        error = 0;

    inputs.each(function () {

        if (!error && this.value) {
            body[this.name] = this.value;
            return;
        }

        if (!error) this.focus();

        error++;
    });

    if (!error) {

        socket.put("/api/meta-new", body);

        inputs.each(function () {
            this.value = "";
        });
    }
});
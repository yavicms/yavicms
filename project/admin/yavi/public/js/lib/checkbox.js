const { $doc } = require("./index");

/**
 * Set Checked toàn bộ các input[checkbox]
 */
$doc.on("click", ".checkall", function () {
    const input = $(this);
    const checked = input.is(":checked");

    input.closest(".check-parent").find(".check-item").each(function () {
        this.checked = checked;
    });
});

/**
 * Khi click 1 input[checkbox] nào đó:
 */
$doc.on("click", ".check-item", function () {

    const input = $(this);

    if (input.hasClass("checkall")) return;

    let count_checked = 0, count = 0, $checkall = [], checked;

    input.closest(".check-parent").find(".check-item").each(function () {

        if (this.classList.contains("checkall")) {
            $checkall.push(this);
        }
        else {
            if (this.checked) count_checked++;
            count++;
        }
    });

    checked = count_checked === count;
    $checkall.forEach(($input) => $input.checked = checked);
});
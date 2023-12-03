const { $doc } = require("../lib");

$doc.on("click", ".select-item", function () {
    this.closest("ul").childNodes[0].childNodes[1].innerHTML = this.next.dataset.text;
});
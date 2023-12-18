const {$doc} = require("../../lib");

$doc.on("click", ".post-new-show-props", function(e){
    e.preventDefault();
    $(this.closest("footer")).toggleClass("show-props-form");
});
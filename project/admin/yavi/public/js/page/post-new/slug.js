module.exports = function (form) {
    document.getElementById("create-slug").onclick = function () {
        console.log(form.title.value);
    };
}
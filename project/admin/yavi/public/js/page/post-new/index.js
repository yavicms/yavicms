const submit = require("./submit");
const slug = require('./slug');
const propsBox = require('./props-box');

page("/admin/post-new", function () {

    let form = document.getElementById("form-new-post"),
        $contentEditor = document.createElement("div"),
        $descriptionEditor = document.createElement("div");

    /**
     * Create Slug
     */
    slug(form);

    propsBox(form);

    /**
     * Thêm CKeditor và Submit Form
     */
    Promise.all([
        InlineEditor.create($contentEditor),
        InlineEditor.create($descriptionEditor),
        document.getElementById("content").append($contentEditor),
        document.getElementById("description").append($descriptionEditor)
    ])
        .then(($listEditor) => submit(form, $listEditor, [$contentEditor, $descriptionEditor]))
        .catch(error => console.error(error));
});
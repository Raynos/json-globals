var test = require("tape")

var json-globals = require("../index")

test("json-globals is a function", function (assert) {
    assert.equal(typeof json-globals, "function")
    assert.end()
})

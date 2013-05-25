var test = require("tape")

var JSONGlobals = require("../index")

test("JSONGlobals is a function", function (assert) {
    assert.equal(typeof JSONGlobals, "function")
    assert.end()
})

test("Can globalify stuff", function (assert) {
    var html = JSONGlobals({ user: { name: "bob" } })

    assert.equal(html,
        "if (!window.__JSON_GLOBALS_) {\n" +
        "    window.__JSON_GLOBALS_ = {}\n" +
        "}\n" +
        "window.__JSON_GLOBALS_[\"user\"] = {\n" +
        "    \"name\": \"bob\"\n" +
        "}\n"
    )

    assert.end()
})

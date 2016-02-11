var test = require("tape")

var JSONGlobals = require("../index")

test("JSONGlobals is a function", function (assert) {
    assert.equal(typeof JSONGlobals, "function")
    assert.end()
})

test("Can globalify stuff", function (assert) {
    var html = JSONGlobals({
        plain: { name: "bob" },
        regex: /foo/,
        malicious: '</script>'
    })

    assert.equal(html,
        "if (!window.__JSON_GLOBALS_) {\n" +
        "    window.__JSON_GLOBALS_ = {}\n" +
        "}\n" +

        "window.__JSON_GLOBALS_[\"plain\"] = {\"name\":\"bob\"}\n" +
        "window.__JSON_GLOBALS_[\"regex\"] = /foo/\n" +
        "window.__JSON_GLOBALS_[\"malicious\"] = " +
            "\"\\u003C\\u002Fscript\\u003E\"\n"
    )

    assert.end()
})


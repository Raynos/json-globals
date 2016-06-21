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
      '<script id="json-globals" type="application/json">' +
      '{"plain":{"name":"bob"},"regex":/foo/,"malicious":"\\u003C\\u002Fscript\\u003E"}' +
      '</script>'
    );

    assert.end()
})

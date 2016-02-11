var serializeJavascript = require('serialize-javascript')

module.exports = JSONGlobals

function JSONGlobals(hash, value) {
    if (typeof hash === "string") {
        var key = hash
        hash = {}
        hash[key] = value
    }

    var payload =
        "if (!window.__JSON_GLOBALS_) {\n" +
        "    window.__JSON_GLOBALS_ = {}\n" +
        "}\n"

    Object.keys(hash).forEach(function (key) {
        payload += "window.__JSON_GLOBALS_[" + serializeJavascript(key) +
            "] = " + serializeJavascript(hash[key]) + "\n"
    })

    return payload
}

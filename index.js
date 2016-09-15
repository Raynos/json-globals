var serializeJavascript = require('serialize-javascript')

module.exports = JSONGlobals

function JSONGlobals(hash, value) {
    if (typeof hash === "string") {
        var key = hash
        hash = {}
        hash[key] = value
    }

    var payload = '<script id="json-globals" type="application/json">';
    payload += serializeJavascript(hash);
    payload += '</script>';

    return payload
}

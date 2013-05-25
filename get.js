var window = require("global/window")

module.exports = getJSONGlobal

function getJSONGlobal(key) {
    var globals = window.__JSON_GLOBALS_ || {}
    return globals[key]
}

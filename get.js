var document = require("global/document")

module.exports = getJSONGlobal

var globals;
function getJSONGlobal(key) {
    if (!globals) {
      var jsonGlobalsElement = document.getElementById('json-globals')
      globals = JSON.parse(jsonGlobalsElement.textContent)
    }
    return globals[key];
}

# json-globals

[![build status][1]][2] [![dependency status][3]][4]

<!-- [![browser support][5]][6] -->

Embed JSON in a page as temporary global data

## Example for the server

```js
var JSONGlobals = require("json-globals")

function (req, res) {
    getUser(req, res, function (userRecord) {
        var text = JSONGlobals({ user: userRecord })
        var html = "" // whatever html

        html += "<script>" + text + "</script>"

        res.end(html)
    })
}
```

## Example for the client

```js
var JSONGlobals = require("json-globals/get")

var user = JSONGlobals("user")
```

## Installation

`npm install json-globals`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/json-globals.png
  [2]: https://travis-ci.org/Raynos/json-globals
  [3]: https://david-dm.org/Raynos/json-globals.png
  [4]: https://david-dm.org/Raynos/json-globals
  [5]: https://ci.testling.com/Raynos/json-globals.png
  [6]: https://ci.testling.com/Raynos/json-globals

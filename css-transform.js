var through = require('through2')
var path    = require('path')
var fs      = require('fs')

var target  = path.resolve(require.resolve('./css'))
var data    = fs.readFileSync(require(target), 'utf8')

data = 'module.exports = require("insert-css")('+JSON.stringify(data)+')'

module.exports = transform

function transform(file) {
  if (path.resolve(file) !== target)
    return through()

  return through(write, flush)

  function write(chunk, _, next) {
    next()
  }

  function flush() {
    this.push(data)
    this.push(null)
  }
}

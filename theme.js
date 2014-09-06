var css = require('insert-css')
var fs  = require('fs')

module.exports = css(fs.readFileSync(
  __dirname + '/theme.css'
, 'utf8'))

var size       = require('element-size')
var CodeMirror = require('codemirror')
var inherits   = require('inherits')
var Emitter    = require('events/')
var xtend      = require('xtend')

require('./glsl')(CodeMirror)

module.exports = Editor

var defaults = {
    container: document.body
  , mode: 'glsl'
  , lineNumbers: true
  , matchBrackets: true
  , indentWithTabs: false
  , tabSize: 2
  , indentUnit: 2
  , theme: 'paraiso-dark'
  , styleActiveLine: true
  , showCursorWhenSelecting: true
  , viewportMargin: Infinity
  , value: [
      'precision mediump float;\n'
    , 'void main() {'
    , '  gl_FragColor = vec4(1.0);'
    , '}'
  ].join('\n')
}

inherits(Editor, Emitter)
function Editor(opts) {
  if (!(this instanceof Editor)) return new Editor(opts)
  Emitter.call(this)

  var wrap = this.wrap = document.createElement('div')
  var self = this
  opts = opts || {}
  opts = xtend({}, defaults, opts)

  this.editor = new CodeMirror(wrap, opts)
  this.editor.on('change', function() {
    self.emit('change', self.getValue())
  })

  this.element = this.editor.getWrapperElement()
  this.resized = false
  this.errorLines = []

  opts.container.appendChild(wrap)

  setTimeout(function() {
    self.editor.focus()
    if (self.resized) return
    self.resize()
  }, 1)
}

Editor.prototype.resize = function(w, h) {
  this.resized = true

  if (w && h) return this.editor.setSize(w, h)
  var sz = size(this.wrap)

  this.editor.setSize(w || sz[0], h || sz[1])
}

Editor.prototype.getValue = function() {
  return this.editor.getValue()
}

Editor.prototype.setValue = function(str) {
  return this.editor.setValue(str)
}

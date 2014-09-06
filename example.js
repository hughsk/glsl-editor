var Editor = require('./')
var editor = Editor()

// inline CSS styles into bundle:
// both are optional.
require('./css')
require('./theme')

window.addEventListener('resize'
  , editor.resize.bind(editor)
  , false
)

editor.wrap.style.position = 'absolute'
editor.wrap.style.bottom = 0
editor.wrap.style.right = '50%'
editor.wrap.style.left = 0
editor.wrap.style.top = 0

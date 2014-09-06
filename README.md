# glsl-editor [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

[CodeMirror](http://codemirror.net/)-powered GLSL editor component.

## Usage

[![NPM](https://nodei.co/npm/glsl-editor.png)](https://nodei.co/npm/glsl-editor/)

### `editor = Editor(options)`

Creates a new editor, where `options` is passed directly onto CodeMirror. You
can find a full list [here](http://codemirror.net/doc/manual.html#config).

Additionally, the `container` option determines which DOM element to attach the
editor to. By default, this will be `document.body`.

### `editor.resize()`

Automatically resize the editor to fill its parent element. This on creating the
editor but you'll want to call it again when the window is resized.

### `editor.getValue()`

Gets the text content of the editor.

### `editor.setValue(value)`

Sets the text content of the editor to `value`.

### `editor.editor`

The CodeMirror editor instance.

### `require('glsl-editor/css')`
### `require('glsl-editor/theme')`

Inlines the base CodeMirror CSS and a default theme respectively. Useful for
just getting started quickly, but entirely optional.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/glsl-editor/blob/master/LICENSE.md) for details.

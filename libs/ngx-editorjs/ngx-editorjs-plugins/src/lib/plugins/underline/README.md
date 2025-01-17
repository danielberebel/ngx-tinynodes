# Underline Tool

Underline Tool for highlighting text-fragments for the [Editor.js](https://editorjs.io).

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev editorjs-underline
```

Include module at your application

```javascript
const Underline = require('editorjs-underline');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    underline: Underline
  },
  
  ...
});
```

## Config Params

This Tool has no config params

## Output data

Marked text will be wrapped with a `u` tag.

```json
{
    "type" : "text",
    "data" : {
        "text" : "Create a directory for your module, enter it and run <u>npm init</u> command."
    }
}
```
#React Inline Edit Kit
An assortment of common HTML form elements, editable in-line the React way.

This is a fork of https://github.com/kaivi/riek Huge thanks for his work

#Installation
`npm install rfiek --save-dev` *(`--save-dev` because you don't usually want to build and pack JS/CSS when in production)*

#Usage
```javascript
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
```
See /demo/src/demo.js for examples.

##Common props

###Required
* **value**: initial prop value
* **propName**: name of the prop to return to the _change_ function
* **change**: function which will receive a plain object with a single key, provided in _propName_

###Optional
* **validate**: validator function, returning a boolean
* **shouldBlockWhileLoading**: disables editing until a new value is confirmed by parent
* **classLoading**: CSS class name to use when loading
* **classEditing**: CSS class name to apply while in editing mode
* **classInvalid**: CSS class name to apply when _doValidatoon_ returned false
* **className**: CSS base class
* **editProps**: Additional props for the editing component. This allows you to, for example, specify a maxLength attribute to control the maximum number of characters in the textarea, or add `style`.
* **defaultProps**: Additional props for idle component.

###Component-specific props

# Contributing

The build process does not work with Node v6 at the moment: use [Node Version Manager](https://github.com/creationix/nvm), or just plain Node v5.6.0.

1. Clone this repo locally, run `npm install`
2. Make your changes
3. Do `npm run build` to compile the lib and demo
4. Open `index.html` and check if it works
5. ???
6. Submit a pull request

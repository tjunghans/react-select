# React-List

[![SemVer]](http://semver.org)
[![License]](https://github.com/tjunghans/react-select/blob/master/LICENCE)

A react component that renders a select dropdown.

[Demo](http://tangiblej.neocities.org/react-select-example.html)


## Install

Install as node dependency:

```
npm install react-simple-select --save
```


## Quickstart

```
npm start & npm run watch
```


## Commands

- `npm run build` - build production css and js
- `npm run watch` - compile css and js
- `npm start` - start static dev server


## Usage

```javascript

var React = require('react');
var select = require('react-simple-select');

var container = document.querySelector('body');

var items = [
  {id: 1, name: 'Bern'},
  {id: 2, name: 'Paris'},
  {id: 3, name: 'Berlin'}
];

function itemFilter(item) {
  return {
    key: item.id,
    value: item.id,
    label: item.name
  };
}

React.render(React.createElement(select, {
  items: items,
  itemFilter: itemFilter,
  value: 2,
  className: 'locations',
  ref: 'location',
  onChange: function (e) {
    console.log(e.target.value);
  }
}), document.querySelector('#content'));

```


## Properties

- `items`: an array of items, where items can be an arbitrary object. If items
  does not have the properties `value` and `label` then the `itemFilter` needs
  to be set, to convert each item to a usable object.
- `itemFilter`: a function that is called with each item and used to map the
  item to the properties `key`, `value` and `label`.
- `className`: an optional css class for the select element that is rendered
- `onChange`: a function that is called when the value is changed.
- `unselected`: an object that is the option item to select for no selection.
  The generated option will be the first dropdown item. To generate an option
  with an empty value use: `{value: '', label: 'Please choose...'}`


## License

MIT

[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: http://img.shields.io/npm/l/mochify.svg



# React-List

[![SemVer]](http://semver.org)
[![License]](https://github.com/tjunghans/react-list/blob/master/LICENCE)

A react component that renders a select dropdown.


## Install

Install as node dependency:

```
npm install react-simple-select --save
```


## Usage

```javascript

var React = require('react');
var select = require('react-simple-select');

var container = document.querySelector('body');

var items = [
  {id: 1, name: 'Zürich'},
  {id: 2, name: 'St. Gallen'},
  {id: 3, name: 'München'},
];

function itemFilter(item) {
	return {
		key: item.id,
		value: item.id,
    label: item.name
	};
}

React.render(React.createElement(list, {
	items: items,
	itemFilter: itemFilter,
	value: 2,
	className: 'locations',
  ref: 'location',
  onChange: function (e) {
    console.log(e.target.value);
  }
}), container);

```


## Properties

- `items`: an array of items, where items can be an arbitrary object. If items
  does not have the properties `value` and `label` then the `itemFilter` needs
  to be set, to convert each item to a usable object.
- `itemFilter`: a function that is called with each item and used to map the
  item to the properties `key`, `value` and `label`.
- `className`: an optional css class for the select element that is rendered
- `onChange`: a function that is called when the value is changed.


## Preview

Run `node integration` to preview the component on http://localhost:8000


## License

MIT

[SemVer]: http://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: http://img.shields.io/npm/l/mochify.svg



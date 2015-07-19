'use strict';

var React = require('react');
var select = require('../');

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

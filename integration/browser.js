'use strict';

var React = require('react');
var select = require('../');

var widget = document.querySelector('.widget');

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
var div;

div = document.createElement('div');
widget.appendChild(div);
React.render(React.createElement(select, {
  value: "2",
  items: items,
  itemFilter: itemFilter,
  className: 'locations',
  onChange: function (e) {
    console.log(e.target.value);
  }
}), div);


// As child element

div = document.createElement('div');
widget.appendChild(div);
var parent = React.createClass({
  getInitialState: function () {
    return {
      location: "2"
    };
  },
  render: function () {
    return (
      React.DOM.div({}, React.createElement(select, {
        value: this.state.location,
        items: items,
        itemFilter: itemFilter,
        ref: 'location',
        onChange: this._updateFilter
      }), this.state.location)
    );
  },
  _updateFilter: function () {
    var location = React.findDOMNode(this.refs.location).value;
    this.setState({
      location: location
    });
  }
});

React.render(React.createElement(parent), div);

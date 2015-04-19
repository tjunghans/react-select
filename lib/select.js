'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'Select',
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number]),
    className: React.PropTypes.string,
    refName: React.PropTypes.string,
    itemFilter: React.PropTypes.func
  },
  render: function () {
    var items = this.props.items;
    var itemFilter = this.props.itemFilter;

    var options = items.map(function (item) {
      if (itemFilter) {
        item = itemFilter(item);
      }
      item.key = item.key || item.value;
      return React.DOM.option({key: item.key, value: item.value},
        item.label);
    });

    return React.DOM.select({
      value: this.props.value,
      className: this.props.className,
      onChange: this.props.onChange
    }, options);
  }
});

'use strict';

var React = require('react');

function option(key, value, label) {
  return React.DOM.option({key: key, value: value}, label);
}

module.exports = React.createClass({
  displayName: 'Select',
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number]),
    className: React.PropTypes.string,
    itemFilter: React.PropTypes.func,
    unselected: React.PropTypes.object
  },
  render: function () {
    var items = this.props.items;
    var itemFilter = this.props.itemFilter;
    var unselected = this.props.unselected;

    var options = items.map(function (item) {
      if (itemFilter) {
        item = itemFilter(item);
      }
      item.key = item.key || item.value;
      return option(item.key, item.value, item.label);
    });

    if (unselected) {
      options = [option(unselected.value, unselected.value, unselected.label)]
        .concat(options);
    }

    return React.DOM.select({
      value: this.props.value,
      className: this.props.className,
      onChange: this.props.onChange
    }, options);
  }
});

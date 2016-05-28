'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var util = require('util');
var EventEmitter = require('events');
var select = require('../');

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

// Simple store
function Store() {
  this.state = {};
  EventEmitter.call(this);
}

util.inherits(Store, EventEmitter);
Store.prototype.setLocation = function (locationIndex) {
  this.state.locationIndex = locationIndex;
  this.emit('state', this.state);
};
var appStore = new Store();

var App = React.createClass({
  displayName: 'App',
  getInitialState: function () {
    return {
      locationIndex: 2
    };
  },
  componentDidMount: function () {
    // listen to store changes
    var self = this;
    appStore.on('state', function (state) {
      self.setState(state);
    });
  },
  componendWillUnmount: function () {
    appStore.removeAllListeners();
  },
  render: function () {
    return React.DOM.div(null, React.createElement(select, {
      items: items,
      itemFilter: itemFilter,
      value: this.state.locationIndex,
      className: 'locations',
      ref: 'location',
      onChange: function (e) {
        // update store
        appStore.setLocation(e.target.value);
      }
    }));
  }
});

ReactDOM.render(React.createElement(App), document.querySelector('#content'));

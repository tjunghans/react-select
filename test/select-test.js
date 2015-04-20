/*globals describe, it, beforeEach, afterEach */
'use strict';

var React = require('react/addons');
var assert = require('assert');
var select = require('../lib/select');

function $(selector, context) {
  context = context || document;
  return context.querySelectorAll(selector);
}

// Fixture
var dummyComponent = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    cssClass: React.PropTypes.string
  },
  render: function () {
    return (
      React.DOM.span({className: this.props.cssClass}, this.props.text)
    );
  }
});

function prepareParams(params) {
  if (!params.items) {
    params.items = [
      {id: 1, name: 'Zürich'},
      {id: 2, name: 'St. Gallen'},
      {id: 3, name: 'München'},
    ];
  }

  if (!params.itemFilter) {
    params.itemFilter = function (item) {
      return {
        key: item.id,
        value: item.id,
        label: item.name
      };
    };
  }

  if (!params.onChange) {
    params.onChange = function () { return; };
  }

  return params;
}

describe('component', function () {

  var div;

  function render(params) {
    React.render(React.createElement(select,
      prepareParams(params)), div);
  }

  beforeEach(function () {
    div = document.createElement("div");
  });

  afterEach(function () {
    if (div) {
      React.unmountComponentAtNode(div);
    }
  });

  it('renders list', function () {
    render({});

    assert.equal($('option', div).length, 3);
  });

  it('renders list with css class', function () {
    render({ className: 'foobarbaz'});

    assert.equal($('select.foobarbaz', div).length, 1);
  });

  it('renders first element without value', function () {
    render({unselected: {
      label: 'All',
      value: ''
    }});

    assert.equal($('option', div).length, 4);
    assert.equal($('option', div)[0].value, '');
    assert.equal($('option', div)[0].textContent, 'All');
  });

});


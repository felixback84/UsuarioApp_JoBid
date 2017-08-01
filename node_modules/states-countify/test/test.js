// test.js

// Module Dependencies.
var StatesCountify = require('../index');
var test = require('tape');

test('StatesCountify is an object', function (t) {

  t.plan(1);

  t.equal(typeof StatesCountify, 'object');
});

test('StatesCountify has 50 states', function (t) {

  t.plan(1);

  // Setup
  var count = 0;
  for (var state in StatesCountify) { count += 1; }

  t.equal(count, 50)

  // Teardown.
  state = count = null;
});

test('all states are JSON strings', function (t) {

  t.plan(100);

  for (var state in StatesCountify) {
    var current = StatesCountify[state];
    t.equal(typeof current, 'string');
    t.equal(typeof JSON.parse(current), 'object');
  }

  // Teardown.
  state = current = null;
});
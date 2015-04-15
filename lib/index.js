'use strict';

var Door1 = require('./Door1'),
  Door2 = require('./Door2'),
  Door3 = require('./Door3');


console.log('Inheritance Methods:\n');

/*************************************************
 * inheritance methods
 *************************************************/

var d1 = new Door1('door1');
var d2 = new Door2('door2');
var d3 = new Door3('door3');

console.log('with util.inherits :');
d1.emit('ring');

console.log('set Constructor.prototype.__proto__ = ' +
  'Super.prototype (deprecated) :');
d2.emit('ring');

console.log('set Constructor.prototype = new Super() :');
d3.emit('ring');

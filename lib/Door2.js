'use strict';

var EventEmitter = require('events')
  .EventEmitter;

/*************************************************
 * set Constructor.prototype.__proto__ = Super.prototype (deprecated)
 *************************************************/

function Door2(name) {
  EventEmitter.call(this);

  this.name = name;
  this.on('ring', this.ring);
  this.on('open', this.open);
}

Door2.prototype.__proto__ = EventEmitter.prototype;

Door2.prototype.open = function () {
  console.log('"' + this.name + '" > ' + 'open');
};

Door2.prototype.ring = function () {
  console.log('"' + this.name + '" > ' + 'ring');
  this.emit('open');
};

module.exports = Door2;

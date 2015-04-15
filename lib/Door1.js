'use strict';

var EventEmitter = require('events')
  .EventEmitter,
  util = require('util');

/*************************************************
 * util.inherits
 *************************************************/

function Door1(name) {
  EventEmitter.call(this);

  this.name = name;

  this.on('ring', this.ring);
  this.on('open', this.open);
}

util.inherits(Door1, EventEmitter);

Door1.prototype.open = function () {
  console.log('"' + this.name + '" > ' + 'open');
};

Door1.prototype.ring = function () {
  console.log('"' + this.name + '" > ' + 'ring');
  this.emit('open');
};

module.exports = Door1;

'use strict';

var EventEmitter = require('events')
  .EventEmitter;

/*************************************************
 * set Constructor.prototype = new Super()
 *************************************************/

function Door3(name) {

  this.name = name;

  this.on('ring', this.ring);
  this.on('open', this.open);
}

Door3.prototype = new EventEmitter();

Door3.prototype.open = function () {
  console.log('"' + this.name + '" > ' + 'open');
};

Door3.prototype.ring = function () {
  console.log('"' + this.name + '" > ' + 'ring');
  this.emit('open');
};

module.exports = Door3;

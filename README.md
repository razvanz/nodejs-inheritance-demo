NodeJS inheritance demo
=======================

Demo different ways of implementing inheritance in NodeJS

Contributing
------------

For any corrections / considerations please submit an issue or a pull request.

Usage
-----

```bash
npm test
```

Inheritance variations
----------------------

-	using `util.inherits`

```javascript
var EventEmitter = require('events')
  .EventEmitter,
  util = require('util');

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
```

-	setting `Constructor.prototype.__proto__ = Super.prototype` (deprecated)

```javascript
var EventEmitter = require('events')
  .EventEmitter;

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
```

-	setting `Constructor.prototype = new Super()`

```javascript
var EventEmitter = require('events')
  .EventEmitter;

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
```

LICENCE
-------

[MIT](https://github.com/razvanz/nodejs-inheritance-demo/blob/master/LICENCE)

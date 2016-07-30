var LinkedList = require('./linked-list.js');

var Queue = function() {
  LinkedList.call(this);
};

Queue.prototype = Object.create(LinkedList.prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.enqueue = function(value) {
  this.addToTail(value);
};

Queue.prototype.dequeue = function() {
  return this.removeFromHead();
};

Queue.prototype.size = function() {
  return this.length;
};

module.exports = Queue;

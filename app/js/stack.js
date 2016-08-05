var LinkedList = require('./linked-list.js');

var Stack = function() {
  LinkedList.call(this);
};

Stack.prototype = Object.create(LinkedList.prototype);
Stack.prototype.constructor = Stack;

Stack.prototype.push = function(value) {
  this.addToTail(value);
};

Stack.prototype.pop = function() {
  return this.removeFromTail();
};

Stack.prototype.size = function() {
  return this.length;
};

module.exports = Stack;

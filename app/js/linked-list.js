var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

LinkedList.constructor = LinkedList;

LinkedList.prototype.createNode = function(value) {
  return {
    value: value,
    next: null
  }
};

LinkedList.prototype.addToTail = function(value) {
  var node = this.createNode(value);

  if(this.head === null) {
    this.head = node;
    this.tail = node;
  }
  else {
    this.tail.next = node;
    this.tail = node;
  }

  ++this.length;
};

LinkedList.prototype.removeFromHead = function() {
  if(this.length === 0) {
    return null;
  }

  var removed = this.head.value;
  this.head = this.head.next;
  --this.length;
  return removed;
};

LinkedList.prototype.removeFromTail = function() {
  if(this.length === 0) {
    return null;
  }

  var node = null;
  var nextNode = this.head;

  while(nextNode.next) {
    node = nextNode;
    nextNode = nextNode.next;
  }

  var removed = nextNode.value;
  node.next = null;
  --this.length;
  return removed;
};

LinkedList.prototype.length = function() {
  return this.length;
};

LinkedList.prototype.contains = function(value) {
  var node = this.head;

  while(node) {
    if(node.value === value) {
      return true;
    }
    node = node.next;
  }

  return false;
};

module.exports = LinkedList;

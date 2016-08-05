var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

LinkedList.constructor = LinkedList;

LinkedList.prototype.createNode = function(value) {
  var obj = Object.create(null);
  obj.value = value;
  obj.prev = null;
  obj.next = null;

  return obj;
};

LinkedList.prototype.addToTail = function(value) {
  var node = this.createNode(value);

  if(this.head === null) {
    this.head = node;
    this.tail = node;
  }
  else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }

  ++this.length;
};

LinkedList.prototype.removeFromHead = function() {
  if(this.length === 0) {
    return null;
  }

  var node = this.head;
  this.head = this.head.next;
  this.head.prev = null;
  --this.length;
  return node;
};

LinkedList.prototype.removeFromTail = function() {
  if(this.length === 0) {
    return null;
  }

  var node = this.tail;
  this.tail.prev.next = null;
  this.tail = this.tail.prev;
  --this.length;
  return node;
};

LinkedList.prototype.remove = function(value) {
  var node = this.find(value);

  if(!node) {
    return null;
  }

  if(!node.prev) {
    this.removeFromHead();
  }
  else if(!node.next) {
    this.removeFromTail();
  }
  else {
    node.next.prev = node.prev;
    node.prev.next = node.next;
    --this.length;
  }


  return node;
};

LinkedList.prototype.contains = function(value) {
  return !!this.find(value);
};

LinkedList.prototype.find = function(value) {
  var node = this.head;

  while(node) {
    if(node.value === value) {
      return node;
    }

    node = node.next;
  }

  return null;
};

module.exports = LinkedList;

var LinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

LinkedList.constructor = LinkedList;

LinkedList.prototype.createNode = function(value) {
  var obj = Object.create(null);
  obj.value = value;
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
    this.tail.next = node;
    this.tail = node;
  }

  ++this.length;
};

LinkedList.prototype.removeFromHead = function() {
  return this.removeNode(this.head.value);
};

LinkedList.prototype.removeFromTail = function() {
  if(this.length === 0) {
    return null;
  }

  var node = this.head;
  while(node.next) {
    node = node.next;
  }

  return this.removeNode(node.value);
};

LinkedList.prototype.removeNode = function(value) {
  var obj = this.findRoot(value);
  var removed = null;

  if(!obj) {
    return removed;
  }

  if(!obj.parent) {
    removed = this.head;
    this.head = this.head.next;
  }
  else {
    removed = obj.parent.next;
    obj.parent.next = obj.child.next || null;
  }

  --this.length;

  return removed;
};

LinkedList.prototype.contains = function(value) {
  return !!this.find(value);
};

LinkedList.prototype.find = function(value) {
  var obj = this.findRoot(value);
  return obj ? obj.child : null;
};

LinkedList.prototype.findRoot = function(value) {
  if(this.length === 0) {
    return null;
  }

  var parentNode = null;
  var childNode = this.head;
  var returnObj = Object.create(null);

  while(childNode) {
    if(childNode.value === value) {
      returnObj.parent = parentNode;
      returnObj.child = childNode;
      return returnObj;
    }

    parentNode = childNode;
    childNode = childNode.next;
  }

  return null;
}

module.exports = LinkedList;

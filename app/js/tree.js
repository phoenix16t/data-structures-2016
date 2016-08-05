var Tree = function() {
  this.root = null;
  this.size = 0;
};

Tree.prototype.constructor = Tree;

Tree.prototype.createNode = function(value, parent) {
  parent = parent || null;

  var obj = Object.create(null);
  obj.value = value;
  obj.parent = parent;
  obj.left = null;
  obj.right = null;

  return obj;
};

Tree.prototype.add = function(value, parent) {
  if(!parent) {
    if(!this.root) {
      this.root = this.createNode(value);
      ++this.size;
      return;
    }
    parent = this.root;
  }

  var child = value < parent.value ? 'left' : 'right';

  if(parent[child]) {
    this.add(value, parent[child]);
  }
  else {
    parent[child] = this.createNode(value, parent);
    ++this.size;
  }
};

Tree.prototype.delete = function(value) {
  var node = this.find(value);

  if(!node) {
    return null;
  }

  var removed = node.value;
  var child;

  if(!node.parent && !node.left && !node.right) {
    this.root = null;
  }
  else if(node.left && node.right) {
    child = this.findMin(node.right);
    this.delete(child.value);
    node.value = child.value;
  }
  else {
    var parent = node.parent;
    child = parent.value > value ? 'left' : 'right';
    var replacement = node.left || node.right;
    parent[child] = replacement;
    if(replacement) {
      replacement.parent = parent;
    }
  }

  --this.size;

  return removed;
};

Tree.prototype.find = function(value, parent) {
  if(!parent) {
    parent = this.root;
  }

  if(parent.value === value) {
    return parent;
  }

  var child = value < parent.value ? 'left' : 'right';

  return (parent[child] && this.find(value, parent[child])) || false;
};

Tree.prototype.findMin = function(node) {
  if(!node) {
    node = this.root;
  }

  while(node.left) {
    node = node.left;
  }

  return node;
};

Tree.prototype.contains = function(value) {
  return !!this.find(value);
};

module.exports = Tree;

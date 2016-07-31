var Trie = function() {
  this.root = this.createNode();
  this.size = 0;
};

Trie.constructor = Trie;

Trie.prototype.createNode = function(value) {
  var obj = Object.create(null);
  obj.value = value || null;
  obj.parent = null;
  obj.children = Object.create(null);
  obj.isWord = false;
  return obj;
};

Trie.prototype.insert = function(value) {
  var parent = this.root;
  var chn = parent.children;

  for(var i = 0; i < value.length; i++) {
    if(!chn[value[i]]) {
      chn[value[i]] = this.createNode(value[i]);
      chn[value[i]].parent = parent;
    }
    if(i === value.length - 1) {
      chn[value[i]].isWord = true;
      ++this.size;
    }
    parent = chn[value[i]];
    chn = parent.children;
  }
};

Trie.prototype.delete = function(value) {
  var node = this.findNode(value);

  if(node && node.isWord) {
    node.isWord = false;
    --this.size;

    this.inspectChildren(node);

    return value;
  }
  else {
    return false;
  }
};

Trie.prototype.inspectChildren = function(node) {
  if(Object.keys(node.children).length === 0) {
    this.removeNode(node);
  }
  else {
    return;
  }

  if(node.parent && !node.parent.isWord) {
    this.inspectChildren(node.parent);
  }
};

Trie.prototype.removeNode = function(node) {
  delete node.parent.children[node.value];
};

Trie.prototype.find = function(value) {
  var node = this.findNode(value);
  return node.isWord ? value : false;
};

Trie.prototype.findNode = function(value) {
  var chn = this.root.children;

  for(var i = 0; i < value.length; i++) {
    if(chn[value[i]] && i === value.length - 1) {
      return chn[value[i]];
    }
    if(!chn[value[i]]) {
      return false;
    }

    chn = chn[value[i]].children;
  }

  return false;
}

Trie.prototype.contains = function(value) {
  return !!this.find(value);
};

module.exports = Trie;
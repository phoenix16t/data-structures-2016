describe('tree', function() {
  var Tree = require('../app/js/tree.js');
  var tree = new Tree();

  it('should create a tree object', function() {
    expect(tree.root).toBeNull();
    expect(tree.size).toBe(0);
  });

  it('should add new nodes correctly', function() {
    var arr = [5,4,6,1,2,3,8,7,9];
    for(var i = 0; i < arr.length; i++) {
      tree.add(arr[i]);
    }

    expect(tree.root.value).toBe(5);
    expect(tree.root.left.value).toBe(4);
    expect(tree.root.left.left.right.right.value).toBe(3);
    expect(tree.root.right.value).toBe(6);
    expect(tree.root.right.right.left.value).toBe(7);

    expect(tree.size).toBe(9);
  });

  it('should find nodes or return null', function() {
    expect(tree.find(7).value).toBe(7);
    expect(tree.find(3).value).toBe(3);
    expect(tree.find(8).value).toBe(8);

    expect(tree.find(0)).toBe(null);
    expect(tree.find(10)).toBe(null);
  });

  it('should find nodes under a parent node or return null', function() {
    var node = tree.find(6);

    expect(tree.find(7, node).value).toBe(7);
    expect(tree.find(8, node).value).toBe(8);
    expect(tree.find(9, node).value).toBe(9);
    
    expect(tree.find(3, node)).toBeNull();
    expect(tree.find(4, node)).toBeNull();
    expect(tree.find(5, node)).toBeNull();
  });

  it('should find the minimum node under a given root node', function() {
    var node1 = tree.find(5);
    var node2 = tree.find(6);
    var node3 = tree.find(8);

    expect(tree.findMin(node1).value).toBe(1);
    expect(tree.findMin(node2).value).toBe(6);
    expect(tree.findMin(node3).value).toBe(7);
  });

  it('should contain nodes', function() {
    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(6)).toBe(true);
    expect(tree.contains(8)).toBe(true);

    expect(tree.contains(0)).toBe(false);
    expect(tree.contains(10)).toBe(false);
  });

  it('should delete nodes', function() {
    tree.delete(5);
    tree.delete(6);
    tree.delete(8);

    expect(tree.find(5)).toBe(null);
    expect(tree.find(6)).toBe(null);
    expect(tree.contains(8)).toBe(false);
  });
});

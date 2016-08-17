describe('stack', function () {
  var Stack = require('../app/js/stack.js');
  var stack = new Stack();

  it('should create a stack object', function() {
    expect(stack.head).toBeNull();
    expect(stack.tail).toBeNull();
    expect(stack.length).toBe(0);
  });

  it('should add nodes to the stack', function() {
    for(var i = 1; i <= 9; i++) {
      stack.push(i);
      expect(stack.size()).toBe(i);
    }
  });

  it('should remove nodes from the stack in the same order', function() {
    expect(stack.pop()).toBe(9);
    expect(stack.pop()).toBe(8);
    expect(stack.pop()).toBe(7);

    expect(stack.size()).toBe(6);
  });
});

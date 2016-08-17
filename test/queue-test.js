describe('queue', function () {
  var Queue = require('../app/js/queue.js');
  var queue = new Queue();

  it('should create a queue object', function() {
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
    expect(queue.length).toBe(0);
  });

  it('should add nodes to the queue', function() {
    for(var i = 1; i <= 9; i++) {
      queue.enqueue(i);
      expect(queue.size()).toBe(i);
    }
  });

  it('should remove nodes from the queue in the same order', function() {
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);

    expect(queue.size()).toBe(6);
  });
});

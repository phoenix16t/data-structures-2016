describe('Linked lists', function () {
  var LinkedList = require('../app/js/linked-list.js');
  var linkedList = new LinkedList();

  it('should create a linked list object', function() {
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);
  });

  it('should add nodes to tail', function() {
    for(var i = 1; i <= 9; i++) {
      linkedList.addToTail(i);
    }

    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.head.next.next.value).toBe(3);
  });

  it('should return the proper length', function() {
    expect(linkedList.length).toBe(9);
  });

  it('should find nodes by value', function() {
    expect(linkedList.find(5).value).toBe(5);
    expect(linkedList.find(7).value).toBe(7);
    expect(linkedList.find(9).value).toBe(9);
  });

  it('should return null when find fails', function() {
    expect(linkedList.find(0)).toBeNull();
    expect(linkedList.find(10)).toBeNull();
  });

  it('should return true if the list contains a value', function() {
    expect(linkedList.contains(5)).toBe(true);
    expect(linkedList.contains(9)).toBe(true);
  });

  it('should return false if the list does not contain a value', function() {
    expect(linkedList.contains(0)).toBe(false);
    expect(linkedList.contains(10)).toBe(false);
  });

  it('should remove nodes by value or null', function() {
    expect(linkedList.remove(4).value).toBe(4);
    expect(linkedList.remove(5).value).toBe(5);
    expect(linkedList.remove(6).value).toBe(6);

    expect(linkedList.remove(5)).toBeNull();

    expect(linkedList.find(7).prev.value).toBe(3);
    expect(linkedList.find(3).next.value).toBe(7);
  });

  it('should remove node from head', function() {
    expect(linkedList.removeFromHead().value).toBe(1);
    expect(linkedList.removeFromHead().value).toBe(2);

    expect(linkedList.find(3).prev).toBeNull();
  });

  it('should remove node from tail', function() {
    expect(linkedList.removeFromTail().value).toBe(9);
    expect(linkedList.removeFromTail().value).toBe(8);

    expect(linkedList.find(7).next).toBeNull();
  });
});

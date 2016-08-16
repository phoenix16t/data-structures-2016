var LinkedList = require('./linked-list.js');
var Queue = require('./queue.js');
var Stack = require('./stack.js');
var Tree = require('./tree.js');
var Trie = require('./trie.js');
var HashTable = require('./hashtable.js');

// var linkedList = new LinkedList();
// linkedList.addToTail(5);
// linkedList.addToTail(6);
// linkedList.addToTail(7);
// linkedList.addToTail(8);
// linkedList.addToTail(9);

// // linkedList.getTail();
// // console.log("removed", linkedList.removeFromTail());
// // debugger
// // console.log("removed", linkedList.removeFromTail());
// // linkedList.removeFromTail();
// // linkedList.removeFromHead();
// // console.log("find", linkedList.find(5));
// // console.log("find", linkedList.find(9));
// // console.log("findRoot", linkedList.findRoot(5));
// // console.log("removeNode", linkedList.removeNode(4))
// // console.log("remove", linkedList.remove(9))
// // debugger
// // console.log("remove", linkedList.remove(9))
// // console.log("remove", linkedList.remove(9))
// // console.log("removeNode", linkedList.removeNode(5))
// // console.log("removeNode", linkedList.removeNode(7))
// // // console.log("removeNode", linkedList.removeNode(9))
// // console.log("removeNode", linkedList.removeNode(91))
// // console.log("contains", linkedList.contains(5));
// console.log('removeFromHead', linkedList.removeFromHead());
// // console.log('removeFromHead', linkedList.removeFromHead());
// // console.log('removeFromHead', linkedList.removeFromHead());
// // console.log('removeFromHead', linkedList.removeFromHead());
// // console.log('removeFromHead', linkedList.removeFromHead());
// // console.log('removeFromHead', linkedList.removeFromHead());
// // console.log("contains", linkedList.contains(5));
// console.log('linkedList', linkedList)

// var queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log('size', queue.size());
// console.log('removed', queue.dequeue());
// console.log('removed', queue.dequeue());

// var stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log("size", stack.size());
// console.log("pop", stack.pop());
// console.log("pop", stack.pop());

var tree = new Tree();
// tree.add(7);
// tree.add(5);
// tree.add(3);
// tree.add(12);
// tree.add(8);
// tree.add(1);
// tree.add(6);
// tree.add(2);
// tree.add(14);
// tree.add(15);
// tree.add(16);
// tree.add(13);
// tree.add(9);
// tree.add(11);
// tree.add(4);
// tree.add(10);
    var arr = [5,4,6,1,2,3,7,8,9];
    for(var i = 0; i < arr.length; i++) {
      tree.add(arr[i]);
    }
// console.log("find", tree.find(1));
// console.log("find", tree.find(5));
// console.log("find", tree.find(21));
// console.log("find", tree.find(12));
// console.log("find", tree.find(9));
// tree.findMin();
// console.log("delete", tree.delete(3));
// console.log("delete", tree.delete(5));
// console.log("delete", tree.delete(8));
// console.log("tree", tree)
// console.log("delete", tree.delete(8));
// console.log("delete", tree.delete(12));
// console.log("contains", tree.contains(26));
console.log("tree", tree)

// var trie = new Trie();
// trie.insert('abc');
// trie.insert('abt');
// trie.insert('ab');
// trie.insert('b');

// trie.insert('i');
// trie.insert('in');
// trie.insert('inn');
// trie.insert('a');
// trie.insert('to');
// trie.insert('te');
// trie.insert('tea');
// trie.insert('ted');
// trie.insert('teddy');
// trie.insert('ten');

// console.log("congtains", trie.contains('tens'));
// // console.log("del", trie.delete('te'));
// // console.log("del", trie.delete('ten'));
// // console.log("del", trie.delete('ted'));
// // debugger
// // console.log("del", trie.delete('tea'));
// // console.log("del", trie.delete('teas'));
// console.log("del", trie.delete('teddy'));
// console.log("del", trie.delete('to'));
// console.log("trie", trie)

// var hash = new HashTable();
// hash.add('hello', 'goodbye')
// hash.add('up', 'down')
// hash.add('left', 'right')
// hash.add('night', 'day')
// hash.add('past', 'future')
// hash.add('past', 'future')
// console.log("find", hash.find('past'));
// // console.log("find2", hash.findNode('past'));
// console.log("delete", hash.delete('past'));
// console.log("hash", hash)
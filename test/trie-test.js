describe('trie', function() {
  var Trie = require('../app/js/trie.js');
  var trie = new Trie();

  it('should create a trie object', function() {
    expect(trie.root.value).toBeNull();
    expect(trie.size).toBe(0);
    expect(trie.root.isWord).toBe(false);
  });

  it('should add new words', function() {
    trie.insert('tree');
    trie.insert('trees');
    trie.insert('trie');
    trie.insert('algo');
    trie.insert('assoc');
    trie.insert('all');
    trie.insert('also');

    expect(trie.root
      .children['a']).toBeDefined();
    expect(trie.root
      .children['a'].children['l'].children['l']).toBeDefined();
    expect(trie.root
      .children['a'].children['l'].children['s']).toBeDefined();

    expect(trie.root
      .children['a']
      .isWord).toBe(false);
    expect(trie.root
      .children['a'].children['l'].children['l']
      .isWord).toBe(true);
  });

  it('should contain values or return null', function() {
    expect(trie.contains('all')).toBe(true);
    expect(trie.contains('assoc')).toBe(true);
    expect(trie.contains('trie')).toBe(true);

    expect(trie.contains('test')).toBe(false);
  });

  it('should find nodes or return null', function() {
    var node1 = trie.find('al');
    var node2 = trie.find('all');
    var node3 = trie.find('assoc');

    expect(node1.value).toBe('l');
    expect(node1.isWord).toBe(false);

    expect(node2.value).toBe('l');
    expect(node2.isWord).toBe(true);

    expect(node3.value).toBe('c');
    expect(node3.isWord).toBe(true);

    expect(trie.find('test')).toBeNull();
  });

  it('should delete nodes or return null', function() {
    expect(trie.delete('tree')).toBe('tree');
    expect(trie.root
      .children['t'].children['r'].children['e'].children['e']).toBeDefined();
    expect(trie.root
      .children['t'].children['r'].children['e'].children['e']
      .isWord).toBe(false);

    expect(trie.delete('trees')).toBe('trees');
    expect(trie.find('trees')).toBeNull();
    expect(trie.root
      .children['t'].children['r'].children['e']).toBeUndefined();
    expect(trie.root
      .children['t'].children['r']).toBeDefined();

    expect(trie.contains('trie')).toBe(true);
    expect(trie.delete('trie')).toBe('trie');
    expect(trie.contains('trie')).toBe(false);
    expect(trie.root
      .children['t']).toBeUndefined();

    expect(trie.delete('trie')).toBeNull();
  });
});

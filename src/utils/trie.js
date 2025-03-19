export class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  // Insert a word into the trie
  insert(word) {
    let current = this.root;
    for (const char of word.toLowerCase()) {
      if (!current[char]) current[char] = {};
      current = current[char];
    }
    current[this.endSymbol] = word;
  }

  // Search for words with a given prefix
  search(prefix) {
    const results = [];
    let current = this.root;

    // Navigate to the end of the prefix in the trie
    for (const char of prefix.toLowerCase()) {
      if (!current[char]) return results;
      current = current[char];
    }

    // Collect all words starting with this prefix
    this._collectWords(current, results);
    return results;
  }

  // Helper method to collect all words under a node
  _collectWords(node, results) {
    if (node[this.endSymbol]) {
      results.push(node[this.endSymbol]);
    }

    for (const char in node) {
      if (char !== this.endSymbol) {
        this._collectWords(node[char], results);
      }
    }
  }
}

const { Node } = require('./Node');
const { getUnique } = require('./helpers');

class Tree {
  constructor(initialArray = []) {
    if (initialArray.length === 0) {
      this.root = null;
      return this;
    }

    this.root = this.buildTree(initialArray);
  }

  #constructTree = (array) => {
    if (array.length === 0) return null;

    const midIndex = Math.floor(array.length / 2);
    const midElement = array[midIndex];

    const root = new Node(midElement);
    root.left = this.#constructTree(array.slice(0, midIndex));
    root.right = this.#constructTree(array.slice(midIndex + 1));

    return root;
  }

  buildTree(array) {
    const sortedArray = array.toSorted((a, b) => a - b);
    const uniqueArray = getUnique(sortedArray);

    return this.#constructTree(uniqueArray);
  }

  insert(item, currentNode = this.root) {
    const node = new Node(item);

    if (!this.root) {
      this.root = node;
      return;
    }

    if (item < currentNode.data) {
      if (!currentNode.left) {
        currentNode.left = node;
      } else {
        this.insert(item, currentNode.left);
      }

      return;
    }

    if (item > currentNode.data) {
      if (!currentNode.right) {
        currentNode.right = node;
      } else {
        this.insert(item, currentNode.right);
      }

      return;
    }

    console.error('Error while inserting');
  }
}

module.exports.Tree = Tree;
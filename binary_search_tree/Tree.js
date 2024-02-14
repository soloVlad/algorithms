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

  insert(item) {
    this.root = this.#insertRec(item);
  }

  #insertRec(item, currentNode = this.root) {
    if (!currentNode) {
      return new Node(item);
    }

    if (item < currentNode.data) {
      currentNode.left = this.#insertRec(item, currentNode.left);
    }

    if (item > currentNode.data) {
      currentNode.right = this.#insertRec(item, currentNode.right);
    }

    if (item === currentNode.data) {
      console.error('Error while inserting: Duplicate item');
    }

    return currentNode;
  }

  remove(item) {
    this.root = this.#removeRec(item);
  }

  #removeRec(item, currentNode = this.root) {
    if (!currentNode) {
      return currentNode
    }

    // traversing removal
    if (item < currentNode.data) {
      currentNode.left = this.#removeRec(item, currentNode.left);
      return currentNode;
    } else if (item > currentNode.data) {
      currentNode.right = this.#removeRec(item, currentNode.right);
      return currentNode;
    }

    // handle both null or only one child cases
    if (!currentNode.left) {
      return currentNode.right;
    }
    else if (!currentNode.right) {
      return currentNode.left;
    }

    // searching for the most left element in right subtree of removing element
    let nodeIteratorParent = currentNode;
    let nodeIterator = currentNode.right;

    while (nodeIterator.left) {
      nodeIteratorParent = nodeIterator;
      nodeIterator = nodeIterator.left;
    }

    if (currentNode !== nodeIteratorParent) {
      nodeIteratorParent.left = nodeIterator.right;
    } else {
      nodeIteratorParent.right = nodeIterator.right;
    }

    currentNode.data = nodeIterator.data;

    return currentNode;
  }
}

module.exports.Tree = Tree;
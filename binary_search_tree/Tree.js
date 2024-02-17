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

  find(item, currentNode = this.root) {
    if (!currentNode) return currentNode;
    if (currentNode.data === item) return currentNode;

    if (item < currentNode.data) {
      return this.find(item, currentNode.left);
    } else {
      return this.find(item, currentNode.right);
    }
  }

  levelOrder(callback) {
    if (!this.root) return this.root;

    const queue = [this.root];
    const resultArray = [];

    while (queue.length) {
      const currentElement = queue.shift();
      resultArray.push(callback(currentElement));

      if (currentElement.left) queue.push(currentElement.left);
      if (currentElement.right) queue.push(currentElement.right);
    }

    return resultArray;
  }

  inOrder(currentNode = this.root) {
    if (!currentNode) return currentNode;

    if (currentNode.left) this.inOrder(currentNode.left);
    console.log(currentNode.data);
    if (currentNode.right) this.inOrder(currentNode.right);
  }

  // we don't consider null nodes as nodes, only existing values
  height(node) {
    if (!node) return node;
    if (!node.left && !node.right) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(node, currentNode = this.root) {
    if (node.data === currentNode.data) {
      return 0;
    }

    if (node.data < currentNode.data) {
      return this.depth(node, currentNode.left) + 1;
    }

    if (node.data > currentNode.data) {
      return this.depth(node, currentNode.right) + 1;
    }
  }

  checkIsBalanced(currentNode = this.root) {
    if (!currentNode) {
      return true;
    }

    const leftHeight = this.height(currentNode.left);
    const rightHeight = this.height(currentNode.right);

    const difference = Math.abs(leftHeight - rightHeight);

    return (
      difference <= 1
      && this.checkIsBalanced(currentNode.left)
      && this.checkIsBalanced(currentNode.right)
    );
  }

  rebalance() {
    if (this.checkIsBalanced()) return;

    const arrayOfNodes = this.levelOrder((node) => node.data);
    this.root = this.buildTree(arrayOfNodes);

    return this.root;
  }

  print(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }

    if (node.right !== null) {
      this.print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }

    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);

    if (node.left !== null) {
      this.print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
}

module.exports.Tree = Tree;
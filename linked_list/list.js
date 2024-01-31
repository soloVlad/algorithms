const { Node } = require('./node');

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  #increaseSize() {
    this.size++;
  }

  append(item) {
    const node = new Node(item);

    if (!this.size) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    this.#increaseSize();
  }

  prepend(item) {
    const node = new Node(item);

    if (!this.size) {
      this.head = node;
      this.tail = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }

    this.#increaseSize();
  }

  at(index) {
    if (!this.size || index >= this.size) {
      return null;
    }

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }
}

module.exports.LinkedList = LinkedList;
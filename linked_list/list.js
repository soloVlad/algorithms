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

  #decreaseSize() {
    this.size--;
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

  pop() {
    if (!this.size) {
      return;
    }

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      let currentNode = this.head;

      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
    }

    this.#decreaseSize();
  }

  contains(value) {
    if (!this.size) {
      return false;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  }

  find(value) {
    if (!this.size) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentIndex;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return null;
  }

  insertAt(index, item) {
    if (index >= this.size) {
      throw new Error('index is out of bound');
    }

    const node = new Node(item);

    if (index === 0) {
      this.prepend(node);
    }

    if (index === this.size - 1) {
      this.append(node);
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    node.next = currentNode.next;
    currentNode.next = node;

    this.#increaseSize();
  }

  toString() {
    if (!this.size) {
      return null;
    }

    let resultString = '';

    let currentNode = this.head;

    while (currentNode) {
      resultString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    resultString += null;

    return resultString;
  }
}

module.exports.LinkedList = LinkedList;
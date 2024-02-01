class HashMap {
  static #MIN_CAPACITY = 16;
  static #MAX_LOAD = 0.75;

  #load = 0;

  constructor() {
    this.array = new Array(HashMap.#MIN_CAPACITY);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    const index = keyHash % this.#capacity();

    this.array[index] = [key, value];
  }

  entries() {
    return this.array.filter(pair => pair);
  }

  #capacity() {
    return this.array.length;
  }
}

module.exports.HashMap = HashMap;
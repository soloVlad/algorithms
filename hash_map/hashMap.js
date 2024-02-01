class HashMap {
  static #MIN_CAPACITY = 16;
  static #MAX_LOAD = 0.75;
  static #RESIZE_FACTOR = 2;

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
    const index = this.#getIndexByKey(key);

    this.array[index] = [key, value];

    if (this.#shouldResize()) {
      this.#resize();
    }
  }

  get(key) {
    const index = this.#getIndexByKey(key);

    const pair = this.array[index];

    if (pair) {
      return pair[1];
    }

    return null;
  }

  keys() {
    return this.array.filter(pair => pair).map(pair => pair[0]);
  }

  values() {
    return this.array.filter(pair => pair).map(pair => pair[1]);
  }

  entries() {
    return this.array.filter(pair => pair);
  }

  #getCapacity() {
    return this.array.length;
  }

  #getLoad() {
    return this.array.filter(pair => pair).length;
  }

  #getIndexByKey(key) {
    const keyHash = this.hash(key);
    return keyHash % this.#getCapacity();
  }

  #shouldResize() {
    return this.#getLoad() / this.#getCapacity() >= HashMap.#MAX_LOAD;
  }

  #resize() {
    const currentArray = [...this.array];
    this.array = new Array(this.#getCapacity() * HashMap.#RESIZE_FACTOR);

    currentArray
      .filter(pair => pair)
      .forEach(pair => {
        const [key, value] = pair;

        const index = this.#getIndexByKey(key);
        this.array[index] = [key, value];
      })
  }
}

module.exports.HashMap = HashMap;
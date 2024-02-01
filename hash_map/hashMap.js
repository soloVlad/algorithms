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
    const keyHash = this.hash(key);
    const index = keyHash % this.#getCapacity();

    this.array[index] = [key, value];

    if (this.#shouldResize()) {
      this.#resize();
    }
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

        const keyHash = this.hash(key);
        const index = keyHash % this.#getCapacity();
        this.array[index] = [key, value];
      })
  }
}

module.exports.HashMap = HashMap;
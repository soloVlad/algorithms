class HashMap {
  constructor() {
    this.array = new Array(16);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
  }
}

module.exports.HashMap = HashMap;
const { LinkedList } = require('./list');

const list = new LinkedList();

list.append(7);
list.append(5);

console.log(list.at(1));
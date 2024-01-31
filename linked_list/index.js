const { LinkedList } = require('./list');

const list = new LinkedList();

list.append(7);
list.append(5);
list.append(6);

console.log(list.at(2));

list.pop();

console.log(list.at(2));
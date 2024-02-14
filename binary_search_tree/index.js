const { Tree } = require('./Tree');
const { prettyPrint } = require('./helpers');

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(data);

prettyPrint(tree.root);

tree.insert(2);

prettyPrint(tree.root);

tree.remove(8);

prettyPrint(tree.root);
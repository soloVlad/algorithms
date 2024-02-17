const { Tree } = require('./Tree');

const data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(data);

tree.print();

tree.insert(2);

tree.print();

tree.remove(8);

tree.print();

const found = tree.find(67);

console.log(found.data, found.left?.data, found.right?.data);

console.log(tree.levelOrder((node) => {
  return (node.data * 100);
}))

console.log(tree.inOrder());

const seven = tree.find(7);

console.log(tree.height(seven));
console.log(tree.depth(seven));

console.log(tree.checkIsBalanced());

tree.insert(2.5);
tree.print();

console.log(tree.checkIsBalanced());
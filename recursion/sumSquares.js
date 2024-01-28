// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists

// Sample:
// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1
// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

const sumSquares = (array) => {
  if (array.length === 0) return 0;

  const first = array.shift();

  if (typeof first === 'number') {
    return first ** 2 + sumSquares(array);
  }

  return sumSquares(first) + sumSquares(array);
}

const l1 = [1, 2, 3];
console.log(sumSquares(l1)); // 1 + 4 + 9 = 14

const l2 = [[1, 2], 3];
console.log(sumSquares(l2)); // 1 + 4 + 9 = 14

const l3 = [[[[[[[[[1]]]]]]]]];
console.log(sumSquares(l3)); // 1 = 1

const l4 = [10, [[10], 10], [10]];
console.log(sumSquares(l4)); // 100 + 100 + 100 + 100 = 400
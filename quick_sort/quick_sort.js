// pivot is the first element of array

function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr.shift();
  const right = [];
  const left = [];

  arr.forEach(num => {
    if (num <= pivot) right.push(num)
    else left.push(num);
  });

  return [...quickSort(right), pivot, ...quickSort(left)];
}

const arr = [1, 12, 32, 11, 10, 7, 34, 22, 5];
console.log(quickSort(arr));
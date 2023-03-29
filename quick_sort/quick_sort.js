// pivot is the first element of array

function quick_sort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const right = [];
  const left = [];
  arr.shift();
  arr.forEach(num => {
    if (num <= pivot) right.push(num)
    else left.push(num);
  });
  return [].concat(quick_sort(right), [pivot], quick_sort(left));
}

const arr = [1, 12, 32, 11, 10, 7, 34, 22, 5];
console.log(quick_sort(arr));
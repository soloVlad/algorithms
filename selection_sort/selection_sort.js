function findMinimumIndex(arr) {
  return arr.reduce((minIndex, current, index) => current < arr[minIndex] ? index : minIndex, 0);
}

function selectionSort(arr) {
  const sortedArray = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let minimumIndex = findMinimumIndex(arr);
    sortedArray.push(arr[minimumIndex]);
    arr.splice(minimumIndex, 1);
  }
  return sortedArray;
}

const data = [32, 12, 5, 62, 8, 16, 14];
console.log(selectionSort(data));
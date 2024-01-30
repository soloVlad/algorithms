const mergeSort = (array) => {
  if (array.length === 1) return array;

  const midIndex = Math.ceil(array.length / 2);

  const leftSorted = mergeSort(array.slice(0, midIndex));
  const rightSorted = mergeSort(array.slice(midIndex));

  const sortedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!rightSorted.length) {
      sortedArray.push(...leftSorted);
      break;
    }

    if (!leftSorted.length) {
      sortedArray.push(...rightSorted);
      break;
    }

    if (leftSorted[0] < rightSorted[0]) {
      sortedArray.push(leftSorted.shift());
    } else {
      sortedArray.push(rightSorted.shift());
    }
  }

  return sortedArray;
}

const data = [7, 2, 5, 4, 1, 6, 0, 3];

console.log(mergeSort(data));
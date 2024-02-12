const bubbleSort = (data) => {
  const arr = [...data];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

const data = [1, 5, 2, 11, 5, 7];

console.log(bubbleSort(data));
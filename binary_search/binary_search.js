function binarySearch(array, element) {
  let first = 0;
  let last = array.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (array[mid] === element) return mid;
    if (array[mid] < element) first = mid + 1;
    else last = mid - 1;
  }

  return null;
}

const data = [1, 2, 5, 6, 8, 14, 16];
const elements = [14, 32, 15, 2, 1];

elements.forEach(element => console.log(element, binarySearch(data, element)));


function binarySearch(array, element, first = 0, last = array.length - 1) {
  if (first > last) return null;

  let mid = Math.floor(first + last) / 2;
  if (array[mid] === element) return mid;
  if (array[mid] < element) return binarySearch(array, element, mid + 1, last);
  else return binarySearch(array, element, first, mid - 1);
}

const data = [1, 2, 5, 6, 8, 14, 16];
const elements = [14, 32, 15, 2, 1];

elements.forEach(element => console.log(element, binarySearch(data, element)));


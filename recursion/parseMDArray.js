// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers stored inside this array

// Sample:
// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

const getTotalNumberOfIntegers = (array) => {
  if (array.length === 0) return 0;

  const firstItem = array.shift();

  if (Array.isArray(firstItem)) {
    return getTotalNumberOfIntegers(firstItem) + getTotalNumberOfIntegers(array);
  }

  return Number.isInteger(firstItem) + getTotalNumberOfIntegers(array);
}

console.log(getTotalNumberOfIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]))
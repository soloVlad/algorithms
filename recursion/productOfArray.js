// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of 
// numbers and returns the product of them all

// Sample:
// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60

const productOfArray = (array) => {
  if (array.length === 1) return array[0];
  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));

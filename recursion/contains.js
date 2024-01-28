// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. 
// It returns true if the object contains that value.

// Sample:
// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

const contains = (obj, searchValue) => {
  for (let value of Object.values(obj)) {
    if (value === searchValue) return true;

    if (typeof value === 'object' && contains(value, searchValue)) {
      return true;
    }
  }

  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
}

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, "foo");

console.log(hasIt);
console.log(doesntHaveIt);


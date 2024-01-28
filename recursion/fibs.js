// Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

const fibs = (n, first = 0, second = 1) => {
  if (n === 1) return [first];

  return [first, ...fibs(n - 1, second, second + first)];
}

console.log(fibs(8));
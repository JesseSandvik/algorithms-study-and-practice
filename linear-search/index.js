// Linear Search Algorithm

/**
 * Given an array of n elements, write a function that searches for a given element x.
 * If x is present in the array of n elements, return the index. Else, return -1.
 */

function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

const numbers = [1, 5, 6, 8, 2, 4, 3, 11, 18];

console.log(linearSearch(numbers, 4));
// Expected output is 5, which is the 6th index in the array.

console.log(linearSearch(numbers, 27));
// Expected output is -1, since 27 is not present in the above array.

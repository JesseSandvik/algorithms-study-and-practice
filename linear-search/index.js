// Linear Search Algorithm

/**
 * Given an array of n elements, write a function that searches for a given element x.
 * If x is present in the array of n elements, return the index. Else, return -1.
 */

// Time complexity O(n) || Space Complexity O(1)
function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}

const numbers = [1, 5, 6, 8, 2, 4, 3, 11, 18];

console.log("linear search found element", linearSearch(numbers, 4));
// Expected output is 5, which is the 6th index in the array.

console.log("linear search not found element", linearSearch(numbers, 27));
// Expected output is -1, since 27 is not present in the above array.

/**
 * Linear search is rarely used practically because other search algorithms
 * such as binary search and hash tables allow significantly faster searching compared to Linear search.
 */

// Improve Linear search

/**
 * This has the same time/space complexity, however, we increase the odds of finding our element faster
 * by comparing elments at both the first and last pointers to the element that we are searching for.
 */
function linearSearchImproved(array, element) {
  let first = 0;
  let last = array.length - 1;

  while (first < last) {
    if (array[first] === element) {
      return first;
    } else if (array[last] === element) {
      return last;
    } else {
      first++;
      last--;
    }
  }
  return -1;
}

console.log("improved linear search", linearSearchImproved(numbers, 3));

/**
 * Because we base out space/time complexity on the worst case scenario,
 * the worse case is still that we iterate through the entire array without finding the element that
 * we are searching for.
 */

// Recursive approach

function recursiveLinearSearch(array, element, index = 0) {
  const size = array.length;

  if (index > size - 1) {
    return -1;
  } else if (array[index] === element) {
    return index;
  } else {
    return recursiveLinearSearch(array, element, index + 1);
  }
}

console.log("recursive, empty array", recursiveLinearSearch([], 3));
console.log("recursive, found element", recursiveLinearSearch(numbers, 3));
console.log("recursive not-found element", recursiveLinearSearch(numbers, 13));

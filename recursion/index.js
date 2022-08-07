/**
 * Recursion is a problem-solving method that involves a function calling itself. In each call, the problem is broken down into
 * progressively smaller sub-problems until a problem is small enough to be solved trivially.
 *
 * Recursive problems have two distinct characteristics:
 * 1) a base case(s) or terminating condition. Recursive calls need to stop at some point.
 * 2) the recursive call(s) where the function is calling itself.
 *
 * Recursion is an alternative to iterative solutions.
 */

/**
 * -- Factorial --
 *
 * the factorial for any positive integer n is written as n!
 * it is defined to be the product of all integers between 1 and n
 */

function recursiveFactorial(n) {
  if (n === 1) return 1;

  return n * recursiveFactorial(n - 1);
}

function recursiveSum(n) {
  if (n === 1) return 1;

  return n + recursiveSum(n - 1);
}

function bottomUpFactorial(n) {
  console.log("Forward phase", n);

  if (n <= 1) {
    console.log("Base Case!");
    return 1;
  }

  const factorialProduct = bottomUpFactorial(n - 1);
  console.log(`Backward phase: ${n} * ${n - 1}`);
  return n * factorialProduct;
}

function topDownFactorial(n, total = 1) {
  console.log(`Forward Phase: ${n} * ${total}`);

  if (n <= 1) {
    console.log("Base Case!");
    return total;
  }

  total = topDownFactorial(n - 1, total * n);

  console.log(`Backward Phase: ${n}, ${total}`);
  return total;
}

var fib = function (n) {
  console.log(`Forward Phase:   ${n}`);
  if (n === 0 || n === 1) {
    console.log(`Base Case:     ${n}`);
    return n;
  }

  const fibOne = fib(n - 1);
  const fibTwo = fib(n - 2);
  console.log(`Backward Phase:    ${n - 1}, ${n - 2}`);
  return fibOne + fibTwo;
};

console.log(fib(4));

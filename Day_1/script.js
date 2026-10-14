// JavaScript Problem Solving - Day 1 (all 10 solutions)
// Run with:  node day1_solutions.js

// Problem 1: Sum of 1 to N
function sumToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sumToN(5)); // 15
console.log(sumToN(10)); // 55
console.log(sumToN(1)); // 1
console.log(sumToN(0)); // 0
console.log(sumToN(100)); // 5050

// Problem 2: Multiplication Table
function tableOf(n) {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(n * i);
  }
  return result;
}
console.log(tableOf(3)); // [3, 6, 9, ..., 30]
console.log(tableOf(1)); // [1, 2, 3, ..., 10]
console.log(tableOf(0)); // ten zeros

// Problem 3: Average of an Array
function average(arr) {
  if (arr.length === 0) {
    return 0; // avoid 0 / 0 = NaN
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(average([2, 4, 6])); // 4
console.log(average([10])); // 10
console.log(average([1, 2])); // 1.5
console.log(average([-2, 2])); // 0
console.log(average([])); // 0

// Problem 4: Sum of Even Numbers
function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEven([1, 3, 5])); // 0
console.log(sumEven([2, 4])); // 6
console.log(sumEven([-2, 3, 4])); // 2
console.log(sumEven([])); // 0

// Problem 5: Count Positive, Negative and Zero
function countSigns(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  return { positive: positive, negative: negative, zero: zero };
}
console.log(countSigns([3, -1, 0, 5, -7, 0])); // { positive: 2, negative: 2, zero: 2 }
console.log(countSigns([1, 2, 3])); // { positive: 3, negative: 0, zero: 0 }
console.log(countSigns([])); // { positive: 0, negative: 0, zero: 0 }

// Problem 6: Largest of Three Numbers
function maxOfThree(a, b, c) {
  let largest = a;
  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}
console.log(maxOfThree(3, 9, 5)); // 9
console.log(maxOfThree(10, 2, 7)); // 10
console.log(maxOfThree(-1, -5, -3)); // -1
console.log(maxOfThree(4, 4, 4)); // 4
console.log(maxOfThree(1, 8, 8)); // 8
console.log(maxOfThree(8, 8, 1)); // 8 (the case that broke the old version)

// Problem 7: Count a Character in a String
function countChar(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    }
  }
  return count;
}
console.log(countChar("banana", "a")); // 3
console.log(countChar("hello", "l")); // 2
console.log(countChar("hello", "z")); // 0
console.log(countChar("Pakistan", "a")); // 2
console.log(countChar("", "a")); // 0

// Problem 8: FizzBuzz
function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz"); // must be checked first
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(fizzBuzz(5)); // [1, 2, "Fizz", 4, "Buzz"]
console.log(fizzBuzz(3)); // [1, 2, "Fizz"]
console.log(fizzBuzz(1)); // [1]
console.log(fizzBuzz(0)); // []
console.log(fizzBuzz(15)); // last item "FizzBuzz"

// Problem 9: Find the Index of a Number
function findIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // first match: return right away
    }
  }
  return -1; // whole array checked, not found
}
console.log(findIndexOf([4, 8, 15, 16], 15)); // 2
console.log(findIndexOf([4, 8, 15, 16], 4)); // 0
console.log(findIndexOf([4, 8, 15, 16], 23)); // -1
console.log(findIndexOf([5, 5, 5], 5)); // 0
console.log(findIndexOf([], 1)); // -1

// Problem 10: Sum of Digits
function sumDigits(n) {
  let total = 0;
  while (n > 0) {
    total += n % 10; // last digit
    n = Math.floor(n / 10); // remove last digit
  }
  return total;
}
console.log(sumDigits(123)); // 6
console.log(sumDigits(9)); // 9
console.log(sumDigits(0)); // 0
console.log(sumDigits(4059)); // 18
console.log(sumDigits(1000)); // 1
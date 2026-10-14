function MultiplyArr(Arr) {
  if (Arr.length === 0) {
    return "Array is empty";
  }
  let total = 1;
  for (let i = 0; i < Arr.length; i++) {
    total *= Arr[i];
  }
  return total;
}

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function capitalizeFirst(word) {
  if (word.length === 0) {
    return "empty string";
  }
  let res = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    res += word[i];
  }
  return res;
}

function countCapitals(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
    }
  }
  return count;
}

function countWords(sentence) {
  let tot = 0;
  if (sentence.length === 0) {
    return tot;
  }
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      tot = tot + 1;
    }
  }
  return tot + 1;
}

function power(base, exp) {
  let pow = 1;
  for (let i = 1; i <= exp; i++) {
    pow = pow * base;
  }
  return pow;
}

function findMinMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min: min, max: max };
}

function isPrime(n) {
  if (n === 0 || n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

function hasDuplicate(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return false;
  }
  for (let check = 0; check < arr.length; check++) {
    for (let i = check + 1; i < arr.length; i++) {
      if (arr[check] === arr[i]) {
        return true;
      }
    }
  }
  return false;
}

console.log("Problem 11: Product of an Array");
console.log(MultiplyArr([1, 2, 3, 4]));
console.log(MultiplyArr([]));
console.log(MultiplyArr([1, -3, 5, 7]));
console.log(MultiplyArr([5]));
console.log(MultiplyArr([4, 0, 6]));

console.log("Problem 12: Reverse an Array");
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([1, 2, 2, 3]));
console.log(reverseArray([]));
console.log(reverseArray([2]));

console.log("Problem 13: Capitalize the First Letter");
console.log(capitalizeFirst("hello"));
console.log(capitalizeFirst("pakistan"));
console.log(capitalizeFirst("a"));
console.log(capitalizeFirst("javaScript"));
console.log(capitalizeFirst(""));

console.log("Problem 14: Count Capital Letters");
console.log(countCapitals("Hello World"));
console.log(countCapitals("abc"));
console.log(countCapitals("ABC"));
console.log(countCapitals("a1B2"));
console.log(countCapitals(""));

console.log("Problem 15: Count Words in a Sentence");
console.log(countWords("I love JavaScript"));
console.log(countWords("hello"));
console.log(countWords("one two"));
console.log(countWords("a b c d e"));
console.log(countWords(""));

console.log("Problem 16: Power of a Number");
console.log(power(2, 3));
console.log(power(5, 0));
console.log(power(3, 1));
console.log(power(10, 4));
console.log(power(0, 5));

console.log("Problem 17: Find Min and Max Together");
console.log(findMinMax([3, 7, 2, 9, 4]));
console.log(findMinMax([5]));
console.log(findMinMax([-3, -1, -8]));
console.log(findMinMax([]));

console.log("Problem 18: Prime Number Check");
console.log(isPrime(7));
console.log(isPrime(2));
console.log(isPrime(1));
console.log(isPrime(0));
console.log(isPrime(9));
console.log(isPrime(20));

console.log("Problem 19: Fibonacci Series");
console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(2));
console.log(fibonacci(1));
console.log(fibonacci(0));

console.log("Problem 20: Has Duplicate");
console.log(hasDuplicate([1, 2, 3, 1]));
console.log(hasDuplicate([1, 2, 3]));
console.log(hasDuplicate([5, 5]));
console.log(hasDuplicate([7]));
console.log(hasDuplicate([]));

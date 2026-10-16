//===============================================Solution=========================
// ===== Set 5: Problems 41-50 (Complete Solutions) =====

// 41: Reverse the Words
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

// 42: Longest Word (for loop, no sort/reduce)
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      // > so tie mein pehla jeete
      longest = words[i];
    }
  }
  return longest;
}

// 43: URL Slug
function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

// 44: Mask Card
function maskCard(num) {
  if (num.length <= 4) return num;
  return "*".repeat(num.length - 4) + num.slice(-4);
}

// 45: Double the Evens
function doubleEvens(arr) {
  return arr.filter((x) => x % 2 === 0).map((x) => x * 2);
}

// 46: Flatten (method 1: nested loops)
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]);
    }
  }
  return result;
}
// method 2: flat()
function flattenWithFlat(arr) {
  return arr.flat();
}

// 47: Sort Numbers (original unchanged)
function sortNumbers(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// 48: Cart Total (method 1: for loop)
function cartTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }
  return total;
}
// method 2: reduce
function cartTotalReduce(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// 49: Names of Passed Students
function passedNames(students) {
  return students.filter((s) => s.marks >= 50).map((s) => s.name);
}

// 50: Word Count Object
function wordCount(sentence) {
  if (sentence === "") return {}; // "".split(" ") gives [""] - trap
  let words = sentence.split(" ");
  let result = {};
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  return result;
}

// ===== Tests =====
console.log(
  reverseWords("hello world"),
  "|",
  reverseWords("I love JS"),
  "|",
  reverseWords("one"),
  "|",
  JSON.stringify(reverseWords("")),
);
console.log(
  longestWord("I love programming"),
  longestWord("cat dog"),
  longestWord("hi there you"),
  longestWord("a"),
  JSON.stringify(longestWord("")),
);
console.log(
  slugify("Hello World"),
  slugify("My First Blog Post"),
  slugify("A B C"),
  slugify("JavaScript"),
  JSON.stringify(slugify("")),
);
console.log(
  maskCard("1234567812345678"),
  maskCard("12345"),
  maskCard("1234"),
  maskCard("12"),
  JSON.stringify(maskCard("")),
);
console.log(
  doubleEvens([1, 2, 3, 4]),
  doubleEvens([2]),
  doubleEvens([-2, 0, 5]),
  doubleEvens([1, 3]),
  doubleEvens([]),
);
console.log(
  flatten([[1, 2], [3], [4, 5]]),
  flatten([["a"], ["b", "c"]]),
  flatten([[], [1]]),
  flatten([[]]),
  flatten([]),
);
console.log(flattenWithFlat([[1, 2], [3], [4, 5]]));
const nums = [10, 9, 1, 100];
console.log(
  sortNumbers(nums),
  nums,
  sortNumbers([3, -1, 2]),
  sortNumbers([2, 2, 1]),
  sortNumbers([]),
);
const cart = [
  { name: "pen", price: 10, qty: 3 },
  { name: "book", price: 50, qty: 2 },
];
console.log(
  cartTotal(cart),
  cartTotalReduce(cart),
  cartTotal([{ name: "x", price: 5, qty: 0 }]),
  cartTotal([]),
);
const students = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 45 },
  { name: "Ahmed", marks: 50 },
];
console.log(
  passedNames(students),
  passedNames([{ name: "Bil", marks: 50 }]),
  passedNames([{ name: "Zed", marks: 10 }]),
  passedNames([]),
);
console.log(
  wordCount("the cat the dog"),
  wordCount("go go go"),
  wordCount("Go go"),
  wordCount("a"),
  wordCount(""),
);

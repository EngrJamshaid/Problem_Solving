// sol:1
// function MultiplyArr(Arr) {
//   // console.log(Arr);
//   if (Arr.length == 0) {
//     return "Array is empty";
//   }
//   let total = 1;
//   for (let i = 0; i < Arr.length; i++) {
//     total *= Arr[i];
//   }
//   return total;
// }
// console.log(MultiplyArr([1, 2, 3, 4]));
// console.log(MultiplyArr([]));
// console.log(MultiplyArr([1,-3,5,7]));
// console.log(MultiplyArr([5]));
// console.log(MultiplyArr([4, 0, 6]));

// ___________________________________________________________________
// Sol2:

// function reverseArray(arr) {
//   // your code here
// //   console.log(arr);
// // console.log(arr.length);

// let newArr=[];
// for(let i=arr.length-1;i>=0;i--){
//     newArr.push(arr[i]);
// }
// return newArr;

// }
// // console.log(reverseArray([1, 2, 3, 4]));
// // console.log(reverseArray(["a","b","c"]));
// // console.log(reverseArray([1,2,2,3]));
// // console.log(reverseArray([]));
// console.log(reverseArray([2]));

// ______________________________________________________________

// Sol3:

// function capitalizeFirst(word) {
//   if (word.length == 0) {
//     return "empty string";
//   }
//   let res = word[0].toUpperCase();
//   for (let i = 1; i < word.length; i++) {
//     res += word[i];
//   }
//   return res;
// }
// console.log(capitalizeFirst("hello"));

// console.log(capitalizeFirst("pakistan"));    // "Pakistan"
// console.log(capitalizeFirst("a"));           // "A"
// console.log(capitalizeFirst("javaScript"));  // "JavaScript"
// console.log(capitalizeFirst(""));            // "

// ______________________________________________________________
// Sol4:

// function countCapitals(str) {
//   // your code here
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
// if(str[i] >= "A" && str[i]<= "Z")
// {
// count++;
//   }
// }
//   return count;
// }

// console.log(countCapitals("Hello World")); // 2
// console.log(countCapitals("abc"));          // 0
// console.log(countCapitals("ABC"));          // 3
// console.log(countCapitals("a1B2"));         // 1
// console.log(countCapitals(""));             // 0

// _________________________________________________
// sol:5
// function countWords(sentence) {
//   // your code here
//    let tot=0;
// if(sentence.length==0){
//     return tot=sentence.length;
// }

//   for(let i=0;i<sentence.length;i++){
//     if(sentence[i]===" "){
//         tot=tot+1;
//     }

//   }
//   return tot+1;
// }

// console.log(countWords("I love JavaScript"));  // 3
// console.log(countWords("hello"));              // 1
// console.log(countWords("one two"));            // 2
// console.log(countWords("a b c d e"));          // 5
// console.log(countWords(""));                   // 0

// __________________________________________________

// sol:6
// function power(base, exp) {
//   // your code here
//   let pow=1;
//  for(let i=1;i<=exp;i++)
//  {
// pow=pow*base;

//  }
//  return pow;
// }
// console.log(power(2, 3));   // 8
// console.log(power(5, 0));   // 1
// console.log(power(3, 1));   // 3
// console.log(power(10, 4));  // 10000
// console.log(power(0, 5));   // 0

// _________________________________________________________
// sol:7
//
// function findMinMax(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }

//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return { min: min, max: max };
// }

// console.log(findMinMax([3, 7, 2, 9, 4]));
// // { min: 2, max: 9 }

// console.log(findMinMax([5]));
// // { min: 5, max: 5 }

// console.log(findMinMax([-3, -1, -8]));
// // { min: -8, max: -1 }

// console.log(findMinMax([]));
// // null

// _________________________________________________________
// sol:8

// function isPrime(n) {
//   if(n==0 || n==1){
//     return false;
//   }
//   // your code here
//   for(let i=2;i<n;i++){
//     if(n%i==0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(7));    // true
// console.log(isPrime(2));    // true
// console.log(isPrime(1));    // false
// console.log(isPrime(0));    // false
// console.log(isPrime(9));    // false
// console.log(isPrime(20));   // false

// _________________________________________________________
// // sol:9
// function fibonacci(n) {
//   if (n === 0) return [];
//   if (n === 1) return [0];

//   let result = [0, 1];
//   for (let i = 2; i < n; i++) {
//     result.push(result[i - 1] + result[i - 2]);
//   }
//   return result;
// }
// console.log(fibonacci(7));

//________________________________________________________________
// Sol:10

// function hasDuplicate(arr) {
//   if (arr.length == 0 || arr.length == 1) {
//     return false;
//   }
//   // let check = arr[0];
//   // istrue = true;

//   for (let check = 0; check < arr.length; check++) {
//     for (let i = check + 1; i < arr.length; i++) {
//       if (arr[check] === arr[i]) {
//         return true;
//       } else {
//       }

//     }

//   }
// return false; 
// }
// console.log(hasDuplicate([1, 2, 3, 1])); // true
// console.log(hasDuplicate([1, 2, 3])); // false
// console.log(hasDuplicate([5, 5])); // true
// console.log(hasDuplicate([7])); // false
// console.log(hasDuplicate([])); // false

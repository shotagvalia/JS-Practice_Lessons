const prompt = require(`prompt-sync`)();

// 4.2 -> Fibonacci Sequence
// Write a program that prompts the user for a number and generates the Fibonacci sequence up to that number. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. Use a loop and conditional statements to generate the sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

// function fibonacci(number) {
//   if (number <= 0) {
//     return "Wrong input";
//   } else {
//     let fibonacci = [0, 1];

//     while (number > fibonacci[fibonacci.length - 1]) {
//       let newItem =
//         fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
//       if (newItem > number) {
//         break;
//       }
//       fibonacci.push(newItem);
//     }

//     return fibonacci;
//   }
// }

// let input = parseInt(prompt("Enter Number: "));
// console.log(fibonacci(input));

// ---------------------------------------------------------------------------

// 4.4 -> Prime Number Generator
// Write a program that prompts the user for a range of numbers and generates all prime numbers within that range. Use a loop and conditional statements to check if each number is prime and output the prime numbers.

// function isPrime(number) {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function generatePrimeNumbers(start, end) {
//   let primeNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       primeNumbers.push(i);
//     }
//   }

//   return primeNumbers;
// }

// console.log(generatePrimeNumbers(1, 100));

// ---------------------------------------------------------------

// 6.1 -> Anagram Checker
// Write a function that takes two strings as input and determines whether they are anagrams of each other. Anagrams are words or phrases that use the same characters in a different order.

// function isAnagram(str1, str2) {
//   str1 = str1.replaceAll(" ", "").toLowerCase();
//   str2 = str2.replaceAll(" ", "").toLowerCase();

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");
//   return sortedStr1 === sortedStr2;
// }

// console.log(isAnagram("B itc amp", "ti bpa mc"));

// ------------------------------------------------------------------

// 6.5 -> Unique Elements
// Write a function that takes an array of numbers as input and returns a new array containing only the unique elements of the original array. Remove any duplicate numbers.
// [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 7] -> [1, 2, 3, 4, 5, 6, 7]

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// const removeDuplicates = (arr) => [...new Set(arr)];

// console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 7]));

// ------------------------------------------------------------

// 6.9 -> Deep Clone
// Write a function that performs a deep clone of an object. The function should create a new object with the same structure and values as the original, without any reference to the original object.

// function deepClone(obj) {
//   return { ...obj };
//   //   return JSON.parse(JSON.stringify(obj));
// }

// console.log(deepClone({ name: "temo", age: 18 }));

// let obj1 = { name: "temo", age: 18 }; // 0x01234
// let obj2 = { ...obj1 }; // 0x789
// obj2.name = "gio";
// console.log(obj1);
// console.log(obj2);

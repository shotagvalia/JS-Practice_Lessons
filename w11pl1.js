// 2.1 - Find the Maximum Subarray Sum: Write a function that takes an array of integers as input and finds the contiguous subarray within the array that has the largest sum. Return the sum of that subarray. For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, which corresponds to the sum of the subarray [4, -1, 2, 1].

// function sumOfSubarray(arr) {
//   let maxSumOfSubarray = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum > maxSumOfSubarray) {
//         maxSumOfSubarray = sum;
//       }
//     }
//   }

//   return maxSumOfSubarray;
// }

// console.log(sumOfSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane's algorithm

// -----------------------------------------------------------------

// 2.2 - Rotate Array: Write a function that rotates an array of n elements to the right by k steps. For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3, the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].

// function rotate(arr, k) {
//   let newArr = [...arr];
//   for (let i = 0; i < k; i++) {
//     let poppedItem = newArr.pop();
//     newArr.unshift(poppedItem);
//   }

//   return newArr;
// }

// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotate(array, 3));

// ------------------------------------------------------------------

// 3.1 - Object Deep Comparison: Write a function that compares two objects deeply and returns true if they are equal, and false otherwise. The function should handle nested objects and arrays. For example, given the objects { a: 1, b: { c: 2 } } and { a: 1, b: { c: 2 } }, the function should return true.

// function comparison(obj1, obj2) {
//   const entriesObj1 = Object.entries(obj1);
//   const entriesObj2 = Object.entries(obj2);

//   if (entriesObj1.length !== entriesObj2.length) {
//     return false;
//   }

//   for (let i = 0; i < entriesObj1.length; i++) {
//     const [key1, value1] = entriesObj1[i];
//     const [key2, value2] = entriesObj2[i];

//     if (key1 !== key2) {
//       return false;
//     }

//     if (typeof value1 === "object" && typeof value2 === "object") {
//       if (!comparison(value1, value2)) {
//         return false;
//       }
//     } else if (value1 !== value2) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(comparison({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 2 } }));

// function comparisonStringify(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// console.log(comparisonStringify({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));

// 0x0123
// let obj1 = {
//   name: "temo",
//   age: 18,
// };

// // 0x875843
// let obj2 = {
//   name: "temo",
//   age: 18,
// };

// console.log(obj1 === obj2);

// let num1 = 10;
// let num2 = 10;
// console.log(num1 === num2);

// let obj3 = {
//   name: "temo",
//   age: 18,
// };
// let stringObj = JSON.stringify(obj3);
// let backToObj = JSON.parse(stringObj);
// console.log(typeof backToObj);

// -------------------------------------------------------------------------
// 3.4 - Object Prototype Extension: Write a function that extends an object's prototype with additional methods. The additional methods should perform specific operations on the object's properties. For example, extend the Array prototype with a method called sum() that calculates the sum of all elements in the array.

// პროტოტიპი არის მექანიზმი/გეგმა რომელიც განსაზღვრავს ობიექტების საერთო ფროფერთებსა თუ მეთოდებს და საშუალებას აძლევს ობიექტებს, რომ გამოიყენონ საერთო ფუნქციები.

// Array.prototype.sum = function () {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//   }

//   return sum;
// };

// let numbers = [1, 2, 3, 4, 5];
// let numbers1 = [6, 7, 8];
// console.log(numbers.sum());
// console.log(numbers1.sum());

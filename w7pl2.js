// 1.1: Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2

// function countOccurences(string, char) {
//     let counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             counter++;
//         }
//     }
//     return counter;
// }

// function countOccurences(string, char) {
//     let answer = string.split("").reduce((counter, currentValue) => {
//         if (currentValue === char) {
//             return ++counter;
//         }
//         return counter;
//     }, 0)

//     return answer;
// }

// console.log(countOccurences("w3resource.com", "o"))

// 1.2: Write a JavaScript function to apply the Bubble Sort algorithm.
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

// function bubbleSort(arr) {
//     return arr.sort((a, b) => b - a);
// }

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 // let temp = arr[j];
//                 // arr[j] = arr[j + 1];
//                 // arr[j + 1] = temp;

//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }

//     return arr;
// }

// console.log(bubbleSort([345, 546, 122, 12,4, 84, 98, 64, 9, 213, 3223, 455, 23, 4, 1]))

// swapping two values
// let a = 5;
// let b = 10;

// // let temp = a;
// // a = b;  // 10
// // b = temp; // 5

// [a, b] = [b, a]

// console.log(a, b)

// 1.5: Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// function convert(string) {
//     let words = string.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// map

// function convert(string) {
//     return string.split(" ").map((current) => current[0].toUpperCase() + current.slice(1)).join(" ");
// }

// ASCII table

// let string = "zwsaertfdcvbghyujn";
// console.log(string.split("").sort().join(""))

// // a -> 97
// // z - > 122

// console.log(convert("the quick brown fox"));

// დაწერეთ პროგრამა რომელიც გაფილტრავს მომხმარებლის todo_ებს შესრულების მიხედვით

// let tasks = [
//     {
//         id: 1,
//         todo: "exercise",
//         completed: false,
//     },
//     {
//         id: 2,
//         todo: "prepare for exams",
//         completed: true,
//     },
//     {
//         id: 3,
//         todo: "do bitcamp assignment",
//         completed: true,
//     },
// ]

// console.log(tasks.filter((currentTodo) => currentTodo.completed === true));

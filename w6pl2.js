// 27. დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

// function findSmallestEllement(arr) {
//     // return arr.sort((a, b) => a - b)[0]

//     // return Math.min(...arr)

//     let min = Infinity;
//     for (let number of arr) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }

// console.log(findSmallestEllement([100, 200, 3, 1]))

// let arr1 = [1, 2, 3];
// let arr2 = [0, 1, 3, 4, ...arr1, 5, 6, 7];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3)

// 28. დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

// function includes(arr, element) {
//     // return arr.includes(element);

//     // return arr.indexOf(element) !== -1
// }

// console.log(includes([1, 2, 3], 3))

// // console.log([1, 2, 3].indexOf(4))

// 29.დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
// function remove(arr, element) {
//     // let index = arr.indexOf(element);
//     // arr.splice(index, 1);
//     // return arr;
// }

// console.log(remove([1, 2, 3], 1))

// 30. დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.

// function count(arr, element) {
//     let counter = 0;

//     for (let item of arr) {
//         if (item === element) counter++;
//     }
//     return counter;
// }

// console.log(count([1, 2, 3, 3, 3, 3, 4], 3))

// 31. დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.

// function longestWord(sentence) {
//     let words = sentence.split(" ");
//     let longestWord = words[0];
//     for (let element of words) {
//         if (element.length > longestWord.length) {
//             longestWord = element;
//         }
//     }
//     return longestWord.length;
// }

// console.log(longestWord("My name is Temuri"))

// 32. დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.

// function palindrome(word) {
//     return word.split("").reverse().join("") === word;
// }
// const palindrome = (word) => word.split("").reverse().join("") === word;

// console.log(palindrome("level"));

// დესტრუქტურიზაცია - destructuring

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [11, 12, 13]
// let [num1, num2, num3, ...numberArr] = [...arr1, ...arr2];
// console.log(num1, num2, num3,)
// console.log(numberArr);

// let obj = {
//     name: "Temo",
//     age: 18,
//     hobby: "swimming"
// }

// let {age: AGE, hobby: HOBBY, name: NAME} = obj;
// console.log(NAME, AGE, HOBBY);
// console.log(AGE);
// // console.log(age); // age is not defined, სახელი გადავარქვით და იმიტომ აღარ ეძებს obj-ში
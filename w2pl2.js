// 1. Generate random number between 0 and 1 and determine if it is less than 0.5, higher than 0.5 or equal to 0.5;
// დააგენერირე რანდომული რიცხვი 0_დან 1_მდე და გაარკვიე, ნაკლებია 0.5_ზე, მეტია 0.5_ზე თუ ტოლია 0.5_ის.

// let randomNumber = Math.random();
// if (randomNumber > 0.5) {
//     console.log("მეტია 0.5_ზე")
// } else if (randomNumber < 0.5) {
//     console.log("ნაკლებია 0.5_ზე")
// } else {
//     console.log("ტოლია 0.5_ის")
// }

// 2. Create a program that determines if a person is eligible to vote based on their age.
// შექმენი პროგრამა, რომელიც გაარკვევს, აქვს თუ არაადამიანს ხმის მიცემის უფლება

// let age = 18;
// if (age >= 18) {
//     console.log("დასაშვებია")
// } else {
//     console.log("არაა დასაშვები")
// }

// 3. Create a program that determines the grade of a student based on their score.
// შექმენი პროგრამა, რომელიც გაარკვევს სტუდენტის შეფასებას მისი ქულის მეშვეობით

// let score = 80;
// if (score > 90) {
//     console.log("A")
// } else if (score > 80) {
//     console.log("B")
// } else if (score > 70) {
//     console.log("C")
// } else if (score > 60) {
//     console.log("D")
// } else if (score > 50) {
//     console.log("E")
// } else {
//     console.log("ჩაიჭრა");
// }

// არასწორია!
// if (score > 50) {
//     console.log("E")
// } else if (score > 60) {
//     console.log("D")
// } else if (score > 70) {
//     console.log("C")
// }

// 4. Create a program that determines if a number is divisible by 3 and 5.
// შექმენი პროგრამა, რომელიც გაარკვევს, იყოფა თუ არა რიცვხი 3_სა და 5_ზე.
// modulus

// let number = 9;
// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("იყოფა")
// } else {
//     console.log("არ იყოფა")
// }

// 5. Create a program that determines if a number is between range of 100 and 200.
// დაწერე პროგრამა, რომელიც გაარკვევს, არის თუ არა რიცხვი 100_სა და 200_ს შორის.

// let number = 99;
// if (number >= 100 && number <= 200) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 6. Create a program that determines if a string starts with greeting ("Hello" or "Hi");
// დაწერე პროგრამა, რომელიც გაარკვევს, იწყება თუ არა სტრინგი მისალმებით.

// let string = "Hi, World!";
// if (string.startsWith("Hello") || string.startsWith("Hi")) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 7. Create a program that determines if a string includes one of the two substrings;
// დაწერე პროგრამა, რომელიც გაარკვევს, შეიცავს თუ არა სტრინგი ორიდან რომელიმე მონაკვეთს.

// let string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

// if (string.includes("Lorem") || string.includes("Ipsum")) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 8. Create a program that determines if a year is a leap year or not.
// დაწერე პროგრამა, რომელიც გაარკვევს, არის თუ არა წელი ნაკიანი.

// let year = 2023;
// if (year % 4 === 0) {
//     console.log("ნაკიანია")
// } else {
//     console.log("არ არის ნაკიანი")
// }

// 9. Create a program that determines if a variable is type of number, string or boolean.
// დაწერე პროგრამა, რომელიც გაარკვევს ცვლადის ტიპს(number, string ან boolean)

// let variable = 3;
// if (typeof variable === "number") {
//     console.log("number")
// } else if(typeof variable === "string") {
//     console.log("string")
// } else if (typeof variable === "boolean") {
//     console.log("boolean")
// }

// 10. Create a program that determines if a given string is longer than a specified length.
// დაწერე პროგრამა, რომელიც გაარკვევს, არის თუ არა სტრინგის სიგრძე კონკრეტულ რიცხვზე მეტი.

// let string = "Hello";
// if (string.length > 5) {
//     console.log("სტრინგის სიგრძე მეტია 5_ზე");
// } else if (string.length < 5) {
//     console.log("სტრინგის სიგრძე ნაკლებია 5_ზე");
// } else {
//     console.log("სტრინგის სიგრძე ტოლია 5_ის");
// }
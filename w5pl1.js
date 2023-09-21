// Call Stack

// 1. დაწერეთ რეკურსიული ფუნქცია, რომელიც დაადგენს რიცხვის ლუწ-კენტობას

// function isEven(number) {
//   if (number === 0) {
//     return true;
//   } else if (number === 1) {
//     return false;
//   } else if (number < 0) {
//     return isEven(-number);
//   } else {
//     return isEven(number - 2);
//   }
// }

// console.log(isEven(-2));
// console.log(isEven(12));
// console.log(isEven(17));

// (1) -> false
// (3) -> false
// (5) -> false

// 2. დაწერეთ რეკურსიული ფუნქცია, რომელიც გამოითვლის რიცხვის ფაქტორიალს

// ჩვეულებრივი მეთოდით

// function factorial(number) {
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result *= i;
//   }
//   return result;
// }

// რეკურსიული მეთოდით

// function factorial(number) {
//   if (number === 1) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }

// console.log(factorial(4));

// (1) -> 1
// (2) -> 2
// (3) -> 6
// (4) -> 24

// 3. დაწერე პროგრამა რეკურსიის გამოყენებით, რომელიც გამოაკონსოლებს მართკუთხა სამკუთხედს #_ებით. სიმაღლე ფუნქციას გადაეცემა არგუმენტად.

// function drawTriangle(height) {
//     if (height === 0) {
//         return;
//     }

//     drawTriangle(height - 1);

//     let row = "";
//     for (let i = 0; i < height; i++) {
//         row += "#"
//     }
//     console.log(row);
// }

// drawTriangle(5);

// (0) ->
// (1) -> #
// (2) -> ##
// (3) -> ###
// (4) -> ####
// (5) -> #####

// closure

// 4. closure_ის გამოყენებით დაწერეთ innerFunc და outerFunc ფუნქციები, რომლებიც საბოლოოდ გამოაკონსოლებენ მისალმებასა და სახელს, მაგალითად: "გამარჯობა, თემო"

//ვერსია 1

// function outerFunc(greeting) {
//     function innerFunc (name){
//         console.log(`${greeting}, ${name}`);
//     }
//     return innerFunc;
// }

// let greeting = outerFunc("გამარჯობა");
// console.log(greeting);
// greeting("შოთა");

//ვერსია 2

// function outerFunc(greeting) {
//     let localGreeting = greeting;

//     function innerFunc (name){
//         console.log(`${localGreeting}, ${name}`);
//     }
//     return innerFunc;
// }

// let greeting = outerFunc("გამარჯობა");
// greeting("შოთა");

// // console.log(typeof greeting);

// 5. დაწერეთ ორი - outerFunc და innerFunc ფუნქცია. შიდა ფუნქციამ უნდა გაზარდოს გარე ფუნქციის ლოკალური ცვლადი 1_ით და დააბრუნოს ის

// function outerFunc(count) {
//     // return function() {
//     //     return ++count;
//     // }

//     return () => ++count;
// }

// let counter = outerFunc(0);
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

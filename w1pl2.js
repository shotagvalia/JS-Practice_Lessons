// ----------------- Number Methods ------------------- //

// 1. Write a program to check if a number is positive integer
// დაწერეთ პროგრამა, რათა შეამოწმოთ, არის თუ არა რიცხვი მთელი რიცხვი.
//console.log(Number.isInteger("bitcamp"));
//console.log(Number.isInteger(40));

// 2. Write a program to convert string to number
// დაწერეთ პროგრამა, რათა სტრინგი გადააქციოთ რიცხვად ან პირიქით
//let num = 40;
//let string = num.toString();
//console.log(string);
//console.log(typeof string);
//console.log(typeof num);
//console.log(num);

// 3. Write a program to check if value is NaN(Not a Number)
// დაწერეთ პროგრამა, რათა შეამოწმოთ, არის თუ არა რაიმე მნიშვნელობა რიცხვი.

// let num = "";
// let check = isNaN(num);
// let check1 = typeof num == "number";
// console.log(check);
// console.log(check1);

// console.log(Number(""));

// // Number("")=0

// console.log("5" === 5); // false
// console.log("5" == 5);  // type coercion -ით True

// 4. Write a program which will round the number
// დაწერეთ პროგრამა, რომელიც დაამრგვალებს რიცხვს
// let num = 4.49;
// let roundedNum = Math.round(num);
// console.log(roundedNum);

// 5. Write a program to generate random integer from 0 to x
//დაწერე პროგრამა, რომელიც დააგენერირებს რანდომულ მთელ რიცხვს 0_დან x_მდე
// let x = 10;
// let random = Math.floor(Math.random() * x);
// console.log(random);

// 6. Write a program to generate random integer from x to y
// დაწერე პროგრამა, რომელიც დაგენერირებს რანდომულ მთელ რიცხვს x_დან y_მდე
// let x = 5;
// let y = 10;
// let range = y - x;
// let random = Math.floor(Math.random() * range) + x;
// console.log(random);

// 7. Write a program to round floating number to one hundredth;
// დაწერე პროგრამა, რომელიც დაამრგვალებს ათწილადს მეასადებამდე;

// let floatNum = 4.9876;
// let roundedNum = floatNum.toFixed(2);
// console.log(roundedNum);

// Math.sqrt()
// console.log(Math.sqrt(16));

// Math.abs();
// console.log(Math.abs(-10));

// -------------------- String methods ----------------------- //

// includes
// let str = "Bitcamp Front-End";
// console.log(str.includes("Front"));

// startsWith / endsWith

// let str = "Bitcamp Front-End";
// let check = str.startsWith("B");
// console.log(check);

// let str = "temuri.tsutskiridze.04@gmail.com";
// let check = str.endsWith("@gmail.com") || str.endsWith("@yahoo.com");
// console.log(check);

// replace;
// let str = "Hello, world!";
// let replacedString = str.replace("Hello", "Goodbye");
// console.log(replacedString);

// replaceAll;
// let str = "Hello, Hello world!";
// let replacedString = str.replaceAll("Hello", "Goodbye");
// console.log(replacedString);

// index
// let string = "Hello, World!";
// let index = string[string.length - 1];
// console.log(index);

// slice / substring
// let string = "Hello, World!";
// let slicedString = string.slice(3, 10);
// let slicedString1 = string.slice(-4, -1);
// console.log(slicedString);
// console.log(slicedString1);

// concat
// let string = "Hello";
// let str2 = " Homies";
// console.log(string.concat(" World!", str2));

// trim

// let str = "   Temuri    ";
// console.log(str.length);
// let trimedString = str.trim();
// let trimedStringStart = str.trimStart();
// console.log(trimedStringStart);
// let trimedStringEnd = str.trimEnd();
// console.log(trimedStringEnd.length);
// console.log(trimedStringEnd);

// padStart  /  padEnd
// let num = 12;
// let string = num.toString();
// let paddedStringStart = string.padStart(10, "0");
// let paddedStringEnd = string.padEnd(10, "0");
// console.log(paddedStringStart);
// console.log(paddedStringEnd);

// check if string's first character is uppercase
// let string = "bitcamp";
// let letter = string[0];
// console.log(letter === letter.toUpperCase());

//charAt
// let string = "Bitcmap";
// let letter = string.charAt(0);
// console.log(letter);

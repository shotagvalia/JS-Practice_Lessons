const prompt = require(`prompt-sync`)();

// დავწეროთ ფუნქცია,რომელიც გამოიტანს ორი რიცხვის ჯამს.

// function sum(first,second){
//     return first + second;
// }

// let number = sum(2,3);
// console.log(number);

// Arrow Functions მეთოდით

// თუ 1 პარამეტრია,მოკლე ჩანაწერით

// const square = x => x * x;
// console.log(square(3));

// თუ 2 ან მეტი პარამეტრია

// const square = (x,y)  => { return x * y };

// console.log(square(3,5));

// დავწეროთ ფუნქცია,რომელიც გამოიტანს ტექსტის სიგრძეს.

// function text(sentense){
//   return sentense.length;
// }

// console.log(text("hello world"))

// function text(sentense){
//   console.log(sentense.length);

// }

// text("hello world");

// function a(){
//     console.log("hello world");
// }

// დავწეროთ ფუნქცია,რომელიც შეამოწმებს არის თუარა რიცხვი კენტი.

// function kentia(num){
//     if(num % 2 ===0){
//         console.log("ar aris kenti");
//     }else{
//         console.log("kentia");
//     }
// }

// kentia(9)

// დავწეროთ ფუნქცია,რომელიც არგუმენტად მიიღებს რიცხვს და აბრუნებს რიცხვის სიგრძეს.

// function num(number){
//     let str = String(number);
//     return str.length;
// }

// console.log(num(12356));

// დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს
// 123

// function sumDigits(num){
//     let sum = 0;
//     let str = String(num);

//     for(let i = 0; i < str.length; i++){
//         sum+=Number(str[i]);
//     }
//     return sum;
// }

// console.log(sumDigits(123))

// დაწერეთ ფუნქცია სახელად min, რომელიც იღებს ორ არგუმენტს და აბრუნებს მათ მინიმუმს.

// function num(a,b){
//     if(a < b){
//         return a;
//     }else{
//         return b;
//     }
// }

// console.log(num(6,5))

// დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.

// function countBs(str){
//     let count = 0;

//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "B"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countBs("BytttB"));

// დავწეროთ ფუნქცია,რომელიც არგუმენტად იღებს სახელს და აბრუნებს მისალმებას.

// let name_for_human = prompt("sheiyvanet saxeli ")

// function greeting(){
//     console.log("გამარჯობა " + name_for_human);
// }

// greeting();

// დავწეროთ ფუნქცია,რომელიც გამოითვლის საშუალოს 2 რიცხვს შორის

// function calculate(first,second){
//     return (first+second)/2;
// }

// console.log(calculate(99,1));

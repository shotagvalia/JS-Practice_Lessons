const prompt = require(`prompt-sync`)();

// დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

// დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.

// for(let i=1;i<20;i++){
//     if(i %2 !==0){
//         continue;
//     }
//     console.log(i)
// }
// დაწერეთ პროგრამა, რომელიც იღებს რიცხვს ინფუთის სახით და ბეჭდავს კვირის შესაბამის დღეს switch/case-ის გამოყენებით. მაგალითად, თუ შეიყვანენ  1-ს, მან უნდა დაბეჭდოს "კვირა".

// let num=Number(prompt("რიცხვი "));

// switch(num){
//     case 1:
//         console.log("კვირა");
//         break;
//     case 2:
//         console.log("ორშაბათი");
//         break;
//     case 3:
//         console.log("სამშაბათი");
//         break;
//     case 4:
//         console.log("ოთხშაბათი");
//         break;
//     case 5:
//         console.log("ხუთშაბათი");
//         break;
//     case 6:
//         console.log("პარასკევი");
//         break;
//     case 7:
//         console.log("შაბათი")
//         break;
//     default:
//         console.log("არარის კვირის დღე")       
// }

// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს  შეყვანილი რიცხვი.

// let num=Number(prompt("რიცხვი "));

// for(let i=0;i<num;i++){
//     console.log("Hello!")
// }

// დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.

// let num=0;


// for(let i=1;i<=100;i++){
//     num+=i;
// }
// console.log(num)

//დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით

// let num=Number(prompt("ricxvi "));

// switch(num){
//     case 1:
//         console.log(31);
//         break;
//     case 2:
//         console.log(28);
//         break;
//     case 3:
//         console.log(31)
//         break;
//     case 4:
//         console.log(30)
//         break;
//     case 5:
//         console.log(31)
//         break;
//     case 6:
//         console.log(30)
//         break;
//     case 7:
//         console.log(31)
//         break;
//     case 8:
//         console.log(31)
//         break;
//     case 9:
//         console.log(30)
//         break;
//     case 10:
//         console.log(31)
//         break;
//     case 11:
//         console.log(30)
//         break;
//     case 12:
//         console.log(31)
//         break;
//     default:
//         console.log("arari es tve")
// }


// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.

// let num=prompt("ricxvi ");
// let secret=4;


// while(secret!==num){
//     num=Number(prompt("ricxvi "));
// }
// console.log("სწორია")


// დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"

// let grade=prompt("shefaseba ")

// switch(grade){
//     case "A":
//         console.log("შესანიშნავია");
//         break;
//     case "B":
//         console.log("ძალიან კარგია");
//         break;
//     case "C":
//         console.log("კარგია");
//         break;
//     case "D":
//         console.log("ნორმალურია");
//         break;
//     case "F":
//         console.log("ცუდია");
//         break;
//     default:
//         console.log("ტესტი არ უწერია")
// }

// დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".

// let correctPassword="12345"
// let password=prompt("password-   ");


// while(password!==correctPassword){
//     password=prompt("password-   ");
// }

// console.log("სწორი პაროლია")

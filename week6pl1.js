// Capitalize Names

// let word="hello bitcamp ioo";

// function capitalizeWords(str){
//     let splited=str.split(" ");
//     console.log(splited);
//     for(let i=0;i<splited.length;i++){
//         splited[i]=splited[i][0].toUpperCase()+splited[i].slice(1);

//     }
//     return splited.join(" ");

// }
// console.log(capitalizeWords(word));

// function capitalizeWords(str){
//     let splited=str.split(" ");

//     let capitalizeWord=splited.map((word)=>word[0].toUpperCase()+word.slice(1));

//   return capitalizeWord.join(" ");

// }
// console.log(capitalizeWords(word));

// Exercise 2: Sum of Odd Numbers

// let arr=[1,2,3,4,5,6,7];

// function odd(array){
//     let count=0;

//     let result=array.reduce((acc,num)=>num%2==1 ? acc+num:acc);
//     return result;

// }
// console.log(odd(arr));

//let arr=[1,2,3,4,5,6,7];

// function odd(array){

//     let filtered=array.filter((item)=>item %2==1);
//     console.log(filtered);

//     let result=filtered.reduce((acc,num)=> acc+num,8);

//     return result;

// }
// console.log(odd(arr));

// let arr=[1,2,3,4,5,6,7,8,9,10,13,14,12];
// function evenDouble(array){

//     let result=array.filter((item)=>item %2==0).map((num)=>num*2).reduce((acc,num)=>acc+num);

//     return number;

// }
// console.log(evenDouble(arr));

// let item="hellooooooo bitcamp front-end mentorship";

// function findWord(str){
//     let splited=str.split(" ");
//     let longestWord=splited.reduce((longest,current)=>current.length>longest.length ? current : longest,"");
//     return longestWord;
// }
// console.log(findWord(item));

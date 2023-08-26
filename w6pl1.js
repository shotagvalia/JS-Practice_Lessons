// შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე

// დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.

// let car={
//     make:"toyota",
//     model:"Camry",
//     year:2022,
//     owner:[
//         1,2,3,4
        
//     ],
//     start:function(){
//         console.log( "The car is starting!")
//     }
// }


// car.start();
// console.log(car.owner);

// შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.

// დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.

// let Person={
//     name:"giorgi",
//     age:30,
//     city:"tbilisi"
// }
// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.city);
// Person.job="front-end developer";
// console.log(Person);

// let arr=[
//     {
//         name:"giorgi"
//     },{
//         name:"lasha"
//     }
    
//     ]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name)
// }

// let car={
//     make:"toyota",
//     model:"Camry",
//     year:2022
    
// }
 
// car["owner"]="nika";  // ან წერტილით ანუ car.owner = "nika";
// console.log(car);

// for(let item in car){
//     console.log(car[item]);
// }

// for(let item in car){
//     console.log(item);
// }


// let student={
//     name:"giorgi",
//     age:20,
//     grades:[85,90,78,92],
//     calculate:function(){
//         let sum=0;
//         for(let z=0;z<this.grades.length;z++){
//             sum+=this.grades[z];
//         }
//         return sum/this.grades.length;
//     },
//     resuilt:function(){
//         return this.calculate();
//     }
    
    
// }
// console.log(student.calculate())

// console.log(student.resuilt())

// let grade=[85,90,78,92];
// let arraySum=grade.reduce((a,b)=> a+b);
// console.log(arraySum/grade.length)

// 1. დასორტეთ ობიექტების მასივი მათი name ფორფერთით (ანბანის მიხედვით);

// const objects = [
//   { name: "zebra", value: 10 },
//   { name: "Apple", value: 5 },
//   { name: "Banana", value: 8 },
//   { name: "Cherry", value: 3 },
// ];

// let sortedObjects = objects.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedObjects);

// 2. გაფილტრეთ რიცხვების მასივი და დატოვეთ მხოლოდ მარტივი რიცხვები

// let numbers = [1, 2, 3, 4, 17, 94, 12, 32, 43, 54, -4, -1];

// let primeNumbers = numbers.filter(number => {
//     if (number <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;

// });

// console.log(primeNumbers);

// 3. იპოვეთ პირველი სტრინგი სტრინგების მასივში, რომელიც იწყება კონკრეტული ასოთი

// const findString = (strings, letter) =>
//   strings.find((string) => string.startsWith(letter));

// const strings = ["Apple", "Zebra", "Banana", "Cherry", "Crewrewrw"];
// console.log(findString(strings, "C"));

// 4. Given an array of objects representing students, filter out the female students, then sort them by their names, and finally, compute the average age of the remaining students.

// const students = [
//   { name: "Cathy", age: 21, gender: "female" },
//   { name: "Alice", age: 20, gender: "female" },
//   { name: "Bob", age: 22, gender: "male" },
//   { name: "David", age: 23, gender: "male" },
// ];

// let femaleStudents = students.filter(student => student.gender === "female");
// let sortedByName = femaleStudents.sort((a, b) => a.name.localeCompare(b.name));
// let averageAge = sortedByName.reduce((ageSum, currentStudent) => ageSum + currentStudent.age, 0) / sortedByName.length;

// console.log(averageAge);

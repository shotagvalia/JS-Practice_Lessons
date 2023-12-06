// function num1(number){
//     return number;
// };

// let result=num(5);
// console.log(result+7)

// function value(num){
//     let local=num;
//     num1(5);
//     return ()=>{
//         return 8;
//     };
// }
// let result=value(7);
// console.log(result());

// function makeAdder(x){

//     return function(y){
//         return x+y;
//     }
// }
// let adder=makeAdder(5);
// console.log(adder(2));

// function createUniqueId(){
//     let id=0;
//     return function(num){
//         id+=num;
//         return id;
//     }
// }

// let nextId=createUniqueId();
// console.log(nextId(3));
// console.log(nextId(4));
// console.log(nextId(6));
// console.log(nextId());
// console.log(nextId());

// function createPrivateVariable(value){
//     let privateValue=value;
//     return {
//         getValue:function(){
//             return privateValue;
//         },
//         setValue:function(newValue){
//             privateValue=newValue;
//         }
//     }
// }

// let variable=createPrivateVariable(6);
// console.log(variable.getValue())
// variable.setValue(9);
// console.log(variable.getValue())

//*local variable / local scope / global variable /global scope / outer variable / outer scope
// function addition(num1,num2){
//     //num1 and num2 are local variable
//     var sum = num1+num2;
//     console.log(sum);
// }
// addition(10,68);

// let sum = 0;//sum is global variable 
// function addition(num1,num2){
//     sum = num1+num2;
//     console.log(sum)
// }
// console.log(sum);

//Outer variabl/lexial scoping
// function testing(){
//     let a=10;
//     function test(){
//             console.log(a);
//     }
// }
// testing();

//Defualt value in function 
// function addition(num1,num2,num3=0){
//     console.log(num1+num2+num3);
// }
// addition(10,20);

// Returning value.
// let sum1 = 0;
// function addition(num1=0,num2=0,num3=0){
//     console.log(num1,num2,num3);
//     sum1 = num1+num2+num3;
// }
// addition(10,20,40);
// console.log(sum1);

//function expresssion
// let addition =function(num1,num2){
//     return 10+20;
// }
// console.log(addition(10,20));
// console.log(sum)

// Arrow function or fat arrow function
// let addition = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(addition(10,40));

// fatarrow function only for the one parameter
// let squareofnumber = num =>{
//     return num*num;
// }
// console.log(squareofnumber(10));
// let squareofnumber = num => console.log(num*num);
// squareofnumber(10);

//callback function
// function testing(callback){
//     console.log(callback);
//     // callback;
// }

// function test(){
//     console.log("Test function called");
// }

// testing(function(){
//     console.log("Normal function");
// })

// testing(()=>{
//     console.log("Arrow function");
// })

// fat arrow function implicit return

// const addTwo=(num1,num2)=>num1+num2 
// console.log(addTwo(3,4));


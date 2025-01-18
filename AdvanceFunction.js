//Recursion =>function calling itself called recursion
// function printCounting(start){
//     if(start<=10){
//         console.log(start)  
//         printCounting(start+1);
//     }
// }
// printCounting(1);
//stack it is work with the concept of the LIFO(Last In First Out)
// function func1(){
//     func2();
//     console.log("func1");
// }
// function func2(){ 
//     func3();
//     console.log("func2");
// }
// function  func3(){
//     console.log("func3");
// }

// func1();

//GEC(Global execution context) this is point to the window object 
// console.log(window);
// console.log(this);
// console.log(a);
// testing();

// var a = 10;
// function testing(){
//     console.log("testing");
// }

//rest operator
// function addition(...nums){
//     let sum = 0;
//     for(const value of nums){
//         sum+=value;
//     }
//     console.log(sum); 
// }
// addition(10,20,30,40,50);

//spread operator ...variable name spread operator is make the new array each value of the array 
// let array = [10,20,30,40,50,60];
// let array2 = [...array,70,80,90];
// console.log(array);
// console.log(array2);
// console.log(array===array2);

// object in spread operator
// let object = {
//     firstname:'sameer',
//     lastname:'khan',
//     age:23
// }
// let object2 = {...object,hobbies:'cricket'};
// console.log(object);
// console.log(object2);


//redeclaration variable
// var firstname = "sameer";
// var lastname = "khan";

//IIFE(imediate invoke function expression) it is helpful for the directly execute
// countries = async () => {
//   let response = await fetch("https://restcountries.com/v3.1/all");
//   let data = await response.json();
//   return data
// }
// ( async()=>{
//     let data  = await countries();
//     console.log(data);
// })()


// let addition = new Function("num1","num2","console.log(num1+num2)");
// addition(10,20);

//closure
function testing(){
    let a = 10;
    let b = 20;
    return  ()=>{
        console.log(a+b);
        let c = 90;
        return ()=>{
            console.log(c);
        }
    }
}
let t = testing();
// console.log(t);
let b = t();
b();
// let random  = Math.floor(Math.random()*900000);
// console.log(random+100000);

// let random = Math.floor(Math.random()*1000000);
// if(random>100000)
//     console.log(random);
// else
//     console.log(random+100000);

//Array destructuring
// let array = [10,20,30,40,50];
// let [a,b,c] = array;
// console.log(a,b,c);

//rest operator variable
// let array = [10,20,30,40,50];
// let [a,b,...num] = array;
// console.log(a,b,...num);

// function addition(...nums){
//     let sums = 0;
//     for(const value of nums){
//         sums+=value;

//     }
//     console.log(sums);
// }
// addition(10,20,30,40);

// let object = {
//     firstname:'sameer',
//     lastname:'khan',
//     age:32,
//     hobbies:'cricket'
// }
// let {firstname,lastname,age,hobbies=[]} = object;
// console.log(firstname,lastname,age,hobbies);

//rest
// let object = {
//     firstname:'sameer',
//     lastname:'khan',
//     age:12
// }
// let {firstname,...obj} = object;
// console.log(firstname, obj);

// Date and time 
// Ceration 
// Access date components 
// getFullYear()
// getMonth()
// getDate()
// getHours()
// getMinutes()
// getseconds()
// getMilliseconds()
// getDay()

//Date.now()

// let date = new Date();
// console.log(date);
//  console.log(new Date());

// getFullYear()
// let date = new Date().getFullYear();
// console.log(date);

// getMonth()
// let date1 = new Date().getMonth();
// console.log(date1+1);

// getDay()
// let date = new Date().getDay();
// console.log(date);

// getHours()
// let date = new Date().getHours();
// console.log(date);

// getMinutes()
// let date = new Date();
// let minutes = date.getMinutes();
// let seconds= date.getSeconds();
// let Milliseconds = date.getMilliseconds();
// let day = date.getDay();
// console.log("minutes = "+minutes+" seconds = "+seconds+" milliseconds = "+Milliseconds+" day = "+day);

// let date = Date.now();
// console.log(date/1000/60/60/24/30/12);

// parsing
// let date = Date.parse("10-10-2024");
// console.log(date/1000/60/60/24/30/12);
// Declaration
// method pop/push ,shift/unshift
// new Array();
// Multimedia arrays
// toString

// Array method

// Add remove items
// arr.push
// arr.pop
// arr.shift
// arr.unshift

// splice
//slice
//concat
//iterate,foreach

// Searching in Array
// indexof/lastindexof/and includes
// find and findindex/ find lastindex
// filter
// transform an array
// map
// sort
// revere
// split and join
// reduce and reduce right
// Array.isArray

// *[]
// let a = [10,20,30,40];
// console.log(a);

// *New array
// let array = new Array(10,20);
// console.log(array);

// *Array of
// let array = Array.of(10,20,30);
// console.log(array);

// Array from
// let array = Array.from(10,20,30,40);
// console.log(array);

// *Multidimensional array
// let array = [
//     [10,
//         [90,100]
//     ],
//     [10,20],
//     [30,40],
//     [65,63],
//     [12,34]
// ];
// console.log(array[0][1][0]);

//* Array.push
let array = [10,20,30,40,50];
let result = array.push(10);
// console.log({result , array});
console.log(array)

// *array.pop
// let array = [10,20,30,40,50];
// let result = array.pop();
// console.log({result , array});

// *Array.shift
// let array = [10,20,30,40];
// console.log(array,array.shift(10));
// console.log(array);

// *Array.unshift
// let array1 = [10,20,30,40,50];
// console.log(array1, array1.unshift(30));

// *splice
// delete
// let array = [10,20,30,40];
// console.log(array.splice(1,2));
// console.log(array);
// console.log(array.splice(-2));

// *slice In this slice method return the array
// let array = [10,20,30,40,50];
// console.log(array.slice(0,3));
// console.log(array.slice(2));
// console.log(array.slice(0,-1));
// console.log(array.slice(-1,-1));

// *Concat
// let array = [10,20,30,40,50,60];
// let array1 = [10,20,30,40,50,60];
// let ans = array.concat(array1,[100543,65,23,54]);
// console.log(ans);
// console.log(array+array1);

//*Iterate forEach It is nothing return
// let array = [10,20,30,40,50,60];
// array.forEach((value,index,array)=>{
//     console.log(value,index,array);
// })

// *Searching in array
//indexOf lastIndexOf and includes
// let array = [10,20,30,40,10,50,60];
// console.log(array.indexOf(10));
// console.log(array.indexOf(100));
// console.log(array.lastIndexOf(10));
// console.log(array.lastIndexOf(90));

// console.log(array.includes(40));

// *find and findIndex/findLastIndex
// let array = [10,20,304,60];
// let result = array.find((value,index,array)=>{
//     console.log(value,index,array);
//     if(value===20){
//         return value;
//     }
// })

// console.log(result);
// let employees = [
//   { name: "sameer", department: "trainer" },
//   { name: "ajay", department: "accounts" },
// ]
// let emp = employees.find(emp => emp.name === "sameer");
// console.log(emp);

// let array = [10,20,30,40,50];
// let result = array.findIndex((value,index,arr)=>{
//     console.log(value,index,array);
//     if(value===30){
//     return value
//     }
// })
// console.log(result);

// *Filter
// let array = [10, 20, 30, 40, 50, 60, 50, 10, 60];
// let result = array.filter((value, index, array) => {
//   console.log(value, index, array);
//   if (value === 30||value === 50||value===10) {
//     return value;
//   }
// });

// console.log(result);

// let employees = [
//     {name:"sameer", department:"trainer"},
//     {name:"sameer", department:"trainer"},
//     {name:"sameer", department:"trainer"},
//     {name:"sameer", department:"manager"},
//     {name:"sameer", department:"CEO"},
//     {name:"sameer", department:"HR"}
// ]

// let emp = employees.filter(emp => emp.department!=="trainer");
// console.log(emp);

//* Map function
// let array = [10,20,30,40,50,60];
// let result = array.map((value,index,array)=>{
//     console.log(value,index,array);
// })
// console.log(result); 

// *reverse
// let array = [10,20,30,60,70,90,40,50,80];
// console.log(array.reverse());

// *split and join
//split is use for the string convert into the array
//join is use for the array to string
// let array = [10,20,30,40,50,60,70];
// let result = array.join("|");
// console.log(result.split("|"));

// *reduce and reduce right
// shortcut way
// console.log([10,20,30,30,40,50,10,60].reduce((prevValue,currentValue)=>{
//     console.log(prevValue,currentValue);
// }))

// not shortcut way
// let array = [10,20,30,30,40,50,10,60];
// array.reduce((prevValue,currentValue)=>{
//     console.log(prevValue,currentValue);
//     return prevValue,currentValue
// })
// console.log(array.reduce());
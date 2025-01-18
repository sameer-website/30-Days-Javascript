// // Data type

// // Data type
// // Number
// //Boolean(Logic type)
// //BigInt
// //null
// //undefined
// //array
// //String
// //Object and symbol

// // Number
// let number = null;//null
// let number1 = 97824.445;
// let number2 = 'this';
// console.log(number, typeof number);
// console.log(number1, typeof number);
// console.log(number2, typeof number2);

// //array
// let array = [10,20,30,40];
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);//undefined
// console.log("this is sameer");
// console.log(array,typeof array);

// let firstname = "same\"er";
// let lastname = 'samsh\\er';
// let ans = "saj'id";
// console.log(firstname);
// console.log(lastname);
// console.log(ans);

// let fullname = "md\tsameer\tkhan";//use for space
// let fullname1 = "md\nsameer\nkhan"//use for the new line
// let fullname2 = "md\\sameer\\khan"//use for the back slace
// console.log(fullname);
// console.log(fullname1);
// console.log(fullname2);

// //Object and symbol
// object = {
//     name:'sameer',
//     gmail:'iamsameer6805@gmail.com'
// }
// console.log(object,typeof object);
// console.log(object.name+" "+object.gmail);
// console.log(object['name']);
// console.log(object['gmail']);

// let sym = Symbol("pagal");
// console.log(sym.description);

// //alert
// alert("abe chla jaa");

// //prompt
// let control = prompt("Enter any number");
// console.log(control,typeof control);

// //confrm
// let result = confirm("are you sure");
// console.log(result);//It is not part of the javascript

// //document =>it is use for the show on the display
// document.write("i am sameer");

// //console
// console.log("hello world");
// console.dir("hello world");
// console.warn("Hello world");
// console.error("hello world")

// //Type conversion
// //String conversion
// //Numeric conversion
//Boolean conversion

// =>String conversion
// numeric to string conversion
let num = 10;
console.log(num,typeof num);

let str = String(num);
console.log(str,typeof str);

//=>Boolean to string conversion
let boolean = true;
console.log(boolean,typeof boolean);

let str1 = String(boolean);
console.log(str1,typeof str1);

//Numeric conversion
//String to numeric conversion
let str2 = "sameer";
console.log(str2,typeof str2);

let numeric = Number(str2);
console.log(numeric,typeof numeric);

//boolean to numeric conversion
let boolean1 = true;
console.log(boolean1, typeof boolean1);

let numeric1 = Number(boolean1);
console.log(numeric1, typeof numeric1);

// Boolean conversion
// string to boolean conversion
let str3 = "sameer1234";
console.log(str3,typeof str3);

let boolean2 = Boolean(str3);
console.log(boolean2, typeof boolean2);

//number to boolean conversion
let str4 = 12345;
console.log(str3, typeof str4);

let boolean3 = Boolean(str4);
console.log(boolean3, typeof boolean3);
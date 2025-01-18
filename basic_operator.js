// Basic Operator

// =>Terms, binary, operand

// Arithmetic operator
// Addition+
// let a = 54;
// let b = 76;
// console.log(a+b);
// // Subtraction-
// let a1 = 65;
// let b1 = 12;
// console.log(a1-b1);
// // Multiplication*
// let a2 = 23;
// let b2 = 2;
// console.log(a2*b2);
// // Division/
// let a3 = 12;
// let b3 = 5;
// console.log(a3/b3);
// // Remainder%
// let a4 = 50;
// let b4 = 7;
// console.log(a4%b4);
// // Exponentiation**
// let a5 = 3;
// let b5 = 3;
// console.log(a5**b5);

// //String concatanation with binery
// let firstname = "sameer";
// let lastname = "khan";
// console.log(firstname+" "+lastname);

// //Interview question
// console.log(10 + 10);//20
// console.log(10 - 10);//0
// console.log(10 * 10);//100
// console.log(10 / 10);//1
// console.log(10 % 10);//0
// console.log(10 ** 10);//10000000000

// console.log(10 + "10");//1010
// console.log(10 - "10");//0
// console.log(10 * "10");//100
// console.log(10 / "10");//1
// console.log(10 % "10");//0
// console.log(10 ** "10");//10000000000

// console.log("10" + "10");//1010
// console.log("10" - "10");//0
// console.log("10" * "10");//100
// console.log("10" / "10");//1
// console.log("10" % "10");//0
// console.log("10" ** "10");//10000000000

// console.log("abc" + "10");//abc10
// console.log("abc" - "10");//NAN
// console.log("abc" * "10");//NAN
// console.log("abc" / "10");//NAN
// console.log("abc" % "10");//NAN
// console.log("abc" ** "10");//NAN

// //Numeric conversion, unary+
// let str = "abs";
// console.log(str, typeof str);

// let number = +str;
// console.log(number);

// // increement operator
// // postfix variable++
// let z = 12;
// console.log(z++);
// console.log(z);

// // prefix ++variable
// let c = 10;
// console.log(++c);
// console.log(++c)
// //decrement operator
// // postfix variable--
// let t = 32;
// console.log(t--);
// console.log(t);

// // postfix --variable
// let l = 54;
// console.log(--l);
// console.log(--l)

// let g = 10;
// console.log(g++ - ++g + --g + g-- + g);

// Assignment operator
// * +=
let A = 32;
let B = 54;
A+=B;//cannot use the let in this format
console.log("+="+A);

// * -=
let A1 = 32;
let B1 = 54;
A1-=B1;
console.log("-="+A1);
// * *=
let A2 = 32;
let B2 = 4;
A2*=B2;
console.log("*="+A2);
// * %=
let A3 = 20;
let B3 = 5;
A3%=B3;
console.log("%="+A3);
// * /=
let A5 = 10;
let B5 = 2;
A5/=B5;
console.log("/="+A5);
// * **=
let A4 = 2;
let B4 = 3;
A4**=B4;
console.log("**="+A4);


//Comparision operator
// * ==equa to
let k = 10;
let k1 = "10";
console.log(k==k1);

// * ===equal to equal type
let n = 10;
let n1 = "10";
console.log(n!==n1);//in this case it is also check the type and value but first of all check the type and then value
console.log(n===n1);

// * !=npt equal to not equal type
let r = 15;
let r1 = 15;
console.log(r!=r1);
// * !==greater then
let f = 20;
let f1 = "20";
console.log(f!==f1);
// * >less then
let e = 43;
let e1 = 12;
console.log(e>e1);
console.log("="+e>e1);//This is doubt
// * <greater then
let g = 46;
let g1 = 48;
console.log(g<g1);
console.log("less then = "+g<g1);//this is doubt

// * >=less then equal to 
let q = 12;
let q1 = 12;
console.log(q==q1);
// * <=greater then equal to
let l = 12;
let l1 = 17;
console.log(l==l1);
// * ?Ternery
let age = 54;
age>=18 ?
console.log("It is elgible for vote"):
console.log("It is not elgible for vote");

//Logical Operator
// AND&&
    let And = 54;
    let operator = 12;
    console.log((And == 54)&&(operator == 12));
// OR||
    let OR = 43;
    let OR1 = 23;
    console.log((OR>12)||(OR1==21));//it is doubt
// NOT!
    let NOT = 54;
    console.log(NOT!=54);
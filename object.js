// //object
// let object = {
//     //properties and literals
//     firstName:'sameer',
//     lastName:'khan',
//     // method
//     getfullname:function(){
//         console.log("getfullname called");
//     }
// }
// //.
// console.log(object.firstName);
// console.log(object.lastName);
// object.getfullname();
// //[]
// console.log(object['firstName']);
// console.log(object['lastName']);
// object['getfullname']();


//conmputed property
// let firstName = "abc";
// let object={
//     [firstName]:"deepak",
// }
// console.log(object);


//Property value shorthand
// let firstName = "deepak"
// let obj = {
//     firstName
// }
// console.log(object);
// The for in loop
// let object = {
//     $firstnmae: "$firstname",
//     _lastname: "_lastname",
//     const: "const",
//     if: "if",
//     var: "var",
//     let: "let",
//     else: "else",
//     while: "while",
//     for: "for"
// }
// for (const key in object) {
//     console.log(key, object[key]);
// }
// property existence test, "in" operator
// let object = {
//     firstname: "sameer",
//     lastname: "khan",
// }
// console.log("firstname" in object);

// Refrence type
// let array = [10,20,30,40];
// let array2 = array;
// array2[array.length] = 50;
// console.log(array2);
// console.log(array);

// this
// let object = {
//     firstName : "sameer",
//     lastName : "khan",
//     getfullName : function(){
//         console.log(this);
//         console.log(this.firstName+ " "+this.lastName);
//         this.testing();
//     },
//     testing(){
//         console.log("this is sameer");
//     }
// }
// object.getfullName();
// console.log(object);


// fat arrow function in the object
// let object = {
//     firstName : 'sameer',
//     lastName : 'Khan',
//     getfullname: function(){
//         console.log(this);
//         console.log(this.firstName+ " "+this.lastName);
//     }
// }
// object.getfullname();

// fat arrow function 
// function chai(){
//     let username = "sameer";
//     console.log(this);
// }
// chai();

// Class
// function employee(){
//     return {
//             firstName : 'sameer',
//             lastName : 'Khan',
//             getfullname: function(){
//                 console.log(this);
//                 console.log(this.firstName+ " "+this.lastName);
//             }
//         }
// }
// let object1 = employee();
// console.log(object1);


// function employee(){
//     return {
//             firstName//property : 'sameer',//value
//             lastName//property : 'Khan',//value
//             getfullname//property: function(){//value
//                 console.log(this);
//                 console.log(this.firstName+ " "+this.lastName);
//             }
//         }
// }
// let object2 =new employee();
// console.log(object2);

// constructor
// function employee(){
//     this.firstName = 'sameer';
//     this.lastName = 'Khan';
//     this.getfullname= function(){
//         console.log(this);
//         console.log(this.firstName+ " "+this.lastName);
//     }
// }
// let object1 =new employee();
// let object2 =new employee();
// let object3 =new employee();
// console.log(object1,object2,object3);

// constructor Example
//constructor function for person objects
// function person (first,last,age){
//     this.firstName = first;
//     this.lastName = last;
//     this.Age = age
// }
// //create two person objects
// const myfather = new person("sameer","khan",21);
// const mybrother = new person("samsher","ansari",29);
// console.log(myfather);
// console.log(mybrother);
// console.log(myfather.firstName+ " " +mybrother.firstName);

// let object = {
//     firstName : "sameer",
//     lastName :  "khan",
//     age : 54,
//     getFullName:function(){
//         return this.firstName;
//     }
// }
// console.log(object.getFullName());

// let counter = createcounter();
// let counter1 = createcounter();

//     function createcounter(){
//         return{
//             count: 0,
//             increment: function(){
//                 num = this.count++;
//             }
//         }
//     }

// counter.increment();
// counter.increment();
// counter.increment();
// console.log(num);

// function car(name1,color1){
//     this.name = name1;
//     this.color = color1;
//     this.start = function(){
//         ans = ' started';
//         // console.log(this);
//     }
// }
// new car("ferrari","red").start();
// // start();
// // console.log(swift.start());
// console.log(ans);
// console.log(this.name);

// let employee = {
//     name:{
//         firstName : "sameer",
//         lastName : "khan"
//     },
//     email : "iamsameer6805@gmail.com",
//     hobbies : ['cricket','coding'],
//     getdetails : function(){
//         console.log("firstname : "+this.name.firstName);
//         console.log("lastName : "+this.name.lastName);
//         console.log("email : "+this.email);
//         console.log("hobbies : "+this.hobbies);
//     }
// }

// console.log(employee.name.firstName);
// console.log(employee.email);
// console.log(employee.hobbies?.[0]);
// console.log(employee.getdetails?.());

//constructor
function employee(firstname,lastname,email,hobbies,hobbies1){
    this.name={
        firstname:firstname,
        lastname:lastname
    }
    this.email=email;
    this.hobbies=[hobbies,hobbies1];
}
let sajid = new employee("sajid","khan","sajid@gmail.com","photgraph","football");
console.log(sajid);
// console.log(sajid.email);
// console.log(sajid.name.firstname+sajid.name.lastname);
// console.log(sajid.hobbies[0]);
// let samsher = new employee("samsher","ansari","samsher@gmail.com","gym","teaching");
// console.log(samsher.email);
// console.log(samsher.name.firstname+samsher.name.lastname);
// console.log(samsher.hobbies[0]);
// let sameer = new employee("sajid","MD","sameer@gmail.com","cricket","coding");
// console.log(sameer.email);
// console.log(sameer.name.firstname+sameer.name.lastname);
// console.log(sameer.hobbies[0]);

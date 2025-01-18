// Property flag and description
/*property flag
Non writable
Non emurable
Non configurable
object-DefineProperty
object.getownpropertyDescriptors
Scalling an object globally 
object.preventExtension(obj)
object.seal(obj)
object.feenz(obj)
*/

// let object = {
//     firstName :'smaeer',
//     lastName:'khan',
//     age:20
// }
// console.log(object.firstName);
// console.log(object['lastName']);

// let descriptors = Object.getOwnPropertyDescriptors(object);
// console.log(descriptors);

// let descriptor = Object.getOwnPropertyDescriptor(object, 'lastName');
// console.log(descriptor);

//writable
// const object = {
//     firstName:'sameer',
//     lastName:'khan',
//     age:23
// }
// Object.defineProperty(object, 'firstName',{
//     writable:false
// })
// object.firstName = 'samsher';
// let descriptor = Object.getOwnPropertyDescriptor(object,'firstName');
// console.log(descriptor);
// console.log(object);

//configurable
// let object = {
//     firstName:'sameer',
//     lastName:'khan',
//     age:54
// }
// Object.defineProperty(object,'firstName',{
//     configurable:false
// })
// delete object.firstName;

// console.log(object);

//Enumurable
// let object = {
//     firstName : 'sameer',
//     lastName: 'khan',
//     age:23
// }
// Object.defineProperty(object,'firstName',{
//     enumerable:false
// })
// console.log(object.firstName)
// for (const key in object) {
//     console.log(key,object[key]);
// }
// Object.defineProperty(object,)


//=>getter
// let object = {
//     firstName:'sameer',
//     lastName:'khan',
//     age:23,
//     getFirstName: function(){
//         return this.firstName
//     },
//     get getFirstName(){
//         return this.firstName
//     }
// }
// // .
// console.log(object.firstName);
// //[]
// console.log(object['firstName']);
// //method
// console.log(object.getFirstName);
// //getter
// console.log(object.getFirstName);


//=>setter
// let object = {
//     firstName:'sameer',
//     lastName:'khan',
//     age:23,
//     setfirstname: function(value){
//         this.firstName = value;
//     },
//     set setfirstname(value){
//         this.firstName = value;
//     }
// }
// // .
// object.firstName = "sajid";
// console.log(object.firstName);
// //[]
// object['firstName'] = "samsher";
// console.log(object.firstName);
// //setter
// object.setfirstname = "shakir";
// console.log(object.firstName);
// //method
// object.setfirstname = "jeenat";
// console.log(object.firstName);


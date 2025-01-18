//syntax
// class className{
//     //property
//     //method
// }
// class Employee{
//     //property
//     firstName = "sameer"
//     lastName = 'khan'
//     //method
//     getFirstName = ()=>{
//         console.log("firstname");
//         console.log(this.firstName);
//     }
// }
// let employee = new Employee();
// let employee1 = new Employee();
// let employee2 = new Employee();
// let employee3 = new Employee();
// console.log(employee.firstName);
// console.log(employee1.getFirstName());
// console.log(employee2['lastName']);
// console.log(employee3.firstName);

//constructor
// class Employee{
//     constructor(fname){
//         console.log("constructor called");
//         this.firstname = fname;
//     }
// }

// let employee = new Employee("sajid");
// let employee1 = new Employee("samsher");
// console.log(employee, employee1);

//getter and setter
// class Employee{
//     firstName="sameer"
//     //getter
//     get getfirstname(){
//         return this.firstName
//     }
//     //setter
//     set getFirstName(value){
//         this.firstName = value;
//     }
// }
// let employee = new Employee();
// console.log(employee.firstName);
// employee.setFirstName = "samsher";
// console.log(employee.setFirstName);

//Inheritance
// class class1{
//     className = 'sameer';
//     getClassName =()=>{
//         console.log(this.className);
//     }
// }
// class class2 extends class1{

// }
// let employee = new class2();
// console.log(employee);

//inheritance property overiding
// class parentclass{
//     className = "parentclass"
//     getclassname=()=>{
//         return this.className;
//     }
// }
// class childclass extends parentclass{
//     //property overriding
//     className = "childclass"
// }
// let child = new childclass();
// console.log(child);

// inheritance method overriding
// class parentclass{
//     getclassname=()=>{
//         console.log("parentclass get class name function");
//     }
// }
// class childclass extends parentclass{
//     //method overriding
//     getclassname=()=>{
//         console.log("childclass get class name function");
//     }
// }
// let child = new childclass();
// console.log(child.getclassname());

//polymorphism => it is not support the javasript
// class Area{
//     area(side){
//         console.log(side);
//     }
//     area(length, breath){
//         console.log(length*breath);
//     }
// }
// let a = new Area();
// console.log(a);
// a.area(43);

//constructor is also inheritance
// class parentclass{
//     constructor(cname){
//         this.cname= cname;
//     }
// }
// class childclass extends parentclass{

// }
// let child = new childclass("sameer");
// console.log(child.cname);

//inheritance constructor overriding
// class parentclass{
//     constructor(cname){
//         this.cname= cname;
//     }
// }
// class childclass extends parentclass{
//     constructor(cname,age){
//         super(cname);
//         this.age= age;
//     }
// }
// let child = new childclass("sameer",32);
// console.log(child);

// class parentclass{
//     className = "parentclass"
//     getclassname(){
//         console.log("parentclass getclassname function");
//     }
// }
// class childclass extends parentclass{
//     className = "childclass"
//     getclassname(){
//         super.getclassname();
//         console.log("childclass getclass function");
//     }
// }

// let child = new childclass();
// child.getclassname();

// class Employee{
//     counter = 0;
//     constructor(){
//         this.counter++;
//     }
// }

// let emp1 = new Employee();
// console.log(emp1);
// class sameer{
//     firtname = "sameer"
//     lastname = "khan"
//     age = 89
//     getFullName(){
//         return this.firtname+this.lastname;
//     }
// }
// let employee = new sameer();
// console.log(employee);


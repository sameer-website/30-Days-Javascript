// syntax
// let promise = new Promise((resolve,reject)=>{

// })

// let promise1 = new Promise((resolve,reject)=>{
//     resolve("resolve state");
//     reject("reject state");
// })
// console.log(promise1);

//then block
let promise = new Promise((resolve,reject)=>{
    resolve("resolve state");
})

promise.then((response)=>{
    console.log(response);
    console.log(promise);
})

//catch block
// let promise1 = new Promise((resolve,reject)=>{
//     reject("resolve state");
// })

// promise1.catch((reject)=>{
//     console.log(reject);
// })

//then and catch
// let promise1 = new Promise((resolve,reject)=>{
//     reject("reject state");
//     resolve("resolve state");
// })

// promise1.then((resolve)=>{
//     console.log(resolve);
// }).catch((reject)=>{
//     console.log(reject);
// })

// let items= ["pen","pencil","book"]
// let promise3 = new Promise((resolve,reject)=>{
//     if(items.includes("pen")){
//         resolve("item is available");
//     }
//     else{
//         reject("item is not available");
//     }
// })

// promise3.then((resolve)=>{
//     console.log(resolve);
// }).catch((reject)=>{
//     console.log(reject);
// })

// let promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise4");
//   }, 3000);
// });
// promise4.then((response) => {
//   console.log(response);
// });

// let promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise5");
//   }, 1000);
// });
// promise5.then((response) => {
//   console.log(response);
// });

// let promise6 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise6");
//   }, 4000);
// });
// promise6.then((response) => {
//   console.log(response);
// });

// let promise7 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise7");
//   }, 5000);
// });
// promise7.then((response) => {
//   console.log(response);
// });

// console.log("after promise");
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

// let promise = new Promise((resolve, reject) => {
//   resolve("resolve state");
  // reject("reject")
// });
// let p1 = promise.catch((reject)=>{
//     console.log(reject);
// })
// console.log(p1);

// promise.then((resolve)=>{
//     console.log("Promise-1");
// }).then((resolve)=>{
//     console.log("Promise-2");
// }).then((resolve)=>{
//     console.log("Promise-3");
//     throw new error("something new error");
// }).then((resolve)=>{
//     console.log("promise-5");
// }).catch((error)=>{
//     console.log(error);
//     throw new error("something new error");
// }).catch((error)=>{
//     console.log(error);
// }).catch((error)=>{
//     console.log(error);
// }).catch((error)=>{
//     console.log(error);
// }).then((resolve)=>{
//     console.log("promise-7");
// })

//fetch syntax
// fetch("url",{
//     headers:{

//     },
//     method:"GET",
//     body:
// })

// let response  = fetch("https://restcountries.com/v3.1/all")
// response.then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// })

// await async normal function
// async function countries() {
//   let response = await fetch("https://restcountries.com/v3.1/all");
//   let data = await response.json();
//   console.log(data);
// }
// countries();

// await async fatarrow function
// countries = async () => {
//   let response = await fetch("https://restcountries.com/v3.1/all");
//   let data = await response.json();
//   console.log(data);
// };
// countries();

// let getcountries = async () => {
//   let response = await fetch("https://restcountries.com/v3.1/all");
//   let data = await response.json();
//   return data;
// };
// getcountries()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally finished");
//   });

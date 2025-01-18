
//WAP to find the factorial with the help of recursion
// function printCounting(factorial) {
//     if(factorial===1){
//         return 1
//     }
//     else{
//         return factorial*printCounting(factorial-1)
//     }
// }
// console.log(printCounting(5));

// WAP to find the sum of digit with the help of recursion

// function sumOfDigit(n){
//     if (n===0){
//         return 0;
//     }
//     else{
//         return (n%10)+sumOfDigit(n/10);
//     }
// }

// let ans = sumOfDigit(123);
// console.log(Math.floor(ans));

//WAP to reverse a digit using recursion
function revDigit(num){
    if(num<10){
        return num ;
    }
    else {
        console.log(Math.floor(num%10));
        return revDigit(num/10);
    }
}
let ans = revDigit(123);
console.log(ans);
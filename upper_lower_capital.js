// let name = "f";
// console.log(name[0]+name[1]+name[2]+name[3]+name[4]+name[5]);
// console.log(name, typeof name);

// let ans = charCodeAt(name);
// console.log(ans,typeof ans);

// let name1 = "sameer";
// // (name1 === "a"||name1 === "b"||name1 === "c"||name1 === "d"||name1 === "e"||name1 === "f"||name1 === "g"||name1 === "h"||name1 === "i"||name1 === "j"||name1 === "k"||name1 === "l"||name1 === "m"||name1 === "n"||name1 === "o"||name1 === "p"||name1 === "q"||name1 === "r"||name1 === "s"||name1 === "t"||name1 === "u"||name1 === "v"||name1 === "w"||name1 === "x"||name1 === "y"||name1 === "z") ?
// (name1 === "sameer")?
// console.log("SAMEER"):
// console.log("It is not elgible for vote");



// let atoz = "abcdefghijklmnopqrstuvwxyz";
// for(let j=0;j<atoz.length;j++){
//     let name = "a";
//     for(i=0;i<name.length;i++){
//         if(atoz[j]==name[i]){
//             let ATOZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//             console.log(ATOZ[j]);
//         }
//     }
// }


let ATOZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let atoz = "abcdefghijklmnopqrstuvwxyz";
for(let j=0;j<ATOZ.length;j++){
    for(let n=0;n<atoz.length;n++){
    let name = "T";
        if(ATOZ[j]==name){
            let atoz1 = "abcdefghijklmnopqrstuvwxyz";
            console.log(atoz1[j]);
        }
        if(atoz[n]==name){
            let ATOZ1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            console.log(ATOZ1[n]);
        }
    }
}


// let value = "a";
// let character = value.charCodeAt(0);
// console.log(character);

// if(character >=65&&character<=90){
//     console.log(String.fromCharCode(character+32));
// }else if(character >=97&&character<=122){
//     console.log(String.fromCharCode(character-32));
// }
// else{
//     console.log("This is not charcter");
// }
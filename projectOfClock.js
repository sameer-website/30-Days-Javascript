
let paragraph3 = document.querySelector("body"); //tagName
paragraph3.style.height = "100vh";
paragraph3.style.display = "flex";
paragraph3.style.justifyContent = "center";
paragraph3.style.alignItems = "center";

let div = document.createElement("div");
div.className = "clock";
div.style.fontSize = "100px";
function clockTime() {
  currentTime = new Date();
  div.innerHTML = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
}
let interval = setInterval(clockTime,1000);
// let ref = setInterval(() => {
//   clockTime();
// },1000);
let button = document.createElement("button");
button.id = "button";
button.click = "func()";
button.style.fontSize = "30px";
button.className = "stop_button";
button.innerHTML = "stop timer";
button.style.height = "60px";
button.style.width = "200px";
button.style.backgroundColor = "red";
button.style.borderRadius = "10px";
button.style.marginTop = "30px";
button.style.cursor = "pointer";
button.style.textTransform = "uppercase"

let root = document.getElementById("root");
let removeEvent = button.addEventListener("click",()=>{
  clearInterval(interval);
})
button.addEventListener("click",()=>{
  
})
root.append(div);
root.append(button);

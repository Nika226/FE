const body = document.querySelector("body");
const btn1 = document.querySelector(".bn1");
const btn2 = document.querySelector(".bn2");
const btn3 = document.querySelector(".bn3");
const btn4 = document.querySelector(".bn4");

const newbtn1 = document.createElement("button");
body.append(newbtn1);
newbtn1.className = "bn1";
newbtn1.innerText = "Click Me";
newbtn1.style.background = "yellow";
newbtn1.addEventListener("click", () => {
  newbtn1.style.backgroundColor = "blue";
});

console.log("btn1");

const newbtn2 = document.createElement("button");
body.append(newbtn2);
newbtn2.className = "bn2";
newbtn2.innerText = "Click Me";
newbtn2.style.background = "red";
newbtn2.addEventListener("click", () => {
  newbtn2.style.backgroundColor = "green";
});

console.log("btn2");

const newbtn3 = document.createElement("button");
body.append(newbtn3);
newbtn3.className = "bn3";
newbtn3.innerText = "Click Me";
newbtn3.style.background = "darkblue";
newbtn3.addEventListener("click", () => {
  newbtn3.style.backgroundColor = "blue" ? "black" : "red";
  return "red";
});

console.log("btn3");

const newbtn4 = document.createElement("button");
body.append(newbtn4);
newbtn4.className = "bn4";
newbtn4.innerText = "Click Me";
newbtn4.style.background = "gray";
newbtn4.addEventListener("click", () => {
  newbtn4.style.backgroundColor = "red";
});

console.log("btn4");

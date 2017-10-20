const topDiv = document.getElementById("divMain");
const dontClick = document.getElementById("topLink");
const mouseHover = document.getElementById("buttons");
const myTextInput = document.getElementById("myTextInput");
const colorButton = document.getElementById("primary");
const addRandom = document.getElementById("addRandom");
const addRandomButton = document.getElementById("addRandomButton");
const randomList = document.getElementById("listItems");
const removeRandomButton = document.getElementById("removeRandomButton");


topDiv.addEventListener("click",() => {
  topDiv.style.color = "red";
  setTimeout(function() {
    topDiv.style.color = "black";
  }, 1000);
});

dontClick.addEventListener("click", () => {
  let oops = document.getElementById("dontClick");
  oops.style.backgroundColor = "red";
  oops.style.color = "silver";
  setTimeout(function(){
    oops.style.backgroundColor = "black";
    oops.style.color = "black";
    }, 500);
});

mouseHover.addEventListener("mouseenter" , () => {
  mouseHover.style.backgroundColor = "blue";
  setTimeout(function(){
    mouseHover.style.backgroundColor = "black";
    }, 500);
});

colorButton.addEventListener("click", () => {
  topDiv.style.backgroundColor = myTextInput.value;
});

randomList.addEventListener("mouseover" , (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});

randomList.addEventListener("mouseout" , (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});

addRandomButton.addEventListener("click" , () => {
  let li = document.createElement("LI");
  li.textContent = addRandom.value;
  randomList.appendChild(li);
  addRandom.value = "";
});

removeRandomButton.addEventListener("click" , () => {
  let li = document.querySelector("li:last-child");
  randomList.removeChild(li);
});

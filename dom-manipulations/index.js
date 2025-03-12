var bodyElement = document.body;
bodyElement.style.backgroundColor = "#000";
bodyElement.style.color = "#fff";
bodyElement.style.border = "2px solid red";
var divElements = document.getElementsByTagName("div");
console.log(divElements);
var btn = document.getElementsByTagName("button")[0];
btn.style.backgroundColor = "green";
btn.textContent = "About me";
var headingsTwo = document.getElementsByTagName("h2");
var shops = document.getElementById("shops");
var items = document.getElementsByClassName("list-item");
var secondItem = document.getElementsByClassName("list-item")[1];
secondItem.textContent = "Second Element";
console.log(items);
var selectedH2 = document.querySelector("h3");
if (selectedH2) {
    selectedH2.style.color = "blue";
}
console.log(selectedH2);

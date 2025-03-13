var h1Heading = document.getElementById("title");
h1Heading.textContent = "Changed Title of H1 tag";
var paragraph1 = document.querySelector(".content p");
paragraph1.style.color = "green";
var listItems = document.getElementsByTagName("li");
listItems[0].textContent = "apples";
listItems[1].textContent = "bananas";
listItems[2].textContent = "pears";
var button = document.getElementById("clickMe");
if (button) {
    button.style.border = "1px  solid red";
}
console.log(button);

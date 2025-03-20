// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var addBorderButton = document.querySelector("#add-border-btn");
var contentSection = document.querySelector(".content");
addBorderButton.addEventListener("click", function () {
    contentSection.style.margin = "5px";
    contentSection.style.padding = "2px";
    contentSection.style.border = "2px solid red";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
var changeTextButton = document.querySelector("#change-text-btn");
changeTextButton.addEventListener("click", function () {
    if (contentSection.style.color === "blue") {
        contentSection.style.color = "black";
    }
    else {
        contentSection.style.color = "blue";
    }
});
// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
var toggleBackground = document.querySelector("#toggle-bg-btn");
toggleBackground.addEventListener("click", function () {
    if (contentSection.style.backgroundColor === "gray") {
        contentSection.style.backgroundColor = "white";
    }
    else {
        contentSection.style.backgroundColor = "gray";
    }
});
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
contentSection.addEventListener("mouseover", function () {
    contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});

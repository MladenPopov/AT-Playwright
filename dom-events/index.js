document.getElementsByTagName("h1")[1];
//create DOm element method
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
//get element by class name
var addItemsContext = document.getElementsByClassName("add-items");
console.log(addItemsContext);
//append element in the html structure
addItemsContext[0].append(paragraph);
//remove element from html structure
document.getElementsByTagName("span")[0].remove();
//event listener on keyboard press
document.addEventListener("keypress", function (event) {
    console.log("Key pressed", event.key);
});
// add and remove list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
function addListItem() {
    var listItem = document.createElement("li");
    var listItemValue = itemInput.value;
    if (listItemValue !== "" && " ") {
        listItem.textContent = listItemValue;
        list.append(listItem);
    }
    itemInput.value = "";
    itemInput.focus();
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.margin = "10px";
    listItem.append(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        listItem.remove();
    });
}
addButton.addEventListener("click", function () { return addListItem(); });
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
});
paragraph.remove();

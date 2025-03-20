document.getElementsByTagName("h1")[1];

//create DOm element method
const paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";

//get element by class name
const addItemsContext: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");
console.log(addItemsContext);

//append element in the html structure
addItemsContext[0].append(paragraph);


//remove element from html structure
document.getElementsByTagName("span")[0].remove();


//event listener on keyboard press
document.addEventListener("keypress", (event) => {
    console.log("Key pressed", event.key)
})

// add and remove list items
const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;

function addListItem() {
   
    const listItem : HTMLLIElement = document.createElement("li");
    const listItemValue : string | number = itemInput.value;

    if(listItemValue !== "" && " ") {
    
        listItem.textContent = listItemValue;
        list.append(listItem);
    }

    itemInput.value = "";
    itemInput.focus();
    const deleteBtn : HTMLButtonElement = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.margin = "10px"
    listItem.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
    })
}

addButton.addEventListener("click", () => addListItem());

itemInput.addEventListener("keypress" , (event) => {
    if (event.key === "Enter") {
       addListItem();
    }
})
paragraph.remove();
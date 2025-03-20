const bodyElement: HTMLElement = document.body;

bodyElement.style.backgroundColor = "#000";
bodyElement.style.color = "#fff";
bodyElement.style.border = "2px solid red";

let divElements: HTMLCollectionOf<HTMLDivElement> =
  document.getElementsByTagName("div");

console.log(divElements);

let btn: HTMLButtonElement = document.getElementsByTagName("button")[0];
btn.style.backgroundColor = "green";
btn.textContent = "About me";


let headingsTwo = document.getElementsByTagName("h2");

const shops : HTMLElement | null = document.getElementById("shops");

const items : HTMLCollectionOf<Element> = document.getElementsByClassName("list-item");

const secondItem : Element = document.getElementsByClassName("list-item")[1];

secondItem.textContent = "Second Element";

console.log(items);

const selectedH2 = document.querySelector("h3") as HTMLHeadElement;

if (selectedH2) {
    selectedH2.style.color = "blue";
}

console.log(selectedH2);
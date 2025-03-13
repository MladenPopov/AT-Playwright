const h1Heading = document.getElementById("title") as HTMLHeadingElement;
h1Heading.textContent = "Changed Title of H1 tag";

const paragraph1 = document.querySelector(".content p") as HTMLParagraphElement;
paragraph1.style.color = "green";

const listItems = document.getElementsByTagName(
  "li"
) as HTMLCollectionOf<HTMLLIElement>;
listItems[0].textContent = "apples";
listItems[1].textContent = "bananas";
listItems[2].textContent = "pears";

const button  = document.getElementById("clickMe") as HTMLElement;

if (button) {
    button.style.border = "1px  solid red"
}


console.log(button);

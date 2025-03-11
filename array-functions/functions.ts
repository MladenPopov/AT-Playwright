function greet() : void 
{
    console.log("Hello")
}

function multiplyNums(numberOne : number, numberTwo: number) : number {
    return numberOne*numberTwo
}

console.log(multiplyNums(5, 122))

function displayGreeting(firstName: string , lastName: string , age : number) : string {
    return `Hello Mr. ${lastName}, ${firstName}`;
}

displayGreeting('Ivan', 'Ivanov', 30);

console.log(displayGreeting('Ivan', 'Ivanove', 30));

function displayPetInfo (name: string , animal : string , age? : number) : string {
    return `${name} is a ${animal} ${age ? `is ${age} old` : "" }`;
}

console.log(displayPetInfo("Spike", "Dog", 13))
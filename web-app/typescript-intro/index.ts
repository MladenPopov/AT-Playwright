console.log('Hello, Friend')

// String
let message : String = "Hello, Peter";
let test: String = 'Mladen';
const welcomeMessage : String = 'Welcome';

let welcomeMessageLength = welcomeMessage.length;
console.log("welcomeMessageLength", welcomeMessageLength);


//let vs cosnt
let number : number = 5;
number = 10;
console.log(number);


// String interpolation
let welcomeMessageDetails: String = `My Welcome message length is ${welcomeMessageLength}`;
console.log(welcomeMessageDetails);
let userWelcomeMessage : String = `Welcome, ${test}`;
console.log(userWelcomeMessage);

// Number 
let firstNumber : number = 5;
let secondNumber : number = 10;

//Number math operations
let resultAdd: number = firstNumber + secondNumber;
let resultSubstract: number = firstNumber - secondNumber;
let resultMultiply: number = firstNumber * secondNumber;
let resultDivid: number = firstNumber / secondNumber;

//Boolean (true / false)
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbersEqualTo: boolean = 11 === firstNumber && 10 === secondNumber ;

console.log("isLower" , isLower)
console.log("areNumbersEqualTo", areNumbersEqualTo)


// any
let stringValue: any = 'Hello';
stringValue = 5;
stringValue = 10 === 10;


//ternary operator
const isPositiveNum : string = 5 > 0 ? "Number is positive." : "Number is negative.";

const age: number = 30;
const myName: string = "Pesho";
const personDescription = age < 40 ? `${myName} is younger than 40. He is ${age} years old` : `${myName} is older than 40. He is ${age} years old`;

const personName = `His name is "${myName}"`;

//If else statemet

if (age < 40) {
    console.log("Age is lower than 40.")
} else {
    console.log("Age is greater than 40.")
}

const num2: number = 50;
if (num2 < 10) {
    console.log ("The number is lower than 10")
} else if (num > 100 ){ 
    console.log ("The number is greater than 100.")
}
else {
    console.log ("The number is between 10 and 100")
}

//type aliases
type PersonInfoType = string | number;
const personInfoName : PersonInfoType = "Ivan"
const personInfoAge : PersonInfoType = 25;

type Status = "approved" | "rejected" | "pending" | "fullfiled";

const currentStatus: Status = "fullfiled"

type PersonData = {
    name : string,
    lastName: string,
    age: number,
    city ? : string
}

function displayePersonData ({name, lastName, age, city}: PersonData) : string {
    if (city) {
        
        return `${name} ${lastName} from ${city} is ${age} years old`
    }
    return `This is ${name}, ${lastName} and is ${age} years old`
}

//displayePersonData(20, "Pesho", "Petrov")
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

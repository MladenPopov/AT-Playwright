// Arrays
let numbersArray : number[] = [1,2,3,4];
let stringArray : string[] = ["asda", "asdsad", "asd" , "asdasd"]
let stringAndNumbersArray : (number | string)[] = [1, "pesho", 23, "ceco" ]

let fruits : string [] = ["apples", "pears", "bananas", "grapes"]
fruits[1] // pears

fruits.push("pineapples");
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift();
fruits.unshift("pineapples");
console.log(fruits)

let multiplyNumbers: number [] = numbersArray.map((element: number) => element * 2);

let multiplySpecialNumbers = numbersArray.map((element: number ) => {
    if (element > 2) {
        return element * 2;
    }
    else {
        return element;
    }
});

let filterNumsArray = numbersArray.filter((element) => element > 2)
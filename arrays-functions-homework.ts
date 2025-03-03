//Task 1
let arrayOfStrings : string[] = ["this", "is","an","array","of","strings"];
arrayOfStrings.push("new string");
console.log(arrayOfStrings);

//Task 2
let arrayOfNumbers : number[] = [1,5,7,9,0,123];
arrayOfNumbers.shift();
console.log(arrayOfNumbers)
 

//Task 3
let newNumbersArray = arrayOfNumbers.map((element: number) => element/2);
console.log(newNumbersArray)

//Task 4
let arrayTask4 : number [] = [3,7,1,9,12,4]
let filteredArray = arrayTask4.filter((element: number) => element > 5)
console.log(filteredArray)

//Task 5
let arrayTask5 : number [] = [9,3,7,2,8,5];
let sortedArray = arrayTask5.sort();
console.log(sortedArray)

//Task 6
let fruitArray : string [] = ["apple", "banana", "cherry", "date", "elderberry"]
let slicedArray = fruitArray.slice(0,3);
console.log(slicedArray)

//Task 7
function findLargest (number1: number , number2 : number , number3: number) : number {
    if (number1 > number2) {
        if (number1 > number3) {
            return number1;
        } else {
            return number3;
        }
        
    } else if (number2 > number3) {
        return number2;
    } else {
        return number3;
    }
        
}
console.log(findLargest(13,27,10));
console.log(findLargest(13,7,1));
console.log(findLargest(1,2,5));

//Task 8
function convertToCentimeters (lengthInInches: number) : number {
    return lengthInInches * 2.5;
}
console.log(convertToCentimeters(7))

//Task9 
function calculatedArea(width: number, height? : number ) : number {
    if(height === undefined) {
        return width*width
    }
    else {
        return width*height
    }
}

console.log(calculatedArea(5,6))
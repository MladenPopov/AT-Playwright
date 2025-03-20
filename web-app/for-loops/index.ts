// for loops
let fruits1: string[] = ["apples", "bananas", "peaches", "watermelons"];

//for ... of loop accesses only the array values
for (let fruit of fruits1) {
  console.log("fruit", fruit);
}

// for of loop for numbers
let numbers: number[] = [10, 20, 30, 40, 50, 60];

for (let number of numbers) {
  if (number > 20) {
    console.log(`number is ${number}`);
  } else {
    console.log(`${number} plus 5 is ${number + 5}`);
  }
}

//for..of loop for strings
let string: string = "Hello , Friend";

// == сравнява само стойността дали е равна на параметъра , === сравнява и стойността и типа на параметъра

for (let letter of string) {
  if (letter === "o") {
    console.log(letter.replace("o", "@"));
  } else {
    console.log(letter);
  }
}

//replace example
let welcomeMessage1: string = "Welcome test Pesho! How test are you test?";
let editedString = welcomeMessage1.replace("test", "");
console.log(editedString);

//for..in loops example over object
interface Stud {
  name: string;
  lastName: string;
  age: number;
}
const stud: Stud = { name: "Pesho", lastName: "Peshov", age: 23 };

for (let keys in stud) {
  //accessing object value by passing object key as keyOf Stud
  console.log(`${keys} = ${stud[keys as keyof Stud]}`);
}

let numb: number[] = [1, 2, 3, 4, 5, 6];

for (let index in numb) {
  //accessing array value by passing array index
  console.log(`${index} = ${numb[index]}`);
}

// for loop
for (let i = 0; i <= 5; i++) {
  // console.log(i)
}

//for loop incrementation
let manyNumbersArr: number[] = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28,
];

for (let i = 0; i < manyNumbersArr.length; i++) {
  if (manyNumbersArr[i] <= 10) {
    console.log(manyNumbersArr[i]);
  } else {
    console.log(manyNumbersArr[i] / 2);
  }
}

for (let i = 0; i < manyNumbersArr.length; i += 2) {
  // console.log(i)
}
//for decrementation
for (let i = 30; i >= 0; i--) {
  // console.log(i);
}

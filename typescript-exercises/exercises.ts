// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string

interface Country {
  name: string;
  capital: string | "Sofia";
  population: number;
  language: string;
}
// Step Two: Declare an object "country" with properties following "Country" interface
const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  language: "bulgarian",
  population: 7000000,
};
const secondCountry: Country = {
  name: "Germany",
  capital: "Berlin",
  language: "german",
  population: 89000000,
};
// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it
function displayCountryDetails(countryObj: Country): string {
  return `${countryObj.name} with capital ${countryObj.capital} has population of ${countryObj.population} that speak ${countryObj.language}`;
}

console.log(displayCountryDetails(firstCountry));

console.log(displayCountryDetails(secondCountry));
//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"
const studentOne: Student = {
  id: 600,
  name: "Pesho",
  age: 25,
  grade: 5,
};

const studentTwo: Student = { id: 22, name: "Ivan", age: 24, grade: 4 };
const studentThree: Student = { id: 253, name: "Kiro", age: 21, grade: 6 };
// Step Three: Declare array "students" with objects of type "Student"

let students: Student[] = [studentOne, studentTwo, studentThree];

students.map((student) => student.grade = 4);

students.map((student) => {
    if (student.name === "Ivan") {
        student.grade = 3;
    }
});

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result
function getStudents(studentsArr: Student[]): string[] {
    return students.map(student => student.name);
}
const studentName = getStudents(students);
console.log(studentName)
//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending

function sortStudents(studentsArr: Student[]) {
  return studentsArr.sort((a,b) => a.id-b.id)
}

console.log(sortStudents(students))